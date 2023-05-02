import Image from "next/image";
import Table from "@components/table/Table";
import Map from "@/app/(components)/Map/Map";
import ChartTable from "./(components)/ChartTable";

import { getHeaderData, getTableData } from "@/app/lib/googleSheets/get";

export default async function Home() {
  const tableData = await getTableData();
  const headerData = await getHeaderData();

  const [table, header] = await Promise.all([tableData, headerData]);

  return (
    <main className="p-4 justify-center bg-gray-100">
      <div className="my-5">
        <h2 className="text-center text-3xl font-bold mb-3">Take A Look!</h2>
        <p className="text-center text-sm">
          Below you can see our interactive map where you can find previous
          data!
        </p>
      </div>
      <Map tableData={tableData.values} />
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        {/* <Table /> */}
      </div>
      <div>{/* <ChartTable /> */}</div>
    </main>
  );
}
