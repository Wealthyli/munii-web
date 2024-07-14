import React from 'react'
import UserSubscriptionLineGraph from './UserSubscriptionLineGraph';
import UserSubscriptionPieChart from './UserSubscriptionPieChart';
export default function UserubscriptionGraph() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',"August","September", "October","Novenber","December"];
  const dataset1 = {
    label: 'Activation',
    data: [65, 59, 80, 81, null, 55, 40], 
    borderColor: '#000000',
    backgroundColor: '#000000',
  };
  const dataset2 = {
    label: 'Net Cancellation',
    data: [45, null, 60, 70, 56, 65, 50], 
    borderColor: '#CAFF01',
    backgroundColor: '#CAFF01',
  };
  const pieChartLabels = ['Basic', 'Standard', 'Premium'];
  const pieChartData = [12, 19, 3];
  const pieChartColors = [
    '#AFF4C6',
    '#FFC7C2',
    '#A1DAFA',
  ];
  return (
    <div className='flex items-center justify-between w-full flex-wrap'>
      <div className='flex flex-col items-start gap-2 w-full md:w-[67%]'>
        <h2 className='text-[20px] font-medium'>Performance</h2>
        <div className='p-2 bg-white border border-dark-gray shadow-2xl rounded-xl w-full h-[298px]'>
          <UserSubscriptionLineGraph  labels={labels} datasets={[dataset1, dataset2]} />
        </div>
      </div>
      <div className=' w-full md:w-[30%] '>
      <div className='flex flex-col items-start gap-2 w-full'>
        <h2 className='text-[20px] font-medium'>Subscription by Plans</h2>
        <div className='p-2 bg-white border border-dark-gray shadow-2xl rounded-xl w-full h-[298px]'>
            <UserSubscriptionPieChart labels={pieChartLabels} data={pieChartData} backgroundColors={pieChartColors} />
            </div>
        </div>
      </div>
    </div>
  )
}
