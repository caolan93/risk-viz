import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

type Props = {};

const Table = async (props: Props) => {
  return (
    <table className="bg-gray-50 border border-gray-300 p-3 rounded-md shadow-lg shadow-gray-300 overflow-hidden border-none">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default Table;
