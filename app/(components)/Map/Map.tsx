"use client";

// Google Map
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

// Assets
import gMarker from "@assets/greenMarker.svg";
import yMarker from "@assets/yellowMarker.svg";
import aMarker from "@assets/amberMarker.svg";
import oMarker from "@assets/orangeMarker.svg";
import rMarker from "@assets/redMarker.svg";
import Image from "next/image";

type Props = {};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC085kBESY6TaCyBt1RuhhjEFz1j0E33iM",
  });

  return (
    <div className="relative flex h-96 md:h-[600px]">
      <div className="flex basis-full">
        {!isLoaded ? (
          <h1>Loading</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="googleMapStyling"
            center={{ lat: 18.52043, lng: 73.856743 }}
            zoom={10}
          >
            <Marker
              position={{ lat: 18.52043, lng: 73.856743 }}
              icon={oMarker}
            />
            <Marker
              position={{ lat: 18.52043, lng: 7.856743 }}
              icon={oMarker}
            />
          </GoogleMap>
        )}
      </div>
      <div className="absolute bottom-0 right-0 p-2">
        <div className="basis-full bg-blue-100 p-2 rounded-md flex-col justify-center items-center">
          <h3 className="font-bold text-center mb-2 text-md">
            Risk Rating Scale
          </h3>
          <section>
            <ul className="flex flex-col px-2 gap-2 bg-white py-2 rounded-md">
              <li className="flex items-center justify-between text-sm font-semibold">
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
              <li className="flex items-center justify-between text-sm font-semibold">
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
              <li className="flex items-center justify-between text-sm font-semibold">
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
              <li className="flex items-center justify-between text-sm font-semibold">
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
              <li className="flex items-center justify-between text-sm font-semibold">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Map;
