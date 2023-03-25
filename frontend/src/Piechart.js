import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



// const data = {
//   labels: ['Red', 'Blue', 'Yellow'],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     },
//   ],
// };

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {//padding and responsive to solve slices going out while hovering(hover offset)
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10
    }
  }
  
};

const PieChart = ({dat}) => (
    
  <div style={{  height: '300px', width: '300px' }}>
    <Pie
      data={dat}
      options={options}
    />
  </div>
  
  
);

export default PieChart;

