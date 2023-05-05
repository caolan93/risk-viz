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

type ObjectTable = {
  asset_name: string;
  lat: string;
  long: string;
  business_category: string;
  risk_rating: string;
  risk_factor: string;
  year: string;
};

type SortKeys = "asset_name" | "risk_rating" | "year" | "business_categorys";

type SortOrder = "ascn" | "desc";

async function handleKeyFn(key: string) {
  return key;
}

type CustomMarker = {
  path: string;
  fillColor: string;
  fillOpacity: number;
  strokeWeight: number;
  rotation: number;
  scale: number;
};

type Coords = [lat: string, lng: string];

type ContainerStyle = {
  width: string;
  height: string;
};

interface MapState {
  selectedMarker: google.maps.Marker | null;
  map: google.maps.Map | null;
}

type Years = {
  year: string;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOOGLE_MAP_API: string;
    }
  }
}
