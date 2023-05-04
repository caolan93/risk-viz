"use client";

import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { getHeaderData, getTableDataJSON } from "@/app/lib/googleSheets/get";
import Spinner from "../Spinner";
import { paginationNext, paginationPrev } from "@/app/lib/googleSheets/utils";

type Props = {};

const Table = (props: Props) => {
  const [headerData, setHeaderData] = useState<DataType>();
  const [tableData, setTableData] = useState<ObjectTable[]>([]);
  const [range, setRange] = useState("");
  const [pageVal, setPalVal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [tableData, range] = await getTableDataJSON();
      setRange(range);
      setTableData(tableData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  let cols = [
    { label: "Asset Name", key: "asset_name", sortable: true },
    { label: "Lat", key: "lat", sortable: true },
    { label: "Long", key: "long", sortable: true },
    { label: "Business Category", key: "business_category", sortable: true },
    { label: "Risk Rating", key: "risk_rating", sortable: true },
    { label: "Risk Factor", key: "risk_factor", sortable: false },
    { label: "Year", key: "year", sortable: true },
  ];

  const handleSorting = (
    sortField: ObjectTable[keyof ObjectTable],
    sortOrder: string
  ) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        return (
          // @ts-ignore
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const nextCols = async (value: string) => {
    let data = paginationNext(value);

    console.log("next data", data);

    setIsLoading(true);
    const [tableData, range] = await getTableDataJSON(data);
    setTableData(tableData);
    setRange(range);
    setIsLoading(false);
  };

  const prevCols = async (value: string) => {
    let data = paginationPrev(value);

    console.log("next data", data);

    setIsLoading(true);
    const [tableData, range] = await getTableDataJSON(data);
    setTableData(tableData);
    setRange(range);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex basis-full justify-center items-center h-[500px]">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col overflow-hidden">
          <h2 className="text-xl text-center font-bold my-4">
            Displaying columns {range}
          </h2>
          <div className="overflow-x-scroll">
            <table className=" bg-gray-50 border border-gray-300 p-3 rounded-md shadow-lg shadow-gray-300  border-none ">
              <TableHeader cols={cols} handleSorting={handleSorting} />
              <TableBody cols={cols} table={tableData} />
            </table>
          </div>
          <div className="my-4 mx-auto flex content-start overflow-hidden justify-center">
            <button
              onClick={() => prevCols(range)}
              className="py-2 px-4 bg-blue-400 text-white font-bold rounded-md scale-95 hover:scale-100 ease duration-200 disabled:opacity-60 disabled:hover:scale-95"
            >
              Load Prev Data
            </button>
            <button
              onClick={() => nextCols(range)}
              className="py-2 px-4 bg-blue-400 text-white font-bold rounded-md scale-95 hover:scale-100 ease duration-200 disabled:opacity-60 disabled:hover:scale-95"
            >
              Load Next Data
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
