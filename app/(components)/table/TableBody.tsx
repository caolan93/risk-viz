import React from "react";

type Props = {};

const TableBody = (props: Props) => {
  return (
    <tbody className="bg-orange-50">
      <tr>
        <td className="font-bold text-center border-r border-gray-300 p-3">
          Data Row
        </td>
        <td className="font-bold text-center border-r border-gray-300 p-3">
          Data Row
        </td>
        <td className="font-bold text-center border-r border-gray-300 p-3">
          Data Row
        </td>
        <td className="font-bold text-center border-r border-gray-300 p-3">
          Data Row
        </td>
        <td className="font-bold text-center p-3">Data Row</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
