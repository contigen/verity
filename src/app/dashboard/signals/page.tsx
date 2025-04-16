import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  CheckCircle,
  AlertTriangle,
  Network,
  Activity,
  Calendar,
} from 'lucide-react'

export default function SignalsPage() {
  return (
    <div className='container py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>Sybil Signals</h1>
        <p className='text-muted-foreground'>
          Detailed analysis of potential Sybil indicators
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
        <Card className='lg:col-span-2 border-border'>
          <CardHeader>
            <CardTitle className='text-xl'>Network Analysis</CardTitle>
            <CardDescription>
              Wallet relationships and clustering
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='h-[400px] relative network-animation rounded-md border border-border p-4'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center'>
                  <Network className='h-16 w-16 text-[hsl(var(--gold))] mx-auto mb-4' />
                  <p className='text-muted-foreground'>Network visualization</p>
                </div>
              </div>

              {/* Network nodes */}
              <div className='absolute w-4 h-4 rounded-full bg-[hsl(var(--gold))] top-[30%] left-[50%] animate-pulse'></div>
              <div
                className='absolute w-3 h-3 rounded-full bg-secondary top-[40%] left-[30%] animate-pulse'
                style={{ animationDelay: '0.5s' }}
              ></div>
              <div
                className='absolute w-3 h-3 rounded-full bg-secondary top-[50%] left-[70%] animate-pulse'
                style={{ animationDelay: '1s' }}
              ></div>
              <div
                className='absolute w-2 h-2 rounded-full bg-secondary top-[60%] left-[40%] animate-pulse'
                style={{ animationDelay: '1.5s' }}
              ></div>
              <div
                className='absolute w-2 h-2 rounded-full bg-secondary top-[20%] left-[60%] animate-pulse'
                style={{ animationDelay: '2s' }}
              ></div>

              {/* Lines connecting nodes */}
              <svg
                className='absolute inset-0 w-full h-full'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  x1='50%'
                  y1='30%'
                  x2='30%'
                  y2='40%'
                  stroke='hsl(var(--border))'
                  strokeWidth='1'
                />
                <line
                  x1='50%'
                  y1='30%'
                  x2='70%'
                  y2='50%'
                  stroke='hsl(var(--border))'
                  strokeWidth='1'
                />
                <line
                  x1='50%'
                  y1='30%'
                  x2='60%'
                  y2='20%'
                  stroke='hsl(var(--border))'
                  strokeWidth='1'
                />
                <line
                  x1='30%'
                  y1='40%'
                  x2='40%'
                  y2='60%'
                  stroke='hsl(var(--border))'
                  strokeWidth='1'
                />
                <line
                  x1='70%'
                  y1='50%'
                  x2='40%'
                  y2='60%'
                  stroke='hsl(var(--border))'
                  strokeWidth='1'
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card className='border-border'>
          <CardHeader>
            <CardTitle className='text-xl'>AI Verdict</CardTitle>
            <CardDescription>
              Analysis summary and risk assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className='bg-[hsl(var(--gold)/0.1)] text-[hsl(var(--gold))] border-[hsl(var(--gold)/0.2)] mb-4'>
              <CheckCircle className='h-4 w-4' />
              <AlertTitle>Low Sybil Risk</AlertTitle>
              <AlertDescription className='text-foreground'>
                This wallet shows authentic behavior patterns
              </AlertDescription>
            </Alert>

            <div className='space-y-4 text-sm'>
              <p>
                This wallet demonstrates consistent and organic transaction
                patterns across multiple protocols over an extended period.
              </p>
              <p>
                The transaction timing, gas usage, and interaction diversity all
                indicate genuine human behavior rather than automated or
                coordinated activity.
              </p>
              <p>
                Network analysis shows limited clustering with other wallets,
                suggesting this is an independent entity rather than part of a
                Sybil group.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card className='border-border'>
          <CardHeader>
            <CardTitle className='text-xl'>Signal Indicators</CardTitle>
            <CardDescription>Key metrics for Sybil detection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Badge
                    variant='outline'
                    className='mr-2 bg-green-500/10 text-green-500 border-green-500/20'
                  >
                    Safe
                  </Badge>
                  <span>Gas Pattern Consistency</span>
                </div>
                <CheckCircle className='h-5 w-5 text-green-500' />
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Badge
                    variant='outline'
                    className='mr-2 bg-green-500/10 text-green-500 border-green-500/20'
                  >
                    Safe
                  </Badge>
                  <span>Transaction Timing</span>
                </div>
                <CheckCircle className='h-5 w-5 text-green-500' />
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Badge
                    variant='outline'
                    className='mr-2 bg-green-500/10 text-green-500 border-green-500/20'
                  >
                    Safe
                  </Badge>
                  <span>Contract Interaction Diversity</span>
                </div>
                <CheckCircle className='h-5 w-5 text-green-500' />
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Badge
                    variant='outline'
                    className='mr-2 bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                  >
                    Caution
                  </Badge>
                  <span>Airdrop Claim Pattern</span>
                </div>
                <AlertTriangle className='h-5 w-5 text-yellow-500' />
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Badge
                    variant='outline'
                    className='mr-2 bg-green-500/10 text-green-500 border-green-500/20'
                  >
                    Safe
                  </Badge>
                  <span>Wallet Age & Activity</span>
                </div>
                <CheckCircle className='h-5 w-5 text-green-500' />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='border-border'>
          <CardHeader>
            <CardTitle className='text-xl'>Activity Timeline</CardTitle>
            <CardDescription>
              Temporal analysis of wallet behavior
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue='activity'>
              <TabsList className='mb-4'>
                <TabsTrigger value='activity'>
                  <Activity className='h-4 w-4 mr-2' />
                  Activity
                </TabsTrigger>
                <TabsTrigger value='calendar'>
                  <Calendar className='h-4 w-4 mr-2' />
                  Calendar
                </TabsTrigger>
              </TabsList>

              <TabsContent value='activity'>
                <div className='space-y-4'>
                  <div className='relative pl-6 pb-6 border-l border-border'>
                    <div className='absolute w-3 h-3 rounded-full bg-[hsl(var(--gold))] -left-1.5 top-0'></div>
                    <div className='text-sm font-medium'>First transaction</div>
                    <div className='text-xs text-muted-foreground'>
                      March 15, 2022
                    </div>
                    <div className='text-sm mt-1'>
                      Wallet created and first ETH received
                    </div>
                  </div>

                  <div className='relative pl-6 pb-6 border-l border-border'>
                    <div className='absolute w-3 h-3 rounded-full bg-[hsl(var(--gold))] -left-1.5 top-0'></div>
                    <div className='text-sm font-medium'>
                      DeFi activity begins
                    </div>
                    <div className='text-xs text-muted-foreground'>
                      April 2, 2022
                    </div>
                    <div className='text-sm mt-1'>
                      First interaction with Uniswap
                    </div>
                  </div>

                  <div className='relative pl-6 pb-6 border-l border-border'>
                    <div className='absolute w-3 h-3 rounded-full bg-[hsl(var(--gold))] -left-1.5 top-0'></div>
                    <div className='text-sm font-medium'>NFT purchases</div>
                    <div className='text-xs text-muted-foreground'>
                      June 18, 2022
                    </div>
                    <div className='text-sm mt-1'>
                      First NFT purchased on OpenSea
                    </div>
                  </div>

                  <div className='relative pl-6'>
                    <div className='absolute w-3 h-3 rounded-full bg-[hsl(var(--gold))] -left-1.5 top-0'></div>
                    <div className='text-sm font-medium'>DAO participation</div>
                    <div className='text-xs text-muted-foreground'>
                      November 5, 2022
                    </div>
                    <div className='text-sm mt-1'>
                      First governance vote cast
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value='calendar'>
                <div className='h-[250px] flex items-center justify-center'>
                  <div className='text-center text-muted-foreground'>
                    <Calendar className='h-16 w-16 mx-auto mb-4' />
                    <p>Calendar view coming soon</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
