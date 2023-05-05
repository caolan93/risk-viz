"use client";

import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { getTableDataJSON } from "@/app/lib/googleSheets/get";
import Spinner from "../Spinner";
import { paginationNext, paginationPrev } from "@/app/lib/googleSheets/utils";

// REDUX
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  getData,
  sortTable,
} from "@/app/GlobalRedux/Features/googleRange/googleRange";

type Props = {};

type TableColumn = {
  label: string;
  key: string;
  sortable: boolean;
};

const Table = (props: Props) => {
  const range = useSelector((state: RootState) => state?.googleRange?.value);
  const tableData = useSelector(
    (state: RootState) => state?.googleRange?.tableData
  );
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    dispatch(getData(range));
    setIsLoading(false);
  }, [range]);

  const cols: TableColumn[] = [
    { label: "Asset Name", key: "asset_name", sortable: true },
    { label: "Lat", key: "lat", sortable: true },
    { label: "Long", key: "long", sortable: true },
    { label: "Business Category", key: "business_category", sortable: true },
    { label: "Risk Rating", key: "risk_rating", sortable: true },
    { label: "Risk Factor", key: "risk_factor", sortable: false },
    { label: "Year", key: "year", sortable: true },
  ];

  const handleSorting = (sortField: keyof ObjectTable, sortOrder: string) => {
    let sortedData = [...tableData];
    if (filterValue !== "") {
      sortedData = sortedData.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
    }
    if (sortField) {
      sortedData.sort((a: ObjectTable, b: ObjectTable) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
    }
    dispatch(sortTable(sortedData));
  };

  const handleFiltering = (value: string) => {
    const filteredData = tableData.filter((item: string[]) =>
      Object.values(item).join(" ").toLowerCase().includes(value.toLowerCase())
    );
    dispatch(sortTable(filteredData));
  };

  const handleReset = () => {
    dispatch(getData(range));
    setFilterValue("");
  };

  const nextCols = async () => {
    dispatch(increment());
  };

  const prevCols = async () => {
    dispatch(decrement());
  };
  return (
    <>
      {isLoading ? (
        <div className="flex basis-full justify-center items-center h-[500px]">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-xl md:text-3xl text-center font-bold my-4">
            Displaying columns {range}
          </h2>
          <div className="flex items-center mb-4">
            <label htmlFor="filter" className="mr-2">
              Filter:
            </label>
            <input
              type="text"
              id="filter"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
            <button
              onClick={() => handleFiltering(filterValue)}
              className="bg-blue-500 text-white rounded-md ml-2 px-4 py-2"
            >
              Filter
            </button>
            <button
              onClick={handleReset}
              className="bg-blue-500 text-white rounded-md ml-2 px-4 py-2"
            >
              Reset
            </button>
          </div>
          <div className="md:overflow-hidden h-[500px] md:h-auto overflow-scroll">
            <table className=" bg-gray-50 border border-gray-300 p-3 rounded-md shadow-lg shadow-gray-300  border-none w-full md:h-[1000px]">
              <TableHeader cols={cols} handleSorting={handleSorting} />
              <TableBody cols={cols} table={tableData} />
            </table>
          </div>
          <div className="my-4 mx-auto flex content-start overflow-hidden justify-center">
            <button
              onClick={() => prevCols()}
              disabled={range === "A2:G11" && true}
              className="py-2 px-4 bg-blue-400 text-white font-bold rounded-md scale-95 hover:scale-100 ease duration-200 disabled:opacity-60 disabled:hover:scale-95"
            >
              Load Prev Data
            </button>
            <button
              onClick={() => nextCols()}
              disabled={range === "A4990:G5001" && true}
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
