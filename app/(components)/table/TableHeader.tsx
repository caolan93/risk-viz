"use client";

import React from "react";

type Props = {
  header?: DataType;
  cols: {
    label: string;
    key: string;
  }[];
};

const TableHeader = ({ cols }: Props) => {
  const handleAccessor = (key: string) => {
    () => console.log("Acc", key);
  };
  return (
    <thead className="bg-red-200 text-gray-200">
      <tr className="border-b border-gray-300">
        {cols?.map((col) => (
          <th
            key={col.key}
            className="cursor-pointer border-r border-gray-300 p-3 text-black"
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
