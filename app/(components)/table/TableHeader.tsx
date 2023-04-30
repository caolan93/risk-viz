import React from "react";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <thead className="bg-gray-200 text-gray-600">
      <tr className="border-b border-gray-300">
        <th className="border-r border-gray-300 p-3">Data Header</th>
        <th className="border-r border-gray-300 p-3">Data Header</th>
        <th className="border-r border-gray-300 p-3">Data Header</th>
        <th className="border-r border-gray-300 p-3">Data Header</th>
        <th className="p-3">Data Header</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
