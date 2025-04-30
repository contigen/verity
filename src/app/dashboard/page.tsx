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
import { getCachedUserIdentity, getUserWalletFromSession } from '@/actions'
import { cn } from '@/lib/utils'

export default async function DashboardPage() {
  const wallet = await getUserWalletFromSession()
  const identity = await getCachedUserIdentity(wallet)!
  if (!identity?.success) {
    throw Error(identity?.message)
  }
  const identityObject = identity.validatedObject
  console.log('identity: ', identity)
  const {
    tags,
    trustScore,
    explanation,
    signals,
    activityData,
    protocolDistributionAnalysis,
  } = identityObject!

  const signalMeta = {
    transactionDiversity: {
      icon: Activity,
      title: `Transaction Diversity`,
    },
    timeActive: {
      icon: Clock,
      title: `Time Active`,
    },
    botLikelihood: {
      icon: Bot,
      title: `Bot Likelihood`,
    },
    onchainFootprint: {
      icon: Footprints,
      title: `On-chain Footprint`,
    },
  }
  return (
    <div className='container py-8'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold'>Trust Score Dashboard</h1>
          <p className='text-muted-foreground'>
            View and analyse your wallet&apos;s reputation
          </p>
        </div>

        <div className='mt-4 md:mt-0 flex items-center gap-2'>
          {tags.map((tag, idx, arr) => (
            <Badge
              variant='outline'
              className={cn(
                `bg-secondary text-foreground`,
                idx === arr.length - 1 && `bg-gold/10 text-gold border-gold`
              )}
              key={tag}
            >
              {tag}
            </Badge>
          ))}
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

              <p className='text-sm text-pretty text-muted-foreground'>
                {explanation}
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
              <ActivityCharts
                {...{ activityData, protocolDistributionAnalysis }}
              />
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {Object.entries(signals).map(([key, { percentage, note }]) => {
          const { icon: Icon, title } =
            signalMeta[key as keyof typeof signalMeta]
          return (
            <Card key={key} className='border-border'>
              <CardHeader className='pb-2'>
                <CardTitle className='text-lg flex items-center'>
                  <Icon className='h-5 w-5 mr-2 text-[hsl(var(--gold))]' />
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-3xl font-bold mb-2'>{percentage}/100</div>
                <p className='text-sm text-muted-foreground'>{note}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
