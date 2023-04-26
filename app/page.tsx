import Image from "next/image";
import Table from "@components/Table";
import Map from "@components/Map";

export default function Home() {
  return (
    <main className="p-4 justify-center bg-gray-100">
      <div className="my-5">
        <h2 className="text-center text-3xl font-bold mb-3">Take A Look!</h2>
        <p className="text-center text-sm">
          Below you can see our interactive map where you can find previous
          data!
        </p>
      </div>
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        <Map />
        <Table />
      </div>
    </main>
  );
}
