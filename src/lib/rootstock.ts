import { Chain } from 'thirdweb'
import { http } from 'viem'
import { createConfig } from 'wagmi'
import { rootstockTestnet as _rootstockTestnet } from 'wagmi/chains'

export const rootstockTestnet: Chain = {
  id: 31,
  name: `Rootstock Testnet`,
  nativeCurrency: {
    decimals: 18,
    name: `Test RBTC`,
    symbol: `tRBTC`,
  },
  rpc: `https://public-node.testnet.rsk.co`,
  testnet: true,
}

export const rootstockConfig = createConfig({
  chains: [_rootstockTestnet],
  transports: {
    [_rootstockTestnet.id]: http(),
  },
})
