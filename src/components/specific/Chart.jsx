import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
} from "chart.js";
import { purple, purpleLight } from "../../constants/color";
import { getLast7Days } from "../../lib/Features";
import { orange } from "@mui/material/colors";

ChartJs.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
    ],
  };

  return <Line data={data} options={lineChartOptions} />;
};



const doughnutChartOptions ={
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
 
  },
  cutout:115,
}


const DoughnutChart = ({ values=[], labels = [] }) => {

  const data = {
    labels,
    datasets: [
      {
        data:values,
        label: "Total Chats vs Group Chats",
        fill: true,
        backgroundColor: [purpleLight, "orange"],
        hoverBackgroundColor:[purple ,"yellow"],
        borderColor: [purpleLight, "orange"],
        offset:40
      },
    ],
  };
  return <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOptions} />;
};

export { LineChart, DoughnutChart };
