'use client'

import { useState, useEffect } from 'react'
import { Shield, Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface AISuggestionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  walletAddress?: string
  onSelectSuggestion: (suggestion: string) => void
}

export function AISuggestionModal({
  open,
  onOpenChange,
  walletAddress,
  onSelectSuggestion,
}: AISuggestionModalProps) {
  const [loading, setLoading] = useState(true)
  const [suggestions, setSuggestions] = useState<string[]>([])

  // Simulate loading and generating suggestions
  useEffect(() => {
    if (open) {
      setLoading(true)
      // Mock AI suggestion generation
      const timer = setTimeout(() => {
        setSuggestions([
          'This wallet has been a reliable trading partner with consistent and fair transactions.',
          'A valuable contributor to multiple DAOs with thoughtful governance participation.',
          'Demonstrates deep DeFi expertise through sophisticated protocol interactions.',
        ])
        setLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md bg-[#0a0e17] border-gray-800 text-white'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Shield className='h-5 w-5 text-gold' />
            AI-Generated Endorsement Suggestions
          </DialogTitle>
          <DialogDescription className='text-gray-400'>
            {walletAddress ? (
              <>
                For wallet: {walletAddress.substring(0, 6)}...
                {walletAddress.substring(walletAddress.length - 4)}
              </>
            ) : (
              <>Based on on-chain analysis</>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className='py-4'>
          {loading ? (
            <div className='flex flex-col items-center justify-center py-8'>
              <Loader2 className='h-8 w-8 text-gold animate-spin mb-4' />
              <p className='text-sm text-gray-400'>
                Analyzing on-chain data and generating suggestions...
              </p>
            </div>
          ) : (
            <div className='space-y-4'>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className='p-3 rounded-lg border border-border hover:border-gold cursor-pointer transition-colors'
                  onClick={() => {
                    onSelectSuggestion(suggestion)
                    onOpenChange(false)
                  }}
                >
                  <p className='text-sm'>{suggestion}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='flex justify-end'>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
