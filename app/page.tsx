import Image from "next/image";
import Table from "@components/table/Table";
import Map from "@/app/(components)/Map/Map";
import LineChart from "./(components)/chart/LineChart";

import { getHeaderData, getTableData } from "@/app/lib/googleSheets/get";

export default async function Home() {
  const tableData = await getTableData();
  const headerData = await getHeaderData();

  const [table, header] = await Promise.all([tableData, headerData]);

  // const nextTableData = async () => {
  //   "use server";
  //   tableData(tableData.range.slice(12), true, false);
  // };

  // const prevTableData = async () => {
  //   "use server";
  //   tableData(tableData.range.slice(12), true, false);
  // };

  return (
    <main className="p-4 justify-center bg-white">
      <div className="my-5">
        <h2 className="text-center text-3xl font-bold mb-3">Take A Look!</h2>
        <p className="text-center text-sm">
          {/* Currently displaying {tableData.range.slice(12)} */}
        </p>
      </div>
      {/* 
      <Map
        tableData={tableData.values}
        // nextTableData={nextTableData}
        // prevTableData={prevTableData}
      /> */}
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        <Table />
      </div>
      {/* <LineChart tableData={tableData.values} /> */}
    </main>
  );
}
