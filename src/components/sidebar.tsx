'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, BarChart3, Network, Users, Code, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { WalletSidebarItem } from '@/components/wallet-sidebar-item'
import { signOut, useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { logo } from './ui/logo'

export function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const address = session?.user.walletAddress

  const navigation = [
    { name: 'Trust Score', href: '/', icon: BarChart3 },
    { name: 'Sybil Signals', href: '/signals', icon: Network },
    { name: 'Compare Wallets', href: '/compare', icon: Users },
    { name: 'Endorsements', href: '/endorsements', icon: Shield },
    { name: 'Developer API', href: '/api', icon: Code },
  ]

  function disconnect() {
    toast.info('Wallet disconnected. You are signed out.')
    signOut()
  }

  return (
    <aside className='sticky top-0 w-full border-r md:w-64 bg-card border-border max-h-dvh'>
      <div className='flex flex-col h-full'>
        <div className='flex items-center gap-2 p-4 border-b border-border'>
          {logo}
          <Link href='/' className='text-xl font-bold'>
            verity
          </Link>
        </div>

        <div className='p-4 border-b border-border'>
          <WalletSidebarItem address={address!} />
          <p className='px-3 font-mono text-xs truncate'>{address}</p>
        </div>
        <nav className='flex-1 p-2 my-4 space-y-2'>
          {navigation.map(item => (
            <Link
              key={item.name}
              href={`/dashboard${item.href}`}
              className={cn(
                'sidebar-item',
                (pathname === `/dashboard${item.href}` ||
                  (item.href === '/' && pathname === '/dashboard')) &&
                  'active'
              )}
            >
              <item.icon />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className='p-4 border-t border-border'>
          <Button
            variant='ghost'
            className='justify-start w-full text-muted-foreground hover:text-foreground'
            onClick={disconnect}
          >
            <LogOut className='w-4 h-4 mr-2' />
            Disconnect
          </Button>
        </div>
      </div>
    </aside>
  )
}
