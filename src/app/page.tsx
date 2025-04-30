import Link from 'next/link'
import { ButtonGold } from '@/components/ui/button-gold'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Shield,
  Vote,
  Gift,
  Fingerprint,
  ChevronRight,
  BarChart2,
  Network,
  Users,
  Lock,
} from 'lucide-react'
import { logo } from '@/components/ui/logo'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50'>
        <div className='container flex items-center justify-between py-4'>
          <div className='flex items-center gap-2'>
            {logo}
            <span className='text-2xl font-bold'>verity</span>
          </div>
          <nav className='hidden md:flex items-center gap-8'>
            <Link
              href='#features'
              className='text-sm hover:text-[hsl(var(--gold))] transition-colors'
            >
              Features
            </Link>
            <Link
              href='#how-it-works'
              className='text-sm hover:text-[hsl(var(--gold))] transition-colors'
            >
              How It Works
            </Link>
            <Link
              href='#developers'
              className='text-sm hover:text-[hsl(var(--gold))] transition-colors'
            >
              Developers
            </Link>
            <Link href='/connect'>
              <ButtonGold>Connect Wallet</ButtonGold>
            </Link>
          </nav>
          <Button variant='ghost' size='icon' className='md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-menu'
            >
              <line x1='4' x2='20' y1='12' y2='12' />
              <line x1='4' x2='20' y1='6' y2='6' />
              <line x1='4' x2='20' y1='18' y2='18' />
            </svg>
          </Button>
        </div>
      </header>

      <main className='flex-1 pt-20'>
        {/* Hero Section */}
        <section className='relative overflow-hidden py-20 md:py-32'>
          {/* Background elements */}
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.15),transparent_50%)]'></div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(30,41,59,0.4),transparent_50%)]'></div>

            {/* Animated dots */}
            <div className='absolute w-2 h-2 rounded-full bg-[hsl(var(--gold))] top-[20%] left-[20%] animate-pulse'></div>
            <div
              className='absolute w-2 h-2 rounded-full bg-[hsl(var(--gold))] top-[30%] left-[80%] animate-pulse'
              style={{ animationDelay: '0.5s' }}
            ></div>
            <div
              className='absolute w-2 h-2 rounded-full bg-[hsl(var(--gold))] top-[70%] left-[30%] animate-pulse'
              style={{ animationDelay: '1s' }}
            ></div>
            <div
              className='absolute w-2 h-2 rounded-full bg-[hsl(var(--gold))] top-[60%] left-[70%] animate-pulse'
              style={{ animationDelay: '1.5s' }}
            ></div>

            {/* Grid pattern */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.05)_1px,transparent_1px)] bg-[size:40px_40px]'></div>
          </div>

          <div className='container relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <div className='inline-block mb-4 px-4 py-1 rounded-full bg-[hsl(var(--gold))/0.1] border border-[hsl(var(--gold))/0.2]'>
                <span className='text-sm font-medium text-[hsl(var(--gold))]'>
                  AI-Powered Sybil Detection
                </span>
              </div>

              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight'>
                Trust Wallets. <br />
                <span className='text-[hsl(var(--gold))]'>Detect Sybils.</span>
              </h1>

              <p className='text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto'>
                AI-powered wallet reputation scoring and Sybil detection for
                Web3 protocols, DAOs, and dApps.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='/connect'>
                  <ButtonGold size='lg' className='w-full sm:w-auto text-base'>
                    Connect Wallet
                    <ChevronRight className='ml-2 h-4 w-4' />
                  </ButtonGold>
                </Link>
                <Link href='/explore'>
                  <Button
                    size='lg'
                    variant='outline'
                    className='w-full sm:w-auto text-base'
                  >
                    Explore Wallets
                  </Button>
                </Link>
                <Link href='/analyze'>
                  <Button
                    size='lg'
                    variant='outline'
                    className='w-full sm:w-auto text-base'
                  >
                    Analyse Yours
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust Score Preview */}
            <div className='mt-20 max-w-4xl mx-auto'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-background z-10'></div>
                <div className='bg-card border border-border rounded-xl shadow-2xl overflow-hidden'>
                  <div className='p-6 border-b border-border flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-[hsl(var(--gold))/0.1] flex items-center justify-center'>
                        <Shield className='w-5 h-5 text-[hsl(var(--gold))]' />
                      </div>
                      <div>
                        <div className='text-sm text-muted-foreground'>
                          Wallet
                        </div>
                        <div className='font-mono text-xs'>0x71C7...976F</div>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20'>
                        <span className='text-xs font-medium text-green-500'>
                          Trusted
                        </span>
                      </div>
                      <div className='px-3 py-1 rounded-full bg-secondary border border-border'>
                        <span className='text-xs'>DeFi User</span>
                      </div>
                    </div>
                  </div>
                  <div className='p-6 flex flex-col md:flex-row gap-6'>
                    <div className='flex-shrink-0 flex items-center justify-center'>
                      <div className='trust-score-ring'>
                        <div className='trust-score-content'>
                          <span className='text-4xl font-bold'>78</span>
                          <span className='text-xs text-muted-foreground'>
                            TRUST SCORE
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='flex-1 space-y-4'>
                      <h3 className='text-lg font-medium'>AI Analysis</h3>
                      <p className='text-sm text-muted-foreground'>
                        This wallet shows consistent and organic transaction
                        patterns across multiple protocols over an extended
                        period. The transaction timing, gas usage, and
                        interaction diversity all indicate genuine human
                        behavior.
                      </p>
                      <div className='grid grid-cols-2 gap-3'>
                        <div className='p-3 bg-secondary rounded-lg'>
                          <div className='text-xs text-muted-foreground mb-1'>
                            Transaction Diversity
                          </div>
                          <div className='text-lg font-bold'>
                            82
                            <span className='text-xs text-muted-foreground'>
                              /100
                            </span>
                          </div>
                        </div>
                        <div className='p-3 bg-secondary rounded-lg'>
                          <div className='text-xs text-muted-foreground mb-1'>
                            Bot Likelihood
                          </div>
                          <div className='text-lg font-bold'>
                            12
                            <span className='text-xs text-muted-foreground'>
                              /100
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id='how-it-works' className='py-20 bg-primary'>
          <div className='container'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                How <span className='text-[hsl(var(--gold))]'>Verity</span>{' '}
                Works
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Our AI-powered system analyzes on-chain behavior to detect Sybil
                wallets and assign trust scores
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='relative'>
                <div className='absolute top-0 left-6 bottom-0 border-l-2 border-dashed border-border'></div>
                <div className='relative z-10 flex flex-col items-start'>
                  <div className='w-12 h-12 rounded-full bg-[hsl(var(--gold))/0.1] border border-[hsl(var(--gold))/0.3] flex items-center justify-center mb-4'>
                    <span className='text-lg font-bold text-[hsl(var(--gold))]'>
                      1
                    </span>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Data Collection</h3>
                  <p className='text-muted-foreground'>
                    We analyze public on-chain data including transaction
                    history, gas patterns, and contract interactions.
                  </p>
                </div>
              </div>

              <div className='relative'>
                <div className='absolute top-0 left-6 bottom-0 border-l-2 border-dashed border-border'></div>
                <div className='relative z-10 flex flex-col items-start'>
                  <div className='w-12 h-12 rounded-full bg-[hsl(var(--gold))/0.1] border border-[hsl(var(--gold))/0.3] flex items-center justify-center mb-4'>
                    <span className='text-lg font-bold text-[hsl(var(--gold))]'>
                      2
                    </span>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>AI Analysis</h3>
                  <p className='text-muted-foreground'>
                    Our GPT-4 powered models identify patterns and behaviors
                    consistent with Sybil accounts.
                  </p>
                </div>
              </div>

              <div className='relative'>
                <div className='relative z-10 flex flex-col items-start'>
                  <div className='w-12 h-12 rounded-full bg-[hsl(var(--gold))/0.1] border border-[hsl(var(--gold))/0.3] flex items-center justify-center mb-4'>
                    <span className='text-lg font-bold text-[hsl(var(--gold))]'>
                      3
                    </span>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Trust Score</h3>
                  <p className='text-muted-foreground'>
                    Each wallet receives a dynamic trust score from 0-100 with
                    detailed signals and explanations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id='features' className='py-20'>
          <div className='container'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Secure Your Web3{' '}
                <span className='text-[hsl(var(--gold))]'>Experience</span>
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Verity provides comprehensive tools to protect against Sybil
                attacks and build trust in Web3
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='group bg-card p-6 rounded-xl border border-border card-hover'>
                <div className='w-12 h-12 rounded-full bg-[hsl(var(--gold))/0.1] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--gold))/0.2] transition-colors'>
                  <Shield className='w-6 h-6 text-[hsl(var(--gold))]' />
                </div>
                <h3 className='text-xl font-bold mb-2'>DeFi Safety</h3>
                <p className='text-muted-foreground mb-4'>
                  Verify counterparties before trading. Protect yourself from
                  scammers and fraudulent wallets.
                </p>
                <div className='flex items-center text-[hsl(var(--gold))] text-sm font-medium'>
                  <span>Learn more</span>
                  <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </div>
              </div>

              <div className='group bg-card p-6 rounded-xl border border-border card-hover'>
                <div className='w-12 h-12 rounded-full bg-[hsl(var(--gold))/0.1] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--gold))/0.2] transition-colors'>
                  <Vote className='w-6 h-6 text-[hsl(var(--gold))]' />
                </div>
                <h3 className='text-xl font-bold mb-2'>DAO Voting</h3>
                <p className='text-muted-foreground mb-4'>
                  Ensure fair governance by detecting Sybil attacks and vote
                  manipulation attempts.
                </p>
                <div className='flex items-center text-[hsl(var(--gold))] text-sm font-medium'>
                  <span>Learn more</span>
                  <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </div>
              </div>

              <div className='group bg-card p-6 rounded-xl border border-border card-hover'>
                <div className='w-12 h-12 rounded-full bg-[hsl(var(--gold))/0.1] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--gold))/0.2] transition-colors'>
                  <Gift className='w-6 h-6 text-[hsl(var(--gold))]' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Airdrop Security</h3>
                <p className='text-muted-foreground mb-4'>
                  Distribute tokens fairly by identifying and filtering out
                  farming wallets.
                </p>
                <div className='flex items-center text-[hsl(var(--gold))] text-sm font-medium'>
                  <span>Learn more</span>
                  <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </div>
              </div>

              <div className='group bg-card p-6 rounded-xl border border-border card-hover'>
                <div className='w-12 h-12 rounded-full bg-[hsl(var(--gold))/0.1] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--gold))/0.2] transition-colors'>
                  <Fingerprint className='w-6 h-6 text-[hsl(var(--gold))]' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Web3 Identity</h3>
                <p className='text-muted-foreground mb-4'>
                  Build reputation across the ecosystem with verifiable on-chain
                  identity.
                </p>
                <div className='flex items-center text-[hsl(var(--gold))] text-sm font-medium'>
                  <span>Learn more</span>
                  <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Features */}
        <section className='py-20 bg-primary'>
          <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <div className='inline-block mb-4 px-4 py-1 rounded-full bg-[hsl(var(--gold))/0.1] border border-[hsl(var(--gold))/0.2]'>
                  <span className='text-sm font-medium text-[hsl(var(--gold))]'>
                    Comprehensive Dashboard
                  </span>
                </div>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Powerful Tools for{' '}
                  <span className='text-[hsl(var(--gold))]'>
                    Sybil Detection
                  </span>
                </h2>
                <p className='text-muted-foreground mb-8'>
                  Our dashboard provides detailed analytics and visualization
                  tools to help you understand wallet behavior and identify
                  potential Sybil accounts.
                </p>

                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-full bg-[hsl(var(--gold))/0.1] flex items-center justify-center flex-shrink-0'>
                      <BarChart2 className='w-4 h-4 text-[hsl(var(--gold))]' />
                    </div>
                    <div>
                      <h3 className='font-medium mb-1'>Trust Score Analysis</h3>
                      <p className='text-sm text-muted-foreground'>
                        Detailed breakdown of factors contributing to a
                        wallet&apos;s trust score
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-full bg-[hsl(var(--gold))/0.1] flex items-center justify-center flex-shrink-0'>
                      <Network className='w-4 h-4 text-[hsl(var(--gold))]' />
                    </div>
                    <div>
                      <h3 className='font-medium mb-1'>
                        Network Visualization
                      </h3>
                      <p className='text-sm text-muted-foreground'>
                        Graph-based clustering to identify related wallets and
                        Sybil rings
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-full bg-[hsl(var(--gold))/0.1] flex items-center justify-center flex-shrink-0'>
                      <Users className='w-4 h-4 text-[hsl(var(--gold))]' />
                    </div>
                    <div>
                      <h3 className='font-medium mb-1'>Wallet Comparison</h3>
                      <p className='text-sm text-muted-foreground'>
                        Compare multiple wallets to detect similarities and
                        potential Sybil clusters
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-full bg-[hsl(var(--gold))/0.1] flex items-center justify-center flex-shrink-0'>
                      <Lock className='w-4 h-4 text-[hsl(var(--gold))]' />
                    </div>
                    <div>
                      <h3 className='font-medium mb-1'>Developer API</h3>
                      <p className='text-sm text-muted-foreground'>
                        Integrate Verity&apos;s Sybil detection directly into
                        your applications
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <Link href='/connect'>
                    <ButtonGold size='lg'>
                      Explore Dashboard
                      <ArrowRight className='ml-2 w-4 h-4' />
                    </ButtonGold>
                  </Link>
                </div>
              </div>

              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-[hsl(var(--gold))/0.1] to-transparent rounded-2xl blur-xl opacity-50'></div>
                <div className='relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl'>
                  <div className='p-4 border-b border-border flex items-center gap-2'>
                    <div className='w-3 h-3 rounded-full bg-red-500'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                    <div className='w-3 h-3 rounded-full bg-green-500'></div>
                    <div className='ml-2 text-xs text-muted-foreground'>
                      Sybil Signals Dashboard
                    </div>
                  </div>
                  <div className='p-6'>
                    <div className='h-[400px] relative network-animation rounded-md border border-border p-4'>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20'>
          <div className='container'>
            <div className='max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12 text-center relative overflow-hidden'>
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.15),transparent_50%)]'></div>

              <div className='relative z-10'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                  Ready to{' '}
                  <span className='text-[hsl(var(--gold))]'>Secure</span> Your
                  Web3 Experience?
                </h2>
                <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
                  Connect your wallet now to get your trust score and start
                  protecting yourself from Sybil attacks.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link href='/connect'>
                    <ButtonGold size='lg' className='w-full sm:w-auto'>
                      Connect Wallet
                      <ChevronRight className='ml-2 h-4 w-4' />
                    </ButtonGold>
                  </Link>
                  <Link href='/developers'>
                    <Button
                      size='lg'
                      variant='outline'
                      className='w-full sm:w-auto'
                    >
                      Developer API
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
