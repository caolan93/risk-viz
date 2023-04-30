"use client";

import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getTableData } from "../lib/googleSheets/get";

type Props = {};

type dataSet = {
  year: number;
  riskRating: number;
};

const ChartTable = async (props: Props) => {
  useEffect(() => {
    getTableData();
  }, []);

  // const getData: Promise<DataType> = getTableData();

  // const tableData = await getData;

  const data: Array<dataSet> = [];

  // for (let i = 0; i < tableData.values.length; i++) {
  //   data.push({
  //     year: Number(tableData.values[i][4]),
  //     riskRating: Number(tableData.values[i][6]),
  //   });
  // }

  console.log("hello data", data);

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      {/* <Line
        data={data}
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
      /> */}
    </div>
  );
};

export default ChartTable;
