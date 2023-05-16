import TopEvents from "@/components/TopEvents";
import Event from "@/components/Event";
import MyMap from "@/components/MyMap";
import { Placemark } from "@pbe/react-yandex-maps";
import { scroller } from "react-scroll";
import Auth from "@/components/isAuth";
import { getAllEvents } from "@/utils/api";

export const getServerSideProps = async () => {
  const res = await getAllEvents();

  return {
    props: {
      eventsList: res,
    },
  };
};

export default function Events({ isLoggedIn, eventsList }) {
  return (
    <>
      <Auth isLoggedIn={isLoggedIn}>
        <TopEvents />
        <section className="events">
          <h2 className="events__map-title">Карта событий 🗺️</h2>
          <MyMap
            coordinates={[55.75399399999374, 37.62209300000001]}
            zoom={11}
            className="map_place_events"
            placemarks={eventsList.map((event) => (
              <Placemark
                key={event.id}
                defaultGeometry={event.coordinates}
                properties={{
                  iconCaption: event.title,
                }}
                onClick={() => {
                  scroller.scrollTo(event.id.toString(), {
                    duration: 1500,
                    smooth: true,
                  });
                }}
              />
            ))}
          />
          <h2 className="events__title">Новые события в Москве 🌱</h2>

          <div className="events__container">
            {eventsList.map((event) => {
              return (
                <Event
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.startDate.slice(0, 10)}
                  posterUrl={event.posterUrl}
                  description={event.description}
                  adress={event.address}
                  elementName={event.id.toString()}
                  onDislike={() => {}}
                />
              );
            })}
          </div>
        </section>
      </Auth>
    </>
  );
}
