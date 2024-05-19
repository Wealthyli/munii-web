import React from 'react';

const UserSubscriptionStats = () => {
    return (
        <div className='flex items-center justify-between w-full'>
            <article className='bg-white rounded-3xl border border-light-gray p-4 flex flex-col gap-[30px] shadow-3xl'>
                <p className='text-lgrey/01 text-[16px] '>Total Subscriptions</p>
                <div className='flex flex-col gap-[8px] w-[213px]'>
                    <div className='flex items-center gap-4'>
                        <h1 className='text-[24px] font-semibold'>10,540 </h1>
                        <p className='text-[#32A50A] text-[16px]'>+56%</p>
                    </div>
                 <p className='text-lgrey/01 text-[16px]'>Compared to (4,560 last month)</p>
                </div>
            </article>
            <article className='bg-white rounded-3xl border border-light-gray p-4 flex flex-col gap-[30px] shadow-3xl'>
                <p className='text-lgrey/01 text-[16px] '>Active Subscriptions</p>
                <div className='flex flex-col gap-[8px] w-[213px]'>
                    <div className='flex items-center gap-4'>
                        <h1 className='text-[24px] font-semibold'>10,540 </h1>
                        <p className='text-[#CC3333] text-[16px]'>-56%</p>
                    </div>
                 <p className='text-lgrey/01 text-[16px]'>Compared to (4,560 last month)</p>
                </div>
            </article>
            <article className='bg-white rounded-3xl border border-light-gray p-4 flex flex-col gap-[30px] shadow-3xl'>
                <p className='text-lgrey/01 text-[16px] '>Churn Rate</p>
                <div className='flex flex-col gap-[8px] w-[213px]'>
                    <div className='flex items-center gap-4'>
                        <h1 className='text-[24px] font-semibold'>5.6%</h1>
                        <p className='text-[#32A50A] text-[16px]'>+56%</p>
                    </div>
                 <p className='text-lgrey/01 text-[16px]'>Compared to (4,560 last month)</p>
                </div>
            </article>
            <article className='bg-white rounded-3xl border border-light-gray p-4 flex flex-col gap-[30px] shadow-3xl'>
                <p className='text-lgrey/01 text-[16px] '>Net Revenue</p>
                <div className='flex flex-col gap-[8px] w-[213px]'>
                    <div className='flex items-center gap-4'>
                        <h1 className='text-[24px] font-semibold'>N33,000 </h1>
                        <p className='text-[#32A50A] text-[16px]'>+56%</p>
                    </div>
                 <p className='text-lgrey/01 text-[16px]'>Compared to (4,560 last month)</p>
                </div>
            </article>
        </div>
    );
}

export default UserSubscriptionStats;
