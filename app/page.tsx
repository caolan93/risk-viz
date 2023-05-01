import Image from "next/image";
import Table from "@components/table/Table";
import Map from "@/app/(components)/Map";
import ChartTable from "./(components)/ChartTable";

export default function Home() {
  return (
    <main className="p-4 justify-center bg-slate-300">
      <div className="my-5">
        <h2 className="text-center text-3xl font-bold mb-3">Take A Look!</h2>
        <p className="text-center text-sm">
          Below you can see our interactive map where you can find previous
          data!
        </p>
      </div>
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        <Map />
        {/* @ts-expect-error Async Server Component */}
        <Table />
      </div>
      <div>{/* <ChartTable /> */}</div>
    </main>
  );
}
