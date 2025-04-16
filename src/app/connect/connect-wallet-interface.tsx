'use client'

import { Button } from '@/components/ui/button'
import { ButtonGold } from '@/components/ui/button-gold'
import { CardContent } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'
import { Wallet, Loader2 } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

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

  const connect = async () => {
    setIsConnecting(true)

    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      const mockAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F'
      setAddress(mockAddress)

      setTrustScore(78)
      setLastAnalysis('2023-04-15')
      await signIn('credentials', { walletAddress: mockAddress })
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <CardContent>
      {!address ? (
        <div className='flex flex-col items-center py-8'>
          <Wallet className='w-16 h-16 mb-6 text-muted-foreground' />
          <ButtonGold
            size='lg'
            className='w-full'
            onClick={connect}
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
            <div className='font-mono text-sm break-all'>{address}</div>
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
