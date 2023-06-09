"use client";

import React, {
  MouseEventHandler,
  useEffect,
  useState,
  useCallback,
} from "react";

type Props = {
  table: ObjectTable[];
  cols: {
    label: string;
    key: string;
  }[];
};

const TableBody = ({ table, cols }: Props) => {
  const [tableData, setTableData] = useState<Array<TableData>>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
  const [sortKey, setSortKey] = useState<SortKeys>("asset_name");

  return (
    <tbody className="bg-orange-50">
      {table?.map((value: any, index: number) => (
        <tr key={index + 1} className="even:bg-red-100">
          {cols.map(({ key }) => {
            const tData = value[key] ? value[key] : "-";

            return (
              <td
                key={key}
                className="font-bold text-center border-r border-gray-300 p-3"
              >
                {tData.replace(/[{}"]/g, "")}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
{
  /* <td
            key={index}
            className="font-bold text-center border-r border-gray-300 p-3 "
          >
            {value.asset_name}
          </td>
          <td
            key={index}
            className="font-bold text-center border-r border-gray-300 p-3 "
          >
            {value.lat}
          </td>
          <td
            key={index}
            className="font-bold text-center border-r border-gray-300 p-3 "
          >
            {value.long}
          </td>
          <td
            key={index}
            className="font-bold text-center border-r border-gray-300 p-3 "
          >
            {value.business_category}
          </td>
          <td
            key={index}
            className="font-bold text-center border-r border-gray-300 p-3 "
          >
            {value.risk_factor}
          </td>
          <td
            key={index}
            className="font-bold text-center border-r border-gray-300 p-3 "
          >
            {value.risk_rating}
          </td>
          <td
            key={index}
            className="font-bold text-center border-r border-gray-300 p-3 "
          >
            {value.year}
          </td> */
}
