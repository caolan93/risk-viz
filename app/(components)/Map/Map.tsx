"use client";

// Google Map
import {
  GoogleMap,
  InfoBoxF,
  InfoWindow,
  InfoWindowF,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useState } from "react";

// Assets
import gMarker from "@assets/greenMarker.svg";
import yMarker from "@assets/yellowMarker.svg";
import aMarker from "@assets/amberMarker.svg";
import oMarker from "@assets/orangeMarker.svg";
import rMarker from "@assets/redMarker.svg";
import Image from "next/image";
import {
  getCenterCoord,
  getCoordsArry,
  whichMarker,
  getDiffYears,
} from "./mapUtils";
import Spinner from "../Spinner";

type Props = {
  tableData: TableData[];
};

const Map = ({ tableData }: Props) => {
  const [selectYear, setSelectYear] = useState("");
  const [showMarker, setShowMarker] = useState(false);

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.GOOGLE_MAP_API,
  //   language: "EN",
  // });

  const containerStyle: ContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const coords = getCoordsArry(tableData);

  //Function to get center point of all coordinates
  let center: Coords;
  let zoom: number = 3;
  center = getCenterCoord(coords);

  let years: Array<string>;
  years = getDiffYears(tableData);

  const handleMarker = (e: google.maps.MapMouseEvent, value: Array<string>) => {
    // let marker: google.maps.LatLng;
    // let lat = e.latLng?.lng();
    // let lng = e.latLng?.lat();
    // marker = { lat, lng };
    alert(`Asset Name: ${value[0]}\nBusiness Category: ${value[3]}`);
    setShowMarker(true);
  };

  let objKeys = [
    "asset_name",
    "lat",
    "long",
    "business_category",
    "risk_rating",
    "risk_factor",
    "year",
  ];

  let json: ObjectTable[];

  return (
    <div className="relative flex flex-wrap md:flex-nowrap">
      <div className="flex basis-full md:basis-9/12  h-[400px] md:h-[600px]">
        {!isLoaded ? (
          <div className="flex basis-full justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <GoogleMap
            center={{
              lat: center[0],
              lng: center[1],
            }}
            mapContainerStyle={containerStyle}
            zoom={zoom}
          >
            {tableData.map((value, i) => {
              console.log(`This many values ${i}`, value);
              // Function to switch custom marker depending on the Risk Rating
              let marker = whichMarker(value);

              if (value[6] === selectYear) {
                return;
              }

              return (
                <Marker
                  key={i}
                  position={{
                    lat: Number(value[1]),
                    lng: Number(value[2]),
                  }}
                  // onClick={(e) => handleMarker(e, value)}
                  // onMouseOver={(e) => handleMarker(e, value)}
                  icon={marker}
                >
                  <InfoWindow anchor={<Marker />}>
                    <div>{value[0]}</div>
                  </InfoWindow>
                </Marker>
              );
            })}
          </GoogleMap>
        )}
      </div>
      <div className="basis-full p-2 flex-col justify-center items-center md:ml-5 md:basis-3/12 md:shadow-md md:rounded-lg md:shadow-gray-400">
        <h3 className="font-bold text-center mb-2 text-md md:text-xl">
          Risk Rating Scale
        </h3>
        <div>
          <ul className="flex flex-col px-2 gap-2 bg-white py-2 rounded-md">
            <li className="flex items-center justify-between text-sm font-semibold lg:text-lg">
              <div className="flex items-center">
                <Image
                  className="mr-1"
                  src={gMarker}
                  height={15}
                  width={15}
                  alt="Green pin marker icon"
                />
                <span className="font-bold mr">Negligible: </span>
              </div>
              0.0 - 0.2
            </li>
            <li className="flex items-center justify-between text-sm font-semibold lg:text-lg">
              <div className="flex items-center">
                <Image
                  className="mr-1"
                  src={yMarker}
                  height={15}
                  width={15}
                  alt="Yellow pin marker icon"
                />
                <span className="font-bold mr-1">Low: </span>
              </div>
              0.2 - 0.4
            </li>
            <li className="flex items-center justify-between text-sm font-semibold lg:text-lg">
              <div className="flex items-center">
                <Image
                  className="mr-1"
                  src={aMarker}
                  height={15}
                  width={15}
                  alt="Amber pin marker icon"
                />
                <span className="font-bold mr-1">Moderate: </span>
              </div>
              0.4 - 0.6
            </li>
            <li className="flex items-center justify-between text-sm font-semibold lg:text-lg">
              <div className="flex items-center">
                <Image
                  className="mr-1"
                  src={oMarker}
                  height={15}
                  width={15}
                  alt="Orange pin marker icon"
                />
                <span className="font-bold mr-1">High: </span>
              </div>
              0.6 - 0.8
            </li>
            <li className="flex items-center justify-between text-sm font-semibold lg:text-lg">
              <div className="flex items-center">
                <Image
                  className="mr-1"
                  src={rMarker}
                  height={15}
                  width={15}
                  alt="Red pin marker icon"
                />
                <span className="font-bold mr-1">Extreme: </span>
              </div>
              0.8 - 1.0
            </li>
          </ul>

          <div className="mt-4">
            <h3 className="font-bold text-center mb-2 text-md md:text-xl">
              Change the decade
            </h3>
            <div className="flex flex-col px-2 gap-2 items-center w-full">
              <div className="flex basis-full w-full">
                <button className="basis-1/3 bg-blue-400 shadow-md py-2 rounded-md w-full bg text-white font-bold scale-95 hover:scale-100 ease duration-200">
                  Prev
                </button>
                <button
                  className="basis-1/3 bg-blue-400 shadow-md py-2 rounded-md w-full bg text-white font-bold scale-95 hover:scale-100 ease duration-200"
                  onClick={() => setSelectYear("")}
                >
                  Show All Years
                </button>

                <button className="basis-1/3 bg-blue-400 shadow-md py-2 rounded-md w-full bg text-white font-bold scale-95 hover:scale-100 ease duration-200">
                  Next
                </button>
              </div>
              {years.sort().map((value, i) => (
                <button
                  className="bg-blue-400 shadow-md py-2 rounded-md w-full bg text-white font-bold scale-95 hover:scale-100 ease duration-200"
                  onClick={() => setSelectYear(value)}
                  key={i}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
