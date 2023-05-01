import React from "react";

type Props = {
  table: TableData[];
  cols: {
    label: string;
    key: string;
  }[];
};

const TableBody = ({ table, cols }: Props) => {
  return (
    <tbody className="bg-orange-50">
      {table?.map((value, index: number) => (
        <tr key={index + 1} className="even:bg-red-100">
          {value.map((innerValue, index: number) => {
            return (
              <td
                key={cols[index].key}
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
