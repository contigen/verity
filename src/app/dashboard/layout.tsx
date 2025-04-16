import { SessionProvider } from 'next-auth/react'
import { Sidebar } from '@/components/sidebar'
import { auth } from '@/auth'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <div className='min-h-screen flex flex-col md:flex-row'>
        <Sidebar />
        <main className='flex-1'>{children}</main>
      </div>
    </SessionProvider>
  )
}
