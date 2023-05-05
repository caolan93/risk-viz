import Image from "next/image";
import Table from "@components/table/Table";
import Map from "@/app/(components)/Map/Map";
import LineChart from "./(components)/chart/LineChart";

export default async function Home() {
  return (
    <main className="p-4 justify-center bg-white">
      <Map />
      <div className="flex gap-4 flex-wrap lg:flex-nowrap basis-full">
        <Table />
      </div>
      <LineChart />
    </main>
  );
}
