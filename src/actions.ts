'use server'

import { generateObject } from 'ai'
import { google } from '@ai-sdk/google'
import { combinedReputationSchema } from './lib/schema'
import { compareWalletSchema } from './lib/schema'
import { ZodError } from 'zod'
import {
  getTokenBalancesByAddress,
  getTransactionReceipt,
  getUserTransfers,
} from './lib/alchemy'
import { FULL_SYSTEM_INSTRUCTION } from './constant'
import { getContractsInteractedWith } from './lib/utils'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import { unstable_cache } from 'next/cache'

export async function getUserWalletFromSession() {
  const session = await auth()
  const walletAddress = session?.user.walletAddress
  if (!walletAddress) redirect('/connect')
  return walletAddress
}

export async function analyseOnchainData(data: string) {
  try {
    const { object } = await generateObject({
      model: google(`gemini-2.5-pro-exp-03-25`),
      system: FULL_SYSTEM_INSTRUCTION,
      prompt: `Here's the onchain data for the user: ${data} \n
      analyse critically`,
      schema: combinedReputationSchema,
    })
    const validatedObject = await combinedReputationSchema.parseAsync(object)
    return { success: true, message: `success`, validatedObject }
  } catch (err) {
    if (err instanceof ZodError) {
      return {
        success: false,
        message: `AI Could not generate the addequate analysis`,
      }
    }
  }
}

export async function getUserTransfersAction() {
  const wallet = await getUserWalletFromSession()
  const transfers = await getUserTransfers(wallet)
  const transactionReceipts = transfers.map(async transfer => {
    return await getTransactionReceipt(transfer.hash)
  })
  return { transfers, transactionReceipts }
}

export async function getTokenBalancesByAddressAction() {
  const wallet = await getUserWalletFromSession()

  const { tokenBalances } = await getTokenBalancesByAddress(wallet)
  return tokenBalances.join()
}

export async function fetchContractDetailsAction() {
  const wallet = await getUserWalletFromSession()

  const contracts = await getContractsInteractedWith(wallet as `0x${string}`)
  console.log(contracts)
  return contracts
}

export async function getUserIdentity(wallet: string) {
  const [transfers, tokenBalances, contracts] = await Promise.all([
    getUserTransfers(wallet),
    getTokenBalancesByAddress(wallet),
    getContractsInteractedWith(wallet as `0x${string}`),
  ])

  const transactionReceipts = await Promise.all(
    transfers.map(transfer => getTransactionReceipt(transfer.hash))
  )

  return {
    wallet,
    transfers,
    tokenBalances: tokenBalances.tokenBalances,
    transactionReceipts,
    contractsInteractedWith: contracts,
  }
}

export const getCachedUserIdentity = unstable_cache(
  async (wallet: string) => {
    const identity = await getUserIdentity(wallet)
    const serialised = JSON.stringify(identity)
    return await analyseOnchainData(serialised)
  },
  ['user-identity'],
  {
    tags: ['identity'],
  }
)

export async function compareWallets(wallets: string[]) {
  try {
    const identities = await Promise.all(
      wallets.map(wallet => getUserIdentity(wallet))
    )
    const serialised = JSON.stringify(identities.join())

    const { object } = await generateObject({
      model: google(`gemini-2.5-pro-exp-03-25`),
      system: FULL_SYSTEM_INSTRUCTION,
      prompt: `Compare the following wallets and assess:
- Trust score per wallet
- Similarity across them
- Risk levels
- Whether they belong to the same behavioural or onchain cluster

Data: ${serialised}`,
      schema: compareWalletSchema,
    })

    const validated = await compareWalletSchema.parseAsync(object)

    return { success: true, message: `success`, result: validated }
  } catch (err) {
    console.error(err)
    if (err instanceof ZodError) {
      return {
        success: false,
        message: `AI returned invalid comparison format`,
      }
    }
    return {
      success: false,
      message: `Unhandled error occurred`,
    }
  }
}
