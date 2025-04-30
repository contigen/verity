'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ButtonGold } from '@/components/ui/button-gold'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, Code, Terminal, FileJson, Key } from 'lucide-react'

export default function ApiPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  // API key for display
  const apiKey = 'vrt_test_3a2c1d4b5e6f7g8h9i0j'

  return (
    <div className='container py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>Developer API</h1>
        <p className='text-muted-foreground'>
          Integrate Verity&apos;s Sybil detection into your applications
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
        <Card className='lg:col-span-2 border-border'>
          <CardHeader>
            <CardTitle className='text-xl'>API Documentation</CardTitle>
            <CardDescription>
              Integrate trust scores and Sybil detection into your dApp
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue='rest'>
              <TabsList className='mb-4'>
                <TabsTrigger value='rest'>
                  <Terminal className='h-4 w-4 mr-2' />
                  REST API
                </TabsTrigger>
                <TabsTrigger value='sdk'>
                  <Code className='h-4 w-4 mr-2' />
                  JavaScript SDK
                </TabsTrigger>
                <TabsTrigger value='examples'>
                  <FileJson className='h-4 w-4 mr-2' />
                  Examples
                </TabsTrigger>
              </TabsList>

              <TabsContent value='rest'>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-medium mb-2'>Endpoints</h3>
                    <div className='space-y-4'>
                      <div className='p-3 bg-secondary rounded-md'>
                        <div className='flex items-center gap-2 mb-1'>
                          <Badge className='bg-green-600 text-white'>GET</Badge>
                          <code className='text-sm'>
                            /api/v1/wallet/{'{address}'}/score
                          </code>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Get the trust score for a specific wallet address
                        </p>
                      </div>

                      <div className='p-3 bg-secondary rounded-md'>
                        <div className='flex items-center gap-2 mb-1'>
                          <Badge className='bg-green-600 text-white'>GET</Badge>
                          <code className='text-sm'>
                            /api/v1/wallet/{'{address}'}/signals
                          </code>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Get detailed Sybil signals for a wallet
                        </p>
                      </div>

                      <div className='p-3 bg-secondary rounded-md'>
                        <div className='flex items-center gap-2 mb-1'>
                          <Badge className='bg-blue-600 text-white'>POST</Badge>
                          <code className='text-sm'>
                            /api/v1/wallets/compare
                          </code>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Compare multiple wallets for Sybil detection
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-lg font-medium mb-2'>Authentication</h3>
                    <p className='text-sm mb-3'>
                      All API requests require an API key to be included in the
                      header:
                    </p>
                    <div className='p-3 bg-secondary rounded-md'>
                      <code className='text-sm'>
                        Authorization: Bearer {apiKey}
                      </code>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value='sdk'>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-medium mb-2'>Installation</h3>
                    <div className='p-3 bg-secondary rounded-md relative'>
                      <code className='text-sm'>npm install @verity/sdk</code>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='absolute right-2 top-2'
                        onClick={() =>
                          copyToClipboard('npm install @verity/sdk', 'install')
                        }
                      >
                        {copied === 'install' ? (
                          <Check className='h-4 w-4' />
                        ) : (
                          <Copy className='h-4 w-4' />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-lg font-medium mb-2'>Usage</h3>
                    <div className='p-3 bg-secondary rounded-md relative'>
                      <pre className='text-sm overflow-x-auto'>
                        <code>
                          {`import { VerityClient } from '@verity/sdk';

// Initialize the client
const verity = new VerityClient({
  apiKey: '${apiKey}'
});

// Get trust score for a wallet
const score = await verity.getTrustScore('0x71C7656EC7ab88b098defB751B7401B5f6d8976F');

// Compare multiple wallets
const comparison = await verity.compareWallets([
  '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
  '0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF'
]);`}
                        </code>
                      </pre>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='absolute right-2 top-2'
                        onClick={() =>
                          copyToClipboard(
                            `import { VerityClient } from '@verity/sdk';\n\n// Initialize the client\nconst verity = new VerityClient({\n  apiKey: '${apiKey}'\n});\n\n// Get trust score for a wallet\nconst score = await verity.getTrustScore('0x71C7656EC7ab88b098defB751B7401B5f6d8976F');\n\n// Compare multiple wallets\nconst comparison = await verity.compareWallets([\n  '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',\n  '0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF'\n]);`,
                            'usage'
                          )
                        }
                      >
                        {copied === 'usage' ? (
                          <Check className='h-4 w-4' />
                        ) : (
                          <Copy className='h-4 w-4' />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value='examples'>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-medium mb-2'>
                      Example Response
                    </h3>
                    <div className='p-3 bg-secondary rounded-md relative'>
                      <pre className='text-sm overflow-x-auto'>
                        <code>
                          {`{
  "address": "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  "trustScore": 78,
  "lastUpdated": "2023-04-15T12:34:56Z",
  "signals": {
    "transactionDiversity": 82,
    "timeActive": 94,
    "botLikelihood": 12,
    "onchainFootprint": 76
  },
  "tags": ["DeFi User", "NFT Collector"],
  "riskLevel": "low",
  "aiVerdict": "This wallet shows consistent and organic transaction patterns..."
}`}
                        </code>
                      </pre>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='absolute right-2 top-2'
                        onClick={() =>
                          copyToClipboard(
                            `{\n  "address": "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",\n  "trustScore": 78,\n  "lastUpdated": "2023-04-15T12:34:56Z",\n  "signals": {\n    "transactionDiversity": 82,\n    "timeActive": 94,\n    "botLikelihood": 12,\n    "onchainFootprint": 76\n  },\n  "tags": ["DeFi User", "NFT Collector"],\n  "riskLevel": "low",\n  "aiVerdict": "This wallet shows consistent and organic transaction patterns..."\n}`,
                            'response'
                          )
                        }
                      >
                        {copied === 'response' ? (
                          <Check className='h-4 w-4' />
                        ) : (
                          <Copy className='h-4 w-4' />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-lg font-medium mb-2'>
                      Integration Example
                    </h3>
                    <div className='p-3 bg-secondary rounded-md'>
                      <p className='text-sm mb-2'>
                        React component to display a wallet's trust score:
                      </p>
                      <pre className='text-sm overflow-x-auto'>
                        <code>
                          {`import { useState, useEffect } from 'react';
import { VerityClient } from '@verity/sdk';

export function TrustScoreBadge({ address }) {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const verity = new VerityClient({
      apiKey: '${apiKey}'
    });
    
    async function fetchScore() {
      try {
        const result = await verity.getTrustScore(address);
        setScore(result.trustScore);
      } catch (error) {
        console.error('Failed to fetch trust score:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchScore();
  }, [address]);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="trust-score">
      Trust Score: {score}
    </div>
  );
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className='border-border'>
          <CardHeader>
            <CardTitle className='text-xl'>API Key</CardTitle>
            <CardDescription>
              Your personal API key for Verity integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-6'>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <div className='text-sm font-medium'>Your API Key</div>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='h-8 px-2'
                    onClick={() => copyToClipboard(apiKey, 'apikey')}
                  >
                    {copied === 'apikey' ? (
                      <>
                        <Check className='h-3 w-3 mr-1' />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className='h-3 w-3 mr-1' />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className='p-3 bg-secondary rounded-md flex items-center'>
                  <Key className='h-4 w-4 mr-2 text-[hsl(var(--gold))]' />
                  <code className='text-sm font-mono'>{apiKey}</code>
                </div>
              </div>

              <div className='pt-4 border-t border-border'>
                <div className='text-sm font-medium mb-2'>Usage Stats</div>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>API Calls (This Month)</span>
                    <Badge variant='outline'>1,245 / 10,000</Badge>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>Plan</span>
                    <Badge
                      variant='outline'
                      className='bg-[hsl(var(--gold)/0.1)] text-[hsl(var(--gold))] border-[hsl(var(--gold)/0.2)]'
                    >
                      Developer
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className='flex justify-center border-t pt-6'>
            <ButtonGold>Upgrade Plan</ButtonGold>
          </CardFooter>
        </Card>
      </div>

      <Card className='border-border'>
        <CardHeader>
          <CardTitle className='text-xl'>Integration Examples</CardTitle>
          <CardDescription>Common use cases for the Verity API</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='p-4 bg-secondary rounded-lg'>
              <h3 className='text-lg font-medium mb-2'>DeFi Protocols</h3>
              <p className='text-sm text-muted-foreground mb-4'>
                Verify counterparties before executing trades or providing
                liquidity.
              </p>
              <code className='text-xs block p-2 bg-primary rounded-md mb-2'>
                {`if (await verity.isTrusted(counterparty, 70)) {
  // Execute trade
}`}
              </code>
              <Button variant='outline' size='sm' className='w-full'>
                View Example
              </Button>
            </div>

            <div className='p-4 bg-secondary rounded-lg'>
              <h3 className='text-lg font-medium mb-2'>DAO Governance</h3>
              <p className='text-sm text-muted-foreground mb-4'>
                Filter out Sybil wallets from governance votes to ensure fair
                representation.
              </p>
              <code className='text-xs block p-2 bg-primary rounded-md mb-2'>
                {`const voters = await verity.filterSybils(
  allVoters,
  { minScore: 60 }
)`}
              </code>
              <Button variant='outline' size='sm' className='w-full'>
                View Example
              </Button>
            </div>

            <div className='p-4 bg-secondary rounded-lg'>
              <h3 className='text-lg font-medium mb-2'>Airdrop Distribution</h3>
              <p className='text-sm text-muted-foreground mb-4'>
                Ensure fair token distribution by filtering out farming wallets.
              </p>
              <code className='text-xs block p-2 bg-primary rounded-md mb-2'>
                {`const eligibleWallets = await verity.filterAirdropFarmers(
  claimants
)`}
              </code>
              <Button variant='outline' size='sm' className='w-full'>
                View Example
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
