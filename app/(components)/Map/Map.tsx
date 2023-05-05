"use client";

// Google Map
import {
  GoogleMap,
  InfoWindowF,
  Marker,
  OverlayViewF,
  useLoadScript,
} from "@react-google-maps/api";
import { useEffect, useState, useRef } from "react";

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

// REDUX
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  getData,
} from "@/app/GlobalRedux/Features/googleRange/googleRange";
import { getTableDataJSON } from "@/app/lib/googleSheets/get";
import { isAsyncThunkAction } from "@reduxjs/toolkit";

type Props = {
  tableData: ObjectTable[];
};

const Map = () => {
  const range = useSelector((state: RootState) => state?.googleRange?.value);
  const tableData = useSelector(
    (state: RootState) => state?.googleRange?.tableData
  );
  const [selectYear, setSelectYear] = useState("");
  const [zoom, setZoom] = useState(3);
  const [center, setCenter] = useState<Coords>([47.116386, -101.299591]);
  const [showMarker, setShowMarker] = useState(false);
  const [hoveredMarker, setHoveredMarker] = useState(-1);

  useEffect(() => {
    dispatch(getData(range));
  }, []);

  const dispatch = useDispatch();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC085kBESY6TaCyBt1RuhhjEFz1j0E33iM",
    language: "EN",
  });

  const containerStyle: ContainerStyle = {
    width: "100%",
    height: "100%",
  };

  //Function to get center point of all coordinates

  let years: string[];
  years = getDiffYears(tableData);

  const handleMarker = (e: google.maps.MapMouseEvent, value: ObjectTable) => {
    const { lat, long } = value;
    const parsedLat: number = parseFloat(lat);
    const parsedLong: number = parseFloat(long);
    setCenter([parsedLat, parsedLong]);
    setZoom(6);
  };

  return (
    <div className="relative flex flex-wrap ">
      <div className="flex basis-full font-extrabold my-6 text-3xl justify-center items-center">
        <h2>
          Currently showing markers for the columns {range} and
          {selectYear === "all"
            ? " showing all avaible years."
            : ` showing just the year ${selectYear}`}
        </h2>
      </div>
      <div className="flex basis-full flex-nowrap">
        <div className="flex basis-full md:basis-9/12  h-[400px] md:h-[600px]">
          {!isLoaded ? (
            <div className="flex basis-full justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <GoogleMap
              center={{
                lat: parseFloat(center[0]),
                lng: parseFloat(center[1]),
              }}
              mapContainerStyle={containerStyle}
              zoom={zoom}
            >
              {tableData?.map((value: ObjectTable, i: number) => {
                // Function to switch custom marker depending on the Risk Rating
                let marker = whichMarker(value);

                if (value?.year === selectYear) {
                  return;
                }

                return (
                  <Marker
                    key={i}
                    position={{
                      lat: parseFloat(value?.lat),
                      lng: parseFloat(value?.long),
                    }}
                    onMouseOver={(e) => {
                      handleMarker(e, value);
                      setHoveredMarker(i);
                    }}
                    icon={marker}
                  >
                    {hoveredMarker === i && (
                      <InfoWindowF
                        position={{
                          lat: parseFloat(value?.lat),
                          lng: parseFloat(value?.long),
                        }}
                      >
                        <div>
                          <p>
                            <span className="font-bold">Asset Name: </span>
                            {value.asset_name}
                          </p>{" "}
                          <br />
                          <p>
                            <span className="font-bold">
                              Business Category:{" "}
                            </span>
                            {value.business_category}
                          </p>
                          <br />
                        </div>
                      </InfoWindowF>
                    )}
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
              <div className="flex flex-col gap-2 items-center w-full">
                <button
                  onClick={() => setSelectYear("all")}
                  className="basis-1/3 bg-blue-400 shadow-md py-2 rounded-md w-full bg text-white font-bold scale-95 hover:scale-100 ease duration-200"
                >
                  Show All Years
                </button>

                {years.sort().map((value: ObjectTable, i) => (
                  <button
                    onClick={() => setSelectYear(value)}
                    className="bg-blue-400 shadow-md py-2 rounded-md w-full bg text-white font-bold scale-95 hover:scale-100 ease duration-200"
                    key={i}
                  >
                    {value}
                  </button>
                ))}
                <div className="flex w-full scale-95 gap-3">
                  <button
                    disabled={range === "A2:G11" && true}
                    onClick={() => dispatch(decrement())}
                    className="disabled:opacity-60 w-full bg-blue-400 shadow-md py-2 rounded-md bg text-white font-bold ease duration-200 md:w-1/2"
                  >
                    Prev
                  </button>

                  <button
                    disabled={range === "A4990:G5001" && true}
                    onClick={() => dispatch(increment())}
                    className="disabled:opacity-60 w-full bg-blue-400 shadow-md py-2 rounded-md bg text-white font-bold ease duration-200 md:w-1/2"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
