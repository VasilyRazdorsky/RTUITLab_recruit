import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function MyMap({ coordinates, className, placemarkText }) {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: coordinates,
          zoom: 15,
          controls: ["zoomControl"],
        }}
        modules={["control.ZoomControl"]}
        className={className}
      >
        <Placemark
          defaultGeometry={coordinates}
          properties={{
            iconCaption: { placemarkText },
          }}
        />
      </Map>
    </YMaps>
  );
}
