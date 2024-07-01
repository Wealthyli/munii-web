import React from 'react'
import { DecreaseIcon,IncreaseIcon } from './index';

interface UserStatProps {
  title: string;
  value: string;
  percentage: string;
  comparedTo: string;
    color: string;
    key: number;
}

const UserStat: React.FC<UserStatProps> = ({ title, value, percentage, comparedTo, color }) => {
    
    let isNegative = percentage.charAt(0) === '-';

  return (
    <article className='bg-white rounded-3xl border border-light-gray p-4 flex flex-col gap-[30px] shadow-3xl'>
      <p className='text-lgrey/01 text-[16px] '>{ title}</p>
      <div className='flex flex-col gap-[8px] w-[213px]'>
        <div className='flex items-center gap-4'>
          <h1 className='text-[24px] font-semibold'>{value} </h1>
                  <p className={`${isNegative ? "text-[#CC3333]" : "text-[#32A50A]"} text-[16px]`}>{percentage}</p>
                  <div>
                  {isNegative ? <DecreaseIcon /> : <IncreaseIcon />}
              </div>
        </div>
              <p className='text-lgrey/01 text-[16px]'>Compared to ({comparedTo})</p>
      </div>
    </article>
  )
}

export default UserStat;