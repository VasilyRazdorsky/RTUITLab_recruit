import { YMaps, Map } from "@pbe/react-yandex-maps";

export default function MyMap({
  coordinates,
  zoom,
  className,
  placemarks,
  onClick,
}) {
  function handleClick(e) {
    console.log(e.get("coords"));
  }
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
        onClick={onClick}
      >
        {placemarks}
      </Map>
    </YMaps>
  );
}
