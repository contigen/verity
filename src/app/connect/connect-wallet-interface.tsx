'use client'

import { Button } from '@/components/ui/button'
import { ButtonGold } from '@/components/ui/button-gold'
import { CardContent } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'
import { connectWallet } from '@/lib/wallet'
import { Wallet, Loader2, BotMessageSquare } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { toast } from 'sonner'

export function ConnectWalletInterface() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
  }

  const [address, setAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [trustScore, setTrustScore] = useState<number | null>(null)
  const [lastAnalysis, setLastAnalysis] = useState<string | null>(null)

  async function handleConnect() {
    setIsConnecting(true)
    const result = await connectWallet()
    setIsConnecting(false)
    if (result) {
      const { address } = result
      setAddress(address)
      setTrustScore(78)
      setLastAnalysis('2023-04-15')
      await signIn('credentials', { walletAddress: address })
      toast.success('Wallet Connected', {
        description: 'Successfully connected Wallet',
      })
    } else {
      toast.error('Failed to connect wallet')
    }
  }

  return (
    <CardContent>
      {!address ? (
        <div className='flex flex-col items-center py-8'>
          <section className='flex items-center justify-center mb-6'>
            <span className='font-pixel font-semibold text-7xl md:text-8xl lg:text-9xl'>
              0x
            </span>
            <BotMessageSquare className='size-14 text-muted-foreground self-end' />
          </section>
          <ButtonGold
            size='lg'
            className='w-full'
            onClick={handleConnect}
            disabled={isConnecting}
          >
            {isConnecting ? (
              <>
                <Spinner />
                Connecting...
              </>
            ) : (
              'Connect with MetaMask / WalletConnect'
            )}
          </ButtonGold>
        </div>
      ) : (
        <div className='space-y-6'>
          <div className='p-4 rounded-lg bg-secondary'>
            <div className='mb-1 text-sm text-muted-foreground'>
              Connected Wallet
            </div>
            <div className='font-mono text-sm break-all'>
              <span className='text-6xl font-bold font-pixel text-gold'>
                0x
              </span>
              {address.slice(2)}
            </div>
          </div>

          {trustScore ? (
            <div className='flex flex-col items-center'>
              <div className='mb-4 trust-score-ring'>
                <div className='trust-score-content'>
                  <span className='text-4xl font-bold'>{trustScore}</span>
                  <span className='text-xs text-muted-foreground'>
                    TRUST SCORE
                  </span>
                </div>
              </div>

              <div className='text-center'>
                <p className='text-sm text-muted-foreground'>
                  Last analyzed: {lastAnalysis}
                </p>
                <Button
                  variant='outline'
                  className='mt-2'
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                      Analyzing...
                    </>
                  ) : (
                    'Run Analysis Again'
                  )}
                </Button>
              </div>
            </div>
          ) : (
            <div className='py-4 text-center'>
              <p className='mb-4 text-muted-foreground'>
                No Trust Score found for this wallet
              </p>
              <ButtonGold onClick={handleAnalyze} disabled={isAnalyzing}>
                {isAnalyzing ? (
                  <>
                    <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                    Analyzing...
                  </>
                ) : (
                  'Run Analysis'
                )}
              </ButtonGold>
            </div>
          )}
        </div>
      )}
    </CardContent>
  )
}
