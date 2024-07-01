import React from 'react';
import UserStat from './UserStat';
import { statData } from '@/data/index';


const UserSubscriptionStats: React.FC = () => {
    return (
        <div className='flex items-center justify-between w-full flex-wrap gap-4'>
            {statData.map((item, index) => (
                <UserStat key={index} {...item} />
            ))}
        </div>
    );
}

export default UserSubscriptionStats;
