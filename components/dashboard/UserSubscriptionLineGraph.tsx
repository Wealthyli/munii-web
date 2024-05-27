// src/components/LineGraph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface Dataset {
  label: string;
  data: (number | null)[];
  borderColor: string;
  backgroundColor: string;
}

interface LineGraphProps {
  labels: string[];
  datasets: Dataset[];
}

const LineGraph: React.FC<LineGraphProps> = ({ labels, datasets }) => {
  const chartData = {
    labels: labels,
    datasets: datasets.map(dataset => ({
      ...dataset,
      fill: false,
      tension: 0.4,
      spanGaps: true,
    })),
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: "start",
        labels: {
          usePointStyle: true,
        },
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuad',
    },
    maintainAspectRatio: false,
  };

  return <Line data={chartData} options={options} width={1800} height={700} />;
};

export default LineGraph;
