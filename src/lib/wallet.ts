import { ethers } from 'ethers'
import { MetaMaskInpageProvider } from '@metamask/providers'

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

export const connectWallet = async () => {
  if (typeof window?.ethereum !== 'undefined') {
    try {
      const rootstockTestnet = {
        chainId: '0x1f',
        chainName: 'RSK Testnet',
        nativeCurrency: {
          name: 'Test Smart Bitcoin',
          symbol: 'tRBTC',
          decimals: 18,
        },
        rpcUrls: [`https://public-node.testnet.rsk.co`],
        blockExplorerUrls: [`https://explorer.testnet.rootstock.io`],
      }
      const networkConfig = rootstockTestnet
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [networkConfig],
        })
      } catch (error) {
        console.log('Network may already be added to MetaMask:', error)
      }
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: networkConfig.chainId }],
      })
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const address = await signer.getAddress()
      return { provider, signer, address }
    } catch {
      return ''
    }
  }
}
