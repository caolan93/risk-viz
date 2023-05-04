"use client";

import React, { useCallback, useState } from "react";

type Props = {
  header: ObjectTable;
  // handleKey: typeof handleKeyFn;
};

const TableHeader = ({ header }: Props) => {
  console.log("test", header);
  return (
    <thead className="bg-red-200 text-gray-200">
      <tr className="border-b border-gray-300">
        {/* {Object.values(header).map((value: string, index: number) => (
          <th
            // onClick={() => handleKey(col.key)}
            key={index}
            className="cursor-pointer border-r border-gray-300 p-3 text-black"
          >
            {value}
          </th>
        ))} */}
        test
      </tr>
    </thead>
  );
};

export default TableHeader;
