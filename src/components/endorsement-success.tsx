'use client'

import { useState, useEffect } from 'react'
import { Check, ExternalLink } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type EndorsementSuccessProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  walletAddress?: string
  transactionHash?: string
}

export function EndorsementSuccess({
  open,
  onOpenChange,
  walletAddress,
  transactionHash = '0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9',
}: EndorsementSuccessProps) {
  const [countdown, setCountdown] = useState(5)

  // Auto-close after countdown
  useEffect(() => {
    if (!open) return

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      onOpenChange(false)
    }
  }, [countdown, open, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md bg-[#0a0e17] border-gray-800 text-white'>
        <DialogHeader>
          <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20 mb-4'>
            <Check className='size-6 text-green-500' />
          </div>
          <DialogTitle className='text-center'>
            Endorsement Submitted
          </DialogTitle>
        </DialogHeader>

        <div className='py-4'>
          <div className='text-center mb-4'>
            <p className='text-sm text-gray-400'>
              Your endorsement for wallet{' '}
              {walletAddress ? (
                <>
                  {walletAddress.substring(0, 6)}...
                  {walletAddress.substring(walletAddress.length - 4)}
                </>
              ) : (
                <>0x1234...5678</>
              )}{' '}
              has been successfully submitted to the blockchain.
            </p>
          </div>

          <div className='bg-gray-900/30 p-3 rounded-lg text-xs text-gray-400 flex items-center justify-between'>
            <span>Transaction Hash:</span>
            <div className='flex items-center gap-1'>
              <span className='font-mono'>
                {transactionHash.substring(0, 10)}...
                {transactionHash.substring(transactionHash.length - 8)}
              </span>
              <Button variant='ghost' size='icon' className='h-6 w-6'>
                <ExternalLink className='h-3 w-3 text-gold' />
              </Button>
            </div>
          </div>

          <div className='mt-6 text-center text-sm text-gray-400'>
            This dialog will close in {countdown} seconds
          </div>
        </div>

        <div className='flex justify-center'>
          <Button
            className='bg-gold hover:bg-gold/90 text-black'
            onClick={() => onOpenChange(false)}
          >
            Return to Dashboard
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
