export async function getHeaderData() {
  let res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1Y_yiT-_7IimioBvcqiCPwLzTLazfdRyzZ4k3cpQXiAw/values/A1:G1?key=AIzaSyC085kBESY6TaCyBt1RuhhjEFz1j0E33iM`
  );

  if (!res.ok) throw "There was an error fetching data.";

  let data = await res?.json();

  console.log(data);

  return data;
}
export async function getTableData() {
  let res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1Y_yiT-_7IimioBvcqiCPwLzTLazfdRyzZ4k3cpQXiAw/values/A2:G2?key=AIzaSyC085kBESY6TaCyBt1RuhhjEFz1j0E33iM`
  );

  if (!res.ok) throw "There was an error fetching data.";

  let data = await res?.json();

  console.log(data);

  return data;
}
