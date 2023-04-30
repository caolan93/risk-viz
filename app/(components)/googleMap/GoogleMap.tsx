"use client";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { JsxElement } from "typescript";

type Props = {
  isMarkerShown?: boolean;
  googleMapURL: string;
  loadingElement: JsxElement;
  containerElement: JsxElement;
  mapElement: JsxElement;
  zoom: number;
  defaultZoom: number;
  defaultCenter: {
    lat: number;
    lng: number;
  };
  markerPosition: {
    lat: number;
    lng: number;
  };
};

const MyMapComponent = withGoogleMap(
  ({
    isMarkerShown,
    googleMapURL,
    loadingElement,
    containerElement,
    mapElement,
    zoom = 8,
    defaultZoom = 8,
    defaultCenter,
    markerPosition,
  }: Props) => (
    <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
      {isMarkerShown && <Marker position={markerPosition} />}
    </GoogleMap>
  )
);
