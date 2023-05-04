"use client";

import React, { useState } from "react";

type Props = {
  cols: { label: string; key: string; sortable: boolean }[];
  handleSorting: Function;
};

const TableHeader = ({ handleSorting, cols }: Props) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (key: string) => {
    const sortOrder = key === sortField && order === "asc" ? "desc" : "asc";
    setSortField(key);
    setOrder(sortOrder);
    handleSorting(key, sortOrder);
  };

  return (
    <thead className="bg-red-200 text-gray-200">
      <tr className="border-b border-gray-300">
        {cols.map(({ label, key, sortable }) => (
          <th
            onClick={sortable ? () => handleSortingChange(key) : () => {}}
            className="font-bold text-black whitespace-pre p-3  cursor-pointer "
            key={key}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
