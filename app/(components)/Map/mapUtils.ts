// Markers
import {
  gCustomMarker,
  yCustomMarker,
  aCustomMarker,
  oCustomMarker,
  rCustomMarker,
} from "./customMarkers";

export const whichMarker = (value: Array<string>) => {
  let marker: CustomMarker;
  if (Number(value[4]) < 0.2) {
    marker = gCustomMarker;
  } else if (Number(value[4]) >= 0.2 && Number(value[4]) < 0.4) {
    marker = yCustomMarker;
  } else if (Number(value[4]) >= 0.4 && Number(value[4]) < 0.6) {
    marker = aCustomMarker;
  } else if (Number(value[4]) >= 0.6 && Number(value[4]) < 0.8) {
    marker = oCustomMarker;
  } else {
    marker = rCustomMarker;
  }

  return marker;
};

export const getCenterCoord = (coords: Coords[]) => {
  let numCoords = coords.length;
  let x = 0;
  let y = 0;
  let z = 0;

  for (let i = 0; i < numCoords; i++) {
    let lat = (coords[i][0] * Math.PI) / 180;
    let lon = (coords[i][1] * Math.PI) / 180;

    x += Math.cos(lat) * Math.cos(lon);
    y += Math.cos(lat) * Math.sin(lon);
    z += Math.sin(lat);
  }

  x /= numCoords;
  y /= numCoords;
  z /= numCoords;

  let lon = Math.atan2(y, x);
  let hyp = Math.sqrt(x * x + y * y);
  let lat = Math.atan2(z, hyp);

  let centerCoord: Coords = [(lat * 180) / Math.PI, (lon * 180) / Math.PI];

  return centerCoord;
};

export const getCoordsArry = (data: TableData[]) => {
  let arr: Coords[] = [];
  for (let i = 0; i < data.length; i++) {
    let lat = Number(data[i][1]);
    let lng = Number(data[i][2]);

    arr.push([lat, lng]);
  }

  return arr;
};

type UniqueYears = {
  year: number;
};

export const getDiffYears = (years: TableData[]) => {
  let data = [];
  let uniqueArr = [];

  for (let i = 0; i < years.length; i++) {
    data.push(years[i][6]);
  }

  uniqueArr = data.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return uniqueArr;
};

//Turns an array into an object with keys
export const createObj = (keys: string[], values: string) => {
  let newArray: ObjectTable[] = [];
  // Loop through the keys array and use each value as a key in the result object
  for (let i = 0; i < values.length; i++) {
    const result = {};
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      // Set the corresponding value in the values array as the value for this key
      const value = values[i][j];
      result[key] = value;
    }
    newArray.push(result);
  }
  return newArray;
};
