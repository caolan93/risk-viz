import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { getHeaderData, getTableData } from "@/app/lib/googleSheets/get";

type Props = {};

const Table = async (props: Props) => {
  const tableData = await getTableData();
  const headerData = await getHeaderData();

  const [table, header] = await Promise.all([tableData, headerData]);

  for (let i = 0; i < table.values.length; i++) {}

  const handleKey: typeof handleKeyFn = async (key: string) => {
    "use server";
    console.log(key);
    return key;
  };

  return (
    <table className="bg-gray-50 border border-gray-300 p-3 rounded-md shadow-lg shadow-gray-300 overflow-hidden border-none">
      <TableHeader header={header} />
      {/* <TableBody table={table} /> */}
    </table>
  );
};

export default Table;
