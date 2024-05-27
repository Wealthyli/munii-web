import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface PieChartProps {
  labels: string[];
  data: number[];
  backgroundColors: string[];
}

const UserSubscriptionPieChart: React.FC<PieChartProps> = ({ labels, data,backgroundColors}) => {
    const chartData = {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: backgroundColors,
            hoverOffset: 4,
          },
        ],
      };
    
      const options: ChartOptions<'pie'> = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            align:"start",
            labels: {
              usePointStyle: true, 
            },
          },
        },
        animation: {
          duration: 2000, 
          easing: 'easeInOutQuad', 
        },
        maintainAspectRatio: false,
      };
      return (
        <div>
          <Pie data={chartData} options={options} width={212.33} height={212.33}  />
        </div>
      );
}

export default UserSubscriptionPieChart;
