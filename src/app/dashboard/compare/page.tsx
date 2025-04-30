'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ButtonGold } from '@/components/ui/button-gold'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Loader2, Search, X, AlertTriangle, CheckCircle } from 'lucide-react'
import { compareWallets } from '@/actions'
import { toast } from 'sonner'

export default function ComparePage() {
  const [wallets, setWallets] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isComparing, setIsComparing] = useState(false)
  const [comparisonResults, setComparisonResults] = useState<
    {
      wallet: string
      trustScore: number
      similarity: string
      riskLevel: 'Low' | 'Medium' | 'High'
      clusterMatch: boolean
    }[]
  >([])
  const [hasResults, setHasResults] = useState(false)

  const addWallet = () => {
    if (inputValue && wallets.length < 5 && !wallets.includes(inputValue)) {
      setWallets([...wallets, inputValue])
      setInputValue('')
    }
  }

  const removeWallet = (wallet: string) => {
    setWallets(wallets.filter(w => w !== wallet))
  }

  const handleCompare = async () => {
    if (wallets.length >= 2) {
      setIsComparing(true)
      try {
        const results = await compareWallets(wallets)
        console.log(results)
        if (!results.success) {
          toast.error('Wallets analysis failed')
          return
        }
        const comparison = results.result
        setComparisonResults(
          (comparison ?? []).map(result => ({
            ...result,
            similarity: result.similarity.toString(),
          }))
        )
        setHasResults(true)
      } catch (error) {
        console.error(`Error comparing wallets:`, error)
      } finally {
        setIsComparing(false)
      }
    }
  }

  return (
    <div className='container py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>Compare Wallets</h1>
        <p className='text-muted-foreground'>
          Analyze similarity between multiple wallets to detect Sybil clusters
        </p>
      </div>

      <Card className='border-border mb-8'>
        <CardHeader>
          <CardTitle className='text-xl'>Add Wallets to Compare</CardTitle>
          <CardDescription>
            Enter 2-5 wallet addresses to analyze their relationships
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
              <Input
                placeholder='Enter wallet address (0x...)'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className='flex-1'
                disabled={wallets.length >= 5 || isComparing}
              />
              <Button
                onClick={addWallet}
                disabled={!inputValue || wallets.length >= 5 || isComparing}
              >
                Add
              </Button>
            </div>

            {wallets.length > 0 && (
              <div className='space-y-2'>
                {wallets.map(wallet => (
                  <div
                    key={wallet}
                    className='flex items-center justify-between p-2 bg-secondary rounded-md'
                  >
                    <span className='font-mono text-sm truncate'>{wallet}</span>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => removeWallet(wallet)}
                      disabled={isComparing}
                    >
                      <X className='h-4 w-4' />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className='flex justify-end mt-2'>
              <ButtonGold
                onClick={handleCompare}
                disabled={wallets.length < 2 || isComparing}
              >
                {isComparing ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Comparing...
                  </>
                ) : (
                  <>
                    <Search className='mr-2 h-4 w-4' />
                    Compare Wallets
                  </>
                )}
              </ButtonGold>
            </div>
          </div>
        </CardContent>
      </Card>

      {hasResults && (
        <>
          <Card className='border-border mb-8'>
            <CardHeader>
              <CardTitle className='text-xl'>Comparison Results</CardTitle>
              <CardDescription>
                Analysis of wallet similarities and potential Sybil connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Wallet</TableHead>
                    <TableHead>Trust Score</TableHead>
                    <TableHead>Similarity</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Cluster Match</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonResults.map(result => (
                    <TableRow key={result.wallet}>
                      <TableCell className='font-mono text-xs'>
                        {result.wallet}
                      </TableCell>
                      <TableCell>{result.trustScore}</TableCell>
                      <TableCell>{result.similarity}</TableCell>
                      <TableCell>
                        <div className='flex items-center'>
                          {result.riskLevel === 'Low' ? (
                            <CheckCircle className='h-4 w-4 text-green-500 mr-2' />
                          ) : (
                            <AlertTriangle className='h-4 w-4 text-yellow-500 mr-2' />
                          )}
                          {result.riskLevel}
                        </div>
                      </TableCell>
                      <TableCell>
                        {result.clusterMatch ? (
                          <span className='text-yellow-500'>Yes</span>
                        ) : (
                          <span className='text-green-500'>No</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className='border-border'>
            <CardHeader>
              <CardTitle className='text-xl'>Cluster Visualization</CardTitle>
              <CardDescription>
                Visual representation of wallet relationships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='h-[400px] relative network-animation rounded-md border border-border p-4'>
                {/* Central node (reference wallet) */}
                <div className='absolute w-5 h-5 rounded-full bg-[hsl(var(--gold))] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10'></div>

                {/* Safe wallet */}
                <div className='absolute w-4 h-4 rounded-full bg-green-500 top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2'></div>

                {/* Suspicious wallet */}
                <div className='absolute w-4 h-4 rounded-full bg-yellow-500 top-[40%] left-[70%] -translate-x-1/2 -translate-y-1/2'></div>

                {/* Lines connecting nodes */}
                <svg
                  className='absolute inset-0 w-full h-full'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line
                    x1='50%'
                    y1='50%'
                    x2='30%'
                    y2='30%'
                    stroke='hsl(var(--border))'
                    strokeWidth='1'
                  />
                  <line
                    x1='50%'
                    y1='50%'
                    x2='70%'
                    y2='40%'
                    stroke='hsl(var(--gold)/0.5)'
                    strokeWidth='2'
                    strokeDasharray='4'
                  />
                </svg>

                {/* Legend */}
                <div className='absolute bottom-4 left-4 bg-background/80 p-2 rounded-md border border-border'>
                  <div className='text-xs font-medium mb-2'>Legend</div>
                  <div className='flex items-center gap-2 text-xs mb-1'>
                    <div className='w-3 h-3 rounded-full bg-[hsl(var(--gold))]'></div>
                    <span>Reference Wallet</span>
                  </div>
                  <div className='flex items-center gap-2 text-xs mb-1'>
                    <div className='w-3 h-3 rounded-full bg-green-500'></div>
                    <span>Low Similarity</span>
                  </div>
                  <div className='flex items-center gap-2 text-xs'>
                    <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                    <span>High Similarity (Potential Sybil)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
