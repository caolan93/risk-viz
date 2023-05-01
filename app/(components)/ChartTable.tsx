"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { getTableData } from "../lib/googleSheets/get";

type Props = {};

// type dataSet = {
//   year: number;
//   riskRating: number;
// };

Chart.register(CategoryScale);

const ChartTable = (props: Props) => {
  //  const getData: Promise<DataType> = getTableData();
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await getTableData();

        setChartData(res.values);
      } catch (error) {
        alert("Error fetching data");
      }
    };

    fetchData();
  }, []);

  console.log("chart data", chartData);

  // const tableData = await getData;

  // const data: Array<dataSet> = [];

  // for (let i = 0; i < tableData.values.length; i++) {
  //   data.push({
  //     year: Number(tableData.values[i][4]),
  //     riskRating: Number(tableData.values[i][6]),
  //   });
  // }

  const dataSet = {
    labels: ["Red", "Orange", "Blue"],
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={dataSet}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Risk Rating over time (Year)",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default ChartTable;
