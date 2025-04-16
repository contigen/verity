'use client'

import { TabsContent } from '@/components/ui/tabs'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export function ActivityCharts() {
  const transactionData = [
    { name: 'Jan', value: 12 },
    { name: 'Feb', value: 19 },
    { name: 'Mar', value: 15 },
    { name: 'Apr', value: 27 },
    { name: 'May', value: 32 },
    { name: 'Jun', value: 24 },
  ]

  const activityData = [
    { name: 'DeFi', value: 45 },
    { name: 'NFT', value: 20 },
    { name: 'DAO', value: 15 },
    { name: 'Other', value: 20 },
  ]

  const COLOURS = [
    '#FFD700',
    '#B8860B',
    '#DAA520',
    '#F0E68C',
    '#BDB76B',
    '#7B68EE',
  ]

  return (
    <>
      <TabsContent value='transactions'>
        <div className='text-sm text-gray-400 mb-2'>
          Monthly Transaction Activity
        </div>
        <div className='h-[300px] w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              data={transactionData}
              margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray='3 3' stroke='#1e293b' />
              <XAxis dataKey='name' stroke='#94a3b8' />
              <YAxis stroke='#94a3b8' />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '4px',
                  color: '#e2e8f0',
                }}
              />
              <Bar dataKey='value' fill='#FFD700' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='mt-4 text-sm text-gray-400'>
          <div className='flex justify-between items-center'>
            <span>Total Transactions: 869</span>
            <span>Average per Month: 72.4</span>
          </div>
          <div className='mt-2 text-xs'>
            Consistent transaction patterns indicate genuine human behavior
          </div>
        </div>
      </TabsContent>

      <TabsContent value='distribution'>
        <div className='text-sm text-gray-400 mb-2'>Protocol Distribution</div>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='h-[300px] w-full md:w-1/2'>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart>
                <Pie
                  data={activityData}
                  cx='50%'
                  cy='50%'
                  labelLine={false}
                  outerRadius={100}
                  fill='#8884d8'
                  dataKey='value'
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {activityData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLOURS[index % COLOURS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '4px',
                    color: '#e2e8f0',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='w-full md:w-1/2 pl-0 md:pl-4 mt-4 md:mt-0'>
            <div className='bg-gray-900/30 p-4 rounded-lg'>
              <h4 className='text-sm font-medium text-white mb-2'>
                Protocol Diversity Analysis
              </h4>
              <p className='text-xs text-gray-400 mb-3'>
                Your wallet shows interaction with 8 different protocols, with
                significant activity on Uniswap (35%) and Aave (20%).
              </p>
              <div className='space-y-2'>
                {activityData.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between'
                  >
                    <div className='flex items-center'>
                      <div
                        className='w-3 h-3 rounded-sm mr-2'
                        style={{
                          backgroundColor: COLOURS[index % COLOURS.length],
                        }}
                      ></div>
                      <span className='text-xs text-gray-300'>{item.name}</span>
                    </div>
                    <span className='text-xs font-medium text-white'>
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </>
  )
}
