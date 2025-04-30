import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { ConnectWalletInterface } from './connect-wallet-interface'
import { logo } from '@/components/ui/logo'

export default function ConnectPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='container flex items-center py-6'>
        <Link href='/' className='flex items-center gap-2'>
          {logo}
          <span className='text-xl font-bold'>verity</span>
        </Link>
      </header>

      <main className='container flex-1 max-w-md py-12 mx-auto'>
        <Link
          href='/'
          className='inline-flex items-center mb-8 text-sm text-muted-foreground hover:text-foreground'
        >
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to home
        </Link>

        <Card className='border-border'>
          <CardHeader>
            <CardTitle className='text-2xl'>Connect Your Wallet</CardTitle>
            <CardDescription>
              Connect your wallet to view your Trust Score and Sybil analysis
            </CardDescription>
          </CardHeader>
          <ConnectWalletInterface />
          <CardFooter className='flex justify-center pt-6 border-t'>
            <p className='text-xs text-center text-muted-foreground'>
              Verity never stores your private keys and only analyzes public
              on-chain data
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
