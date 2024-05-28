import React from 'react';
import UserStat from './UserStat';
import { Stat } from '../../../types';

const stat: Stat[] = [
    {
        title: 'Total Subscriptions',
        value: '10,540',
        percentage: '+56%',
        comparedTo: 'Compared to (4,560 last month)',
        color: '#32A50A',
    },
    {
        title: 'Active Subscriptions',
        value: '10,540',
        percentage: '-56%',
        comparedTo: 'Compared to (4,560 last month)',
        color: '#CC3333',
    },
    {
        title: 'Churn Rate',
        value: '5.6%',
        percentage: '+56%',
        comparedTo: 'Compared to (4,560 last month)',
        color: '#32A50A',
    },
    {
        title: 'Net Revenue',
        value: 'N33,000',
        percentage: '+56%',
        comparedTo: 'Compared to (4,560 last month)',
        color: '#32A50A',
    },
];


const UserSubscriptionStats: React.FC = () => {
    return (
        <div className='flex items-center justify-between w-full flex-wrap gap-4'>
            {stat.map((item, index) => (
                <UserStat key={index} {...item} />
            ))}
        </div>
    );
}

export default UserSubscriptionStats;
