import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import DropDownMenu from './DropDownMenu';
import SearchIcon from '@/public/images/icons/SearchIcon';

interface SubscriptionDetail {
    id: number;
    date: string;
    status: string;
    avatar: string;
    customer: string;
    plan: string;
    revenue: string;
}

const UserSubscriptionDetail:SubscriptionDetail[] = [
    {
        id: 1105,
        date: 'April 5, 2024',
        status: 'Active',
        avatar: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png',
        customer: 'John Doe',
        plan: 'Basic',
        revenue: 'N10,000',
    },
    {
        id: 1105,
        date: 'April 5, 2024',
        status: 'Cancelled',
        avatar: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png',
        customer: 'John Doe',
        plan: 'Premium',
        revenue: 'N10,000',
    },
    {
        id: 1106,
        date: 'April 5, 2024',
        status: 'Active',
        avatar: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png',
        customer: 'John Doe',
        plan: 'Basic',
        revenue: 'N10,000',
    },
    {
        id: 1107,
        date: 'April 5, 2024',
        status: 'Active',
        avatar: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png',
        customer: 'John Doe',
        plan: 'Premium',
        revenue: 'N10,000',
    },
    {
        id: 1108,
        date: 'April 5, 2024',
        status: 'Active',
        avatar: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png',
        customer: 'John Doe',
        plan: 'Basic',
        revenue: 'N10,000',
    },
    {
        id: 1109,
        date: 'April 5, 2024',
        status: 'Cancelled',
        avatar: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png',
        customer: 'John Doe',
        plan: 'Premium',
        revenue: 'N10,000',
    },
]

const Monthly = [
    {
      text: 'Monthly',
      onClick: () => console.log('Monthly clicked'),
    },
    {
      text: 'Yearly',
      onClick: () => console.log('Yearly clicked'),
    },
  ];


const UserSubscriptionDetails: React.FC = () => {
    const [selected, setSelected] = useState('All Subscribers');
    const data = [
        { text: 'All Subscribers', count: UserSubscriptionDetail.length },
        { text: 'Active Subscribers', count: UserSubscriptionDetail.filter(detail => detail.status === 'Active').length },
        { text: 'Cancelled Subscribers', count: UserSubscriptionDetail.filter(detail => detail.status === 'Cancelled').length },
    ];

    return (
        <div className='flex flex-col items-start justify-center gap-[29px] w-full'>
            <div className='flex items-start justify-between w-full flex-wrap gap-4'>
                <div className='rounded-3xl border border-dark-gray shadow-2xl text-[14px] text-lgrey/01'>
                    {data.map((item, index) => (
                <ButtonComponent
                    key={index} 
                    text={item.text} 
                    count={item.count} 
                            onClick={() => setSelected(item.text)}
                            selected={selected === item.text}

                />
            ))}
                </div>
                <div className='flex items-center justify-center gap-4 '>

                    <div className='rounded-full border border-grey/10 w-10 h-10 flex items-center justify-center'>
                        <SearchIcon/>
                    </div>

                    <div>
                    <DropDownMenu menuItems={Monthly} buttonText="filter" />
                    </div>
                </div>
            </div>
            <div className='w-full border border-dark-gray shadow-2xl rounded-3xl flex flex-col items-start p-2'>
                <h2 className='text-[20px] text-lgrey/01 pl-[21px] py-2'>
                    { selected}</h2>
                <div className='w-full h-[1px] bg-dark-gray'></div>
              <table className='w-full'>
                 <thead className='w-full'>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Customer</th>
                        <th>Plan</th>
                        <th className='justify-end'>Revenue</th>
                    </tr>
                </thead> 
                <tbody>
                        {UserSubscriptionDetail.filter(detail =>
                            (selected === 'All Subscribers') ||
                            (selected === 'Active Subscribers' && detail.status === 'Active') || 
                            (selected === 'Cancelled Subscribers' && detail.status === 'Cancelled')
                        ).map((details) => (
                        <tr key={details.id}>
                         <td>{details.id}</td>
                         <td>{details.date}</td>
                         <td><span className={`${details.status === "Active"? "bg-[#00C608]":"bg-[#CC3333]"} text-white px-[8px] py-[4px]`}>{details.status}</span></td>
                           <td >
                               <div className='flex items-center gap-[6px]'>
                               <img src={details.avatar} alt="avatar" className='rounded-full w-6 h-6' /> <span>{details.customer}</span>
                               </div> 
                           </td>
                         <td>{details.plan}</td>
                         <td className='justify-end'>{details.revenue}/month</td>
                         </tr>
                    ))}
                </tbody>
              </table>
            </div>
        </div>
    );
}

export default UserSubscriptionDetails;
