"use client";

// Google Map
import {
  GoogleMap,
  InfoBox,
  InfoWindow,
  InfoWindowF,
  Marker,
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

type Props = {
  tableData: TableData[];
};

const Map = ({ tableData }: Props) => {
  const [selectYear, setSelectYear] = useState("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC085kBESY6TaCyBt1RuhhjEFz1j0E33iM",
    language: "EN",
  });

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

  const handleMarker = (e: google.maps.MapMouseEvent) => {
    // let marker: google.maps.LatLng;
    // let lat = e.latLng?.lng();
    // let lng = e.latLng?.lat();
    // marker = { lat, lng };
    //   alert(
    //   `Asset Name: ${value[0]}\nBusiness Category: ${value[3]}`
    // )
  };

  return (
    <div className="relative flex flex-wrap md:flex-nowrap">
      <div className="flex basis-full md:basis-9/12  h-[400px] md:h-[600px]">
        {!isLoaded ? (
          <h1>Loading</h1>
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
                  onClick={(e) => handleMarker(e)}
                  icon={marker}
                ></Marker>
              );
            })}
          </GoogleMap>
        )}
      </div>
      <div className="basis-full md:basis-3/12 bg-slate-300 p-2 flex-col justify-center items-center">
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
            <div className="flex flex-col px-2 gap-2 items-center">
              <button
                className="bg-blue-400 shadow-md py-2 rounded-md w-24 bg text-white font-bold hover:scale-105 ease duration-200"
                onClick={() => setSelectYear("")}
              >
                Show All Years
              </button>
              {years.map((value, i) => (
                <button
                  className="bg-blue-400 shadow-md py-2 rounded-md w-24 bg text-white font-bold hover:scale-105 ease duration-200"
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
