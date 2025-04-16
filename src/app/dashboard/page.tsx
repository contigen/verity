import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Activity,
  Clock,
  Bot,
  Footprints,
  BarChartIcon,
  PieChartIcon,
} from 'lucide-react'
import { ActivityCharts } from './activity-charts'

export default function DashboardPage() {
  const trustScore = 78

  return (
    <div className='container py-8'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold'>Trust Score Dashboard</h1>
          <p className='text-muted-foreground'>
            View and analyze your wallet&apos;s reputation
          </p>
        </div>

        <div className='mt-4 md:mt-0 flex items-center gap-2'>
          <Badge variant='outline' className='bg-secondary text-foreground'>
            DeFi User
          </Badge>
          <Badge variant='outline' className='bg-secondary text-foreground'>
            NFT Collector
          </Badge>
          <Badge
            variant='outline'
            className='bg-[hsl(var(--gold)/0.1)] text-[hsl(var(--gold))] border-[hsl(var(--gold)/0.2)]'
          >
            Trusted
          </Badge>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        <Card className='md:col-span-1 border-border'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-xl'>Trust Score</CardTitle>
            <CardDescription>Your overall reputation score</CardDescription>
          </CardHeader>
          <CardContent className='h-full'>
            <div className='flex flex-col items-center justify-center h-[85%]'>
              <div className='trust-score-ring mb-4'>
                <div className='trust-score-content'>
                  <span className='text-4xl font-bold'>{trustScore}</span>
                  <span className='text-xs text-muted-foreground'>
                    TRUST SCORE
                  </span>
                </div>
              </div>

              <p className='text-sm text-center text-muted-foreground'>
                Your wallet has consistent DeFi usage across 8 dApps with a
                strong history of legitimate transactions.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className='md:col-span-2 border-border'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-xl'>Activity Overview</CardTitle>
            <CardDescription>Transaction history and patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue='transactions'>
              <TabsList className='mb-4'>
                <TabsTrigger value='transactions'>
                  <BarChartIcon className='h-4 w-4 mr-2' />
                  Transactions
                </TabsTrigger>
                <TabsTrigger value='distribution'>
                  <PieChartIcon className='h-4 w-4 mr-2' />
                  Distribution
                </TabsTrigger>
              </TabsList>
              <ActivityCharts />
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <Card className='border-border'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-lg flex items-center'>
              <Activity className='h-5 w-5 mr-2 text-[hsl(var(--gold))]' />
              Transaction Diversity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold mb-2'>82/100</div>
            <p className='text-sm text-muted-foreground'>
              High diversity across 8 different protocols and 12 token types
            </p>
          </CardContent>
        </Card>

        <Card className='border-border'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-lg flex items-center'>
              <Clock className='h-5 w-5 mr-2 text-[hsl(var(--gold))]' />
              Time Active
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold mb-2'>94/100</div>
            <p className='text-sm text-muted-foreground'>
              Active for 2.3 years with consistent transaction patterns
            </p>
          </CardContent>
        </Card>

        <Card className='border-border'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-lg flex items-center'>
              <Bot className='h-5 w-5 mr-2 text-[hsl(var(--gold))]' />
              Bot Likelihood
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold mb-2'>12/100</div>
            <p className='text-sm text-muted-foreground'>
              Low probability of automated or bot-like behavior
            </p>
          </CardContent>
        </Card>

        <Card className='border-border'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-lg flex items-center'>
              <Footprints className='h-5 w-5 mr-2 text-[hsl(var(--gold))]' />
              On-chain Footprint
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold mb-2'>76/100</div>
            <p className='text-sm text-muted-foreground'>
              Strong presence with 340+ transactions across multiple chains
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
