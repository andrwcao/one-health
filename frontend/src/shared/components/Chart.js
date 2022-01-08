import { React, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import './Chart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {
  
  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };
    
  const labels = props.xAxis;
  const data = {
      labels,
      datasets: [
          {
          label: 'Dataset 1',
          data: labels.map(() => 1000),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
      ],
  };
  return <Line className="Chart" options={options} data={data} />;
}

export default Chart;
