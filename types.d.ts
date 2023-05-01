type DataType = {
  range: string;
  majorDimension: string;
  values: [string[]];
};

type TableData = [
  asset_name: string,
  lat: string,
  long: string,
  business_category: string,
  risk_rating: string,
  risk_factor: string,
  year: string
];

type SortKeys = "asset_name" | "risk_rating" | "year" | "business_categorys";

type SortOrder = "ascn" | "desc";

async function handleKeyFn(key: string) {
  return key;
}
