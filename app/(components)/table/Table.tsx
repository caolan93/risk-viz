"use client";

import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { getHeaderData, getTableDataJSON } from "@/app/lib/googleSheets/get";
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

const Table = (props: Props) => {
  const range = useSelector((state: RootState) => state.googleRange.value);
  const tableData = useSelector(
    (state: RootState) => state.googleRange.tableData
  );
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getData(range));
    setIsLoading(false);

    // if (range === "A2:G11") {
    //   setIsDisabled(true);
    // }
  }, [range]);

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
      dispatch(sortTable(sorted));
    }
  };

  const nextCols = async (value: string) => {
    dispatch(increment());
  };

  const prevCols = async (value: string) => {
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
          <h2 className="text-xl text-center font-bold my-4">
            Displaying columns {range}
          </h2>
          <div className="overflow-x-scroll md:overflow-hidden">
            <table className=" bg-gray-50 border border-gray-300 p-3 rounded-md shadow-lg shadow-gray-300  border-none w-full md:h-[800px]">
              <TableHeader cols={cols} handleSorting={handleSorting} />
              <TableBody cols={cols} table={tableData} />
            </table>
          </div>
          <div className="my-4 mx-auto flex content-start overflow-hidden justify-center">
            <button
              onClick={() => prevCols(range)}
              disabled={range === "A2:G11" && true}
              className="py-2 px-4 bg-blue-400 text-white font-bold rounded-md scale-95 hover:scale-100 ease duration-200 disabled:opacity-60 disabled:hover:scale-95"
            >
              Load Prev Data
            </button>
            <button
              onClick={() => nextCols(range)}
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
