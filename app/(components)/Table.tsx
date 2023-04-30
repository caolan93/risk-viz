import React from "react";
import { getHeaderData, getTableData } from "../lib/googleSheets/get";

type Props = {
  className?: string;
};

const Table = async ({ className }: Props) => {
  // const titleArray = values?.splice(0, 1);
  const headerData = getHeaderData();
  const tableData = getTableData();

  const [header, table] = await Promise.all([headerData, tableData]);

  return (
    <section
      className={`flex flex-wrap basis-full content-start lg:basis-1/2 lg:flex-shrink justify-start overflow-hidden hover:overflow-x-scroll rounded-md ${
        className && className
      } `}
    >
      <table className="shadow-md w-full">
        <thead className="">
          <tr className="">
            {header.values?.map((value: string, index: number) => (
              <th
                key={index + 1}
                className="p-3 border border-gray-50 bg-orange-300 text-white"
              >
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {table?.values?.map((value: Array<string>, index: number) => (
            <tr key={index + 1} className="">
              {value.map((innerValue: string, index: number) => (
                <td
                  key={index + 1}
                  className="p-3 text-center text-slate-800 border bg-gray-100 border-gray-200"
                >
                  {innerValue}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
