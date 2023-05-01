"use client";

import React, {
  MouseEventHandler,
  useEffect,
  useState,
  useCallback,
} from "react";

type Props = {
  table: TableData[];
  cols: {
    label: string;
    key: string;
  }[];
};

const TableBody = ({ table, cols }: Props) => {
  const [tableData, setTableData] = useState<Array<TableData>>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
  const [sortKey, setSortKey] = useState<SortKeys>("asset_name");

  useEffect(() => {
    setTableData(table);

    console.log("table data");
  }, []);

  return (
    <tbody className="bg-orange-50">
      {tableData?.map((value, index: number) => (
        <tr key={index + 1} className="even:bg-red-100">
          {value.map((innerValue: string, index: number) => {
            return (
              <td
                key={cols[index]?.key}
                className="font-bold text-center border-r border-gray-300 p-3 "
              >
                {innerValue}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
