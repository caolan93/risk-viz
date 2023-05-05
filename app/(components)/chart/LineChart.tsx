"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import data from "../data.json";

// REDUX
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  getData,
  sortTable,
} from "@/app/GlobalRedux/Features/googleRange/googleRange";

Chart.register(CategoryScale);

type Props = {
  tableData: ObjectTable;
};

const LineChart = () => {
  const range = useSelector((state: RootState) => state?.googleRange?.value);
  const tableData = useSelector(
    (state: RootState) => state?.googleRange?.tableData
  );
  const dispatch = useDispatch();

  const [chartData, setChartData] = useState({
    labels: tableData?.map((value: ObjectTable) => value?.year).sort(),
    datasets: [
      {
        label: "Risk Rating",
        data: tableData?.map((value: ObjectTable) => value?.risk_rating),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    dispatch(getData(range));
  }, [range]);
  useEffect(() => {
    handleChartData(tableData);
  }, [tableData]);

  const handleChartData = (data: ObjectTable[]) => {
    setChartData({
      labels: data?.map((value: ObjectTable) => value?.year).sort(),
      datasets: [
        {
          label: "Risk Rating",
          data: data?.map((value: ObjectTable) => value?.risk_rating),
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className="flex  justify-center basis-full">Line Chart Graph</h2>
      <div className="flex basis-full p-0 md:p-9">
        <Line
          className="w-full"
          data={chartData}
          options={{
            responsive: true,
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
      <div className="flex justify-center">
        <button
          onClick={() => dispatch(decrement())}
          disabled={range === "A2:G11" && true}
          className="py-2 px-4 bg-blue-400 text-white font-bold rounded-md scale-95 hover:scale-100 ease duration-200 disabled:opacity-60 disabled:hover:scale-95"
        >
          Load Prev Data
        </button>
        <button
          onClick={() => dispatch(increment())}
          disabled={range === "A4990:G5001" && true}
          className="py-2 px-4 bg-blue-400 text-white font-bold rounded-md scale-95 hover:scale-100 ease duration-200 disabled:opacity-60 disabled:hover:scale-95"
        >
          Load Next Data
        </button>
      </div>
    </div>
  );
};

export default LineChart;
