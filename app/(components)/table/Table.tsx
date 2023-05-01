import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { getHeaderData, getTableData } from "@/app/lib/googleSheets/get";

type Props = {};

const Table = async (props: Props) => {
  const tableData = await getTableData();
  const headerData = await getHeaderData();

  const [table, header] = await Promise.all([tableData, headerData]);

  const cols = [
    { label: "Asset Name", key: "asset_name" },
    { label: "Lat", key: "lat" },
    { label: "Long", key: "long" },
    { label: "Business Category", key: "business_category" },
    { label: "Risk Rating", key: "risk_rating" },
    { label: "Risk Factors", key: "risk_factors" },
    { label: "Year", key: "year" },
  ];

  for (let i = 0; i < table.values.length; i++) {}

  const handleKey: typeof handleKeyFn = async (key: string) => {
    "use server";
    console.log(key);
    return key;
  };

  return (
    <table className="bg-gray-50 border border-gray-300 p-3 rounded-md shadow-lg shadow-gray-300 overflow-hidden border-none">
      <TableHeader cols={cols} handleKey={handleKey} />
      <TableBody table={table.values} cols={cols} />
    </table>
  );
};

export default Table;
