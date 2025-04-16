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
import { Button } from '@/components/ui/button'
import { ButtonGold } from '@/components/ui/button-gold'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Loader2, MessageSquare, ThumbsUp, Shield, User } from 'lucide-react'
import { AISuggestionModal } from '@/components/ai-suggestion-modal'
import { EndorsementSuccess } from '@/components/endorsement-success'
import { cn } from '@/lib/utils'

export default function EndorsementsPage() {
  const [endorsementText, setEndorsementText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [walletAddress, setWalletAddress] = useState(
    '0x3B5AD5c4795c026514f8317c7a215E218DcCD6c'
  )
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [showAISuggestions, setShowAISuggestions] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const endorsementTypes = [
    'DAO Contributor',
    'Reliable Trader',
    'NFT Artist',
    'DeFi User',
    'Protocol Developer',
  ]

  const handleSubmit = () => {
    if (endorsementText) {
      setIsSubmitting(true)
      // Simulate submission
      setTimeout(() => {
        setIsSubmitting(false)
        setEndorsementText('')
        setShowSuccess(true)
      }, 1500)
    }
  }

  // Mock received endorsements
  const receivedEndorsements = [
    {
      id: 1,
      from: '0x3B5AD5c4795c026514f8317c7a215E218DcCD6cF',
      text: 'Reliable DAO contributor. Always votes thoughtfully and participates in governance discussions.',
      date: '2023-03-15',
      trustScore: 82,
    },
    {
      id: 2,
      from: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
      text: "Trusted DeFi user. We've completed several OTC trades successfully.",
      date: '2023-02-28',
      trustScore: 91,
    },
  ]

  // Mock given endorsements
  const givenEndorsements = [
    {
      id: 1,
      to: '0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF',
      text: 'Excellent NFT artist. Delivers high-quality work consistently.',
      date: '2023-04-10',
      trustScore: 76,
    },
  ]

  return (
    <div className='container py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>Endorsements</h1>
        <p className='text-muted-foreground'>
          Build and view your on-chain reputation through peer endorsements
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
        <Card className='lg:col-span-2 border-border'>
          <CardHeader>
            <CardTitle className='text-xl'>Write an Endorsement</CardTitle>
            <CardDescription>
              Endorse another wallet for their contributions or reliability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='wallet'
                  className='block text-sm font-medium mb-1'
                >
                  Wallet Address
                </label>
                <input
                  id='wallet'
                  className='w-full p-2 bg-secondary border border-border rounded-md'
                  placeholder='0x...'
                />
              </div>

              <div>
                <label
                  htmlFor='endorsement'
                  className='block text-sm font-medium mb-1'
                >
                  Endorsement
                </label>
                <Textarea
                  id='endorsement'
                  placeholder='Write your endorsement here...'
                  className='min-h-[120px]'
                  value={endorsementText}
                  onChange={e => setEndorsementText(e.target.value)}
                />
              </div>

              <div>
                <label className='block text-sm font-medium mb-1'>
                  Endorsement Type
                </label>
                <div className='flex flex-wrap gap-2'>
                  {endorsementTypes.map(type => (
                    <Badge
                      key={type}
                      variant={selectedType === type ? 'default' : 'outline'}
                      className={cn(
                        'cursor-pointer hover:bg-secondary hover:text-gold',
                        selectedType === type && 'bg-gold text-black'
                      )}
                      onClick={() => setSelectedType(type)}
                    >
                      DAO Contributor
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className='flex justify-between border-t pt-6'>
            <Button
              variant='outline'
              onClick={() => setShowAISuggestions(true)}
            >
              Generate AI Suggestion
            </Button>
            <ButtonGold
              onClick={handleSubmit}
              disabled={!endorsementText || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Submitting...
                </>
              ) : (
                <>
                  <Shield className='mr-2 h-4 w-4' />
                  Submit Endorsement
                </>
              )}
            </ButtonGold>
          </CardFooter>
          <AISuggestionModal
            open={showAISuggestions}
            onOpenChange={setShowAISuggestions}
            walletAddress={walletAddress}
            onSelectSuggestion={suggestion => setEndorsementText(suggestion)}
          />

          <EndorsementSuccess
            open={showSuccess}
            onOpenChange={setShowSuccess}
            walletAddress={walletAddress}
          />
        </Card>

        <Card className='border-border'>
          <CardHeader>
            <CardTitle className='text-xl'>Endorsement Stats</CardTitle>
            <CardDescription>Your on-chain reputation summary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-6'>
              <div className='text-center'>
                <div className='text-5xl font-bold text-[hsl(var(--gold))]'>
                  {receivedEndorsements.length}
                </div>
                <div className='text-sm text-muted-foreground mt-1'>
                  Endorsements Received
                </div>
              </div>

              <div className='text-center'>
                <div className='text-5xl font-bold text-[hsl(var(--gold))]'>
                  {givenEndorsements.length}
                </div>
                <div className='text-sm text-muted-foreground mt-1'>
                  Endorsements Given
                </div>
              </div>

              <div className='pt-4 border-t border-border'>
                <div className='text-sm font-medium mb-2'>
                  Top Endorsement Types
                </div>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>DAO Contributor</span>
                    <Badge
                      variant='outline'
                      className='bg-[hsl(var(--gold)/0.1)] text-[hsl(var(--gold))] border-[hsl(var(--gold)/0.2)]'
                    >
                      1
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>Reliable Trader</span>
                    <Badge
                      variant='outline'
                      className='bg-[hsl(var(--gold)/0.1)] text-[hsl(var(--gold))] border-[hsl(var(--gold)/0.2)]'
                    >
                      1
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className='border-border'>
        <CardHeader>
          <Tabs defaultValue='received'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-xl'>Your Endorsements</CardTitle>
              <TabsList>
                <TabsTrigger value='received'>
                  <MessageSquare className='h-4 w-4 mr-2' />
                  Received
                </TabsTrigger>
                <TabsTrigger value='given'>
                  <ThumbsUp className='h-4 w-4 mr-2' />
                  Given
                </TabsTrigger>
              </TabsList>
            </div>
            <CardDescription>
              On-chain attestations from other wallets
            </CardDescription>
          </Tabs>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue='received'>
            <TabsContent value='received'>
              {receivedEndorsements.length > 0 ? (
                <div className='space-y-4'>
                  {receivedEndorsements.map(endorsement => (
                    <div
                      key={endorsement.id}
                      className='p-4 bg-secondary rounded-lg'
                    >
                      <div className='flex items-start gap-4'>
                        <Avatar>
                          <AvatarFallback className='bg-primary'>
                            <User className='h-5 w-5' />
                          </AvatarFallback>
                        </Avatar>
                        <div className='flex-1'>
                          <div className='flex items-center justify-between mb-2'>
                            <div className='font-mono text-xs truncate max-w-[200px] sm:max-w-none'>
                              {endorsement.from}
                            </div>
                            <Badge
                              variant='outline'
                              className='bg-[hsl(var(--gold)/0.1)] text-[hsl(var(--gold))] border-[hsl(var(--gold)/0.2)]'
                            >
                              Trust Score: {endorsement.trustScore}
                            </Badge>
                          </div>
                          <p className='text-sm mb-2'>{endorsement.text}</p>
                          <div className='text-xs text-muted-foreground'>
                            {endorsement.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='text-center py-8 text-muted-foreground'>
                  <MessageSquare className='h-12 w-12 mx-auto mb-4 opacity-50' />
                  <p>You haven't received any endorsements yet</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value='given'>
              {givenEndorsements.length > 0 ? (
                <div className='space-y-4'>
                  {givenEndorsements.map(endorsement => (
                    <div
                      key={endorsement.id}
                      className='p-4 bg-secondary rounded-lg'
                    >
                      <div className='flex items-start gap-4'>
                        <Avatar>
                          <AvatarFallback className='bg-primary'>
                            <User className='h-5 w-5' />
                          </AvatarFallback>
                        </Avatar>
                        <div className='flex-1'>
                          <div className='flex items-center justify-between mb-2'>
                            <div className='font-mono text-xs truncate max-w-[200px] sm:max-w-none'>
                              To: {endorsement.to}
                            </div>
                            <Badge
                              variant='outline'
                              className='bg-secondary text-foreground'
                            >
                              Trust Score: {endorsement.trustScore}
                            </Badge>
                          </div>
                          <p className='text-sm mb-2'>{endorsement.text}</p>
                          <div className='text-xs text-muted-foreground'>
                            {endorsement.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='text-center py-8 text-muted-foreground'>
                  <ThumbsUp className='h-12 w-12 mx-auto mb-4 opacity-50' />
                  <p>You haven&apos;t given any endorsements yet</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
