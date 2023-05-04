"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import data from "../data.json";

Chart.register(CategoryScale);

type Props = {
  tableData: TableData;
};

const LineChart = ({ tableData }: Props) => {
  const [chartData, setChartData] = useState({
    labels: data.values?.map((val) => val[6]).sort(),
    datasets: [
      {
        label: "Risk Rating",
        data: data.values?.map((val) => val[4]),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="flex flex-col">
      <h2 className="basis-full">Line Chart Graph</h2>
      <div className="flex basis-full p-9">
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
