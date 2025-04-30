import { createConfig } from 'wagmi'
import {} from '@wagmi/core'
import { Chain } from 'viem'

// Rootstock Testnet configuration
export const rootstockTestnet: Chain = {
  id: 31,
  name: 'Rootstock Testnet',
  network: 'rsk-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Testnet RBTC',
    symbol: 'tRBTC',
  },
  rpcUrls: {
    default: {
      http: ['https://public-node.testnet.rsk.co'],
    },
  },
  blockExplorers: {
    default: {
      name: 'RSK Explorer',
      url: 'https://explorer.testnet.rsk.co',
    },
  },
  testnet: true,
}

// Configure chains and create the wagmi config
const { chains, publicClient } = configureChains(
  [rootstockTestnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: 'https://public-node.testnet.rsk.co',
      }),
    }),
  ]
)

export const client = createConfig({
  autoConnect: true,
  publicClient,
})
