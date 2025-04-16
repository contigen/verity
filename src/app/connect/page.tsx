import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Shield, ArrowLeft } from 'lucide-react'
import { ConnectWalletInterface } from './connect-wallet-interface'

export default function ConnectPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='container flex items-center py-6'>
        <Link href='/' className='flex items-center gap-2'>
          <Shield className='w-6 h-6 text-[hsl(var(--gold))]' />
          <span className='text-xl font-bold'>verity</span>
        </Link>
      </header>

      <main className='flex-1 container py-12 max-w-md mx-auto'>
        <Link
          href='/'
          className='inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
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
          <CardFooter className='flex justify-center border-t pt-6'>
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
