/* eslint-disable react/prop-types */
import {Bar} from 'react-chartjs-2'
// eslint-disable-next-line no-unused-vars
import { Chart as Chart} from 'chart.js/auto'
import './BarChart.css';

function BarChart({chartData}) {
  return (
    <div id='bar-chart'>
        <h2>Bar Chart</h2>
        <Bar data={chartData}></Bar>
    </div>
  )
}

export default BarChart