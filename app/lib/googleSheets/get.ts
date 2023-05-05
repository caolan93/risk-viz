import { createObj } from "@/app/(components)/Map/mapUtils";
import { paginationNext, paginationPrev } from "./utils";

export async function getHeaderData() {
  let res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1Y_yiT-_7IimioBvcqiCPwLzTLazfdRyzZ4k3cpQXiAw/values/A1:G1?key=AIzaSyC085kBESY6TaCyBt1RuhhjEFz1j0E33iM`
  );

  if (!res.ok) throw "There was an error fetching data.";

  let data = await res?.json();

  return data;
}

export async function getTableDataJSON(range?: string) {
  let res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1Y_yiT-_7IimioBvcqiCPwLzTLazfdRyzZ4k3cpQXiAw/values/${range}?key=AIzaSyC085kBESY6TaCyBt1RuhhjEFz1j0E33iM`
  );

  if (!res.ok) throw "There was an error fetching data.";

  let data = await res?.json();
  let objKeys = [
    "asset_name",
    "lat",
    "long",
    "business_category",
    "risk_rating",
    "risk_factor",
    "year",
  ];

  let jsonData: ObjectTable[];

  jsonData = createObj(objKeys, data.values);

  return jsonData;
}
