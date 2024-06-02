import React from 'react'
import { SubscriptionPerfChart, SubscriptionPlanChart } from '@/components/charts/index'

export default function UserubscriptionGraph() {

  return (
    <div className='flex items-center justify-between w-full flex-wrap gap-4'>
      <div className='flex flex-col items-start gap-2 w-full md:w-[67%]'>
        <h2 className='text-[20px] font-medium'>Performance</h2>
        <div className='p-2 bg-white border border-dark-gray shadow-2xl rounded-xl w-full h-[298px]'>
          <div className='p-2 pb-6 flex gap-4'>
            <div className='flex gap-1 items-center justify-start'>
              <div className='h-2 w-2 rounded-full bg-black'></div>
              <p className='text-[14px]'>Activation</p>
            </div>
            <div className='flex gap-1 items-center justify-start'>
              <div className='h-2 w-2 rounded-full bg-primary'></div>
              <p className='text-[14px]'>Net Cancellation</p>
            </div>
          </div>
          <div className='h-[235px]'>
            <SubscriptionPerfChart />
          </div>
        </div>
      </div>
      <div className=' w-full md:w-[30%] '>
        <div className='flex flex-col items-start gap-2 w-full'>
          <h2 className='text-[20px] font-medium'>Subscription by Plans</h2>
          <div className='p-2 bg-white border border-dark-gray shadow-2xl rounded-xl w-full h-[298px]'>
            <div className='p-2 flex gap-4'>
              <div className='flex gap-1 items-center justify-start'>
                <div className='h-2 w-2 rounded-full bg-[#AFF4C6]'></div>
                <p className='text-[14px]'>Basic</p>
              </div>
              <div className='flex gap-1 items-center justify-start'>
                <div className='h-2 w-2 rounded-full bg-[#FFC7C2]'></div>
                <p className='text-[14px]'>Standard</p>
              </div>
              <div className='flex gap-1 items-center justify-start'>
                <div className='h-2 w-2 rounded-full bg-[#A1DAFA]'></div>
                <p className='text-[14px]'>Premium</p>
              </div>
            </div>
            <SubscriptionPlanChart />
          </div>
        </div>
      </div>
    </div>
  )
}
