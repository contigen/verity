'use client'

import { fetchContractDetailsAction } from '@/actions'
import { WalletCard } from '@/components/wallet-card'
import { rootstockConfig } from '@/lib/rootstock'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import { WagmiProvider } from 'wagmi'

const queryClient = new QueryClient()

export default function Page() {
  useEffect(() => {
    fetchContractDetailsAction()
  }, [])
  return (
    <WagmiProvider config={rootstockConfig}>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Verity Demo</h1>
          <WalletCard />
          <div className='my-8'></div>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
