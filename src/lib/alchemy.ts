import { createPublicClient, http, Block } from 'viem'
import { rootstockTestnet } from 'viem/chains'
import {
  Alchemy,
  AssetTransfersCategory,
  Network,
  SortingOrder,
} from 'alchemy-sdk'

const networkURL = process.env.ALCHEMY_NETWORK_URL!
const client = createPublicClient({
  chain: rootstockTestnet,
  transport: http(networkURL),
})

const apiKey = process.env.ALCHEMY_API_KEY!

export async function getBlockData() {
  const block: Block = await client.getBlock({
    blockNumber: 123456n,
  })
  return block
}

const config = {
  apiKey,
  network: Network.ROOTSTOCK_TESTNET,
  connectionInfoOverrides: {
    skipFetchSetup: true,
  },
}
const alchemy = new Alchemy(config)

export async function getUserTransfers(userAddress: string) {
  const { transfers } = await alchemy.core.getAssetTransfers({
    fromAddress: userAddress,
    excludeZeroValue: false,
    withMetadata: true,
    order: SortingOrder.DESCENDING,
    category: [
      AssetTransfersCategory.ERC721,
      AssetTransfersCategory.ERC1155,
      AssetTransfersCategory.EXTERNAL,
      AssetTransfersCategory.ERC20,
      AssetTransfersCategory.SPECIALNFT,
    ],
  })
  return transfers
}

const options = {
  method: 'POST',
  headers: { accept: 'application/json', 'content-type': 'application/json' },
  body: JSON.stringify({
    addresses: [
      {
        address: '',
        networks: ['rootstock-testnet'],
      },
    ],
    withMetadata: true,
    withPrices: true,
    includeNativeTokens: true,
  }),
}

export async function getTokenBalancesByAddress(userAddress: string) {
  return await alchemy.core.getTokenBalances(userAddress)
}

export async function getTransactionReceipt(hash: string) {
  return await alchemy.core.getTransactionReceipt(hash)
}
