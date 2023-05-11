import { YMaps, Map } from "@pbe/react-yandex-maps";

export default function MyMap({ coordinates, zoom, className, placemarks }) {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: coordinates,
          zoom: zoom,
          controls: ["zoomControl"],
        }}
        modules={["control.ZoomControl"]}
        className={className}
      >
        {placemarks}
      </Map>
    </YMaps>
  );
}
