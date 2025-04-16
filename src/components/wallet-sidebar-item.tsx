import { CheckCircle, Wallet } from 'lucide-react'

export function WalletSidebarItem({ address }: { address: string }) {
  const displayAddress = address
    ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
    : null

  return (
    <div className='flex items-center gap-3 px-3 py-2 rounded-md  mx-2 mt-6 mb-4 bg-gray-800/30 hover:bg-gray-800/50 transition-colors'>
      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10'>
        <Wallet className='w-4 h-4 text-gold' />
      </div>
      <div className='flex flex-col'>
        <span className='text-sm font-medium text-white'>Wallet</span>
        {displayAddress && (
          <span className='text-xs text-gray-400'>{displayAddress}</span>
        )}
      </div>
      <CheckCircle className='size-4 text-green-500 ml-auto' />
    </div>
  )
}
