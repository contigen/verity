import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Verity | Trust Wallets. Detect Sybils.',
  description:
    'AI-powered wallet reputation scoring & Sybil detection for Web3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn('min-h-screen bg-background font-sans antialiased', '')}
        suppressHydrationWarning
      >
        {children}
        <Toaster duration={2000} closeButton />
      </body>
    </html>
  )
}
