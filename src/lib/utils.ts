import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { createPublicClient, http } from 'viem'
import { rootstockTestnet } from 'viem/chains'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const client = createPublicClient({
  chain: rootstockTestnet,
  transport: http(`https://public-node.testnet.rsk.co`),
})

export async function getContractsInteractedWith(
  walletAddress: `0x${string}`,
  recentBlockCount: number = 20,
  batchSize: number = 10
) {
  const latestBlock = await client.getBlockNumber()
  const startBlock = latestBlock - BigInt(recentBlockCount)

  const contractDetails = [] as {
    address: `0x${string}`
    type: string
    bytecode: string
    transactions: {
      txHash: `0x${string}`
      from: `0x${string}`
      to: `0x${string}`
      method: string
      value: string
      timestamp: string
      status: string
    }[]
  }[]

  console.log(`Scanning blocks from ${startBlock} to ${latestBlock}`)

  for (let i = latestBlock; i >= startBlock; i -= BigInt(batchSize)) {
    const batchBlocks = Array.from(
      { length: batchSize },
      (_, idx) => i - BigInt(idx)
    ).filter(b => b >= startBlock)

    const blocks = await Promise.allSettled(
      batchBlocks.map(blockNumber =>
        client.getBlock({ blockNumber, includeTransactions: true })
      )
    )

    for (const blockResult of blocks) {
      if (blockResult.status === `fulfilled`) {
        const block = blockResult.value
        console.log(`Processing Block #${block.number}`)

        for (const tx of block.transactions) {
          const txData = tx
          if (txData.from.toLowerCase() === walletAddress.toLowerCase()) {
            if (txData.to) {
              const code = await client.getCode({ address: txData.to })
              if (code && code !== `0x`) {
                console.log(
                  `Contract interaction found at address: ${txData.to}`
                )

                const contractType = await detectContractType(
                  txData.to as `0x${string}`
                )

                let contract = contractDetails.find(
                  c => c.address === txData.to?.toLowerCase()
                )

                if (!contract) {
                  contract = {
                    address: txData.to.toLowerCase() as `0x${string}`,
                    type: contractType,
                    bytecode: code,
                    transactions: [],
                  }
                  contractDetails.push(contract)
                }

                const method = await decodeTransactionMethod(txData.input)
                const value = txData.value
                const status = txData.blockHash ? 'success' : 'failure'
                contract?.transactions.push({
                  txHash: txData.hash,
                  from: txData.from as `0x${string}`,
                  to: txData.to as `0x${string}`,
                  method,
                  value: value.toString(),
                  timestamp: new Date(
                    Number(block.timestamp) * 1000
                  ).toISOString(),
                  status,
                })
              }
            }
          }
        }
      }
    }
  }

  return contractDetails
}

async function detectContractType(address: `0x${string}`): Promise<string> {
  const bytecode = await client.getBytecode({ address })

  // Basic heuristic to identify common contract types
  if (bytecode?.includes('0x95d89b41')) {
    return 'ERC20'
  } else if (bytecode?.includes('0x80ac58cd')) {
    return 'ERC721'
  } else if (bytecode?.includes('0xd9b67a26')) {
    return 'ERC1155'
  } else if (bytecode?.includes('0x3f4ba83e')) {
    return 'ERC4626'
  } else {
    return 'Unknown'
  }
}

async function decodeTransactionMethod(input: string): Promise<string> {
  if (input.startsWith('0xa9059cbb')) {
    // 'transfer(address,uint256)' signature
    return 'transfer'
  } else if (input.startsWith('0x095ea7b3')) {
    // 'approve(address,uint256)' signature
    return 'approve'
  }

  return 'Unknown Method'
}
