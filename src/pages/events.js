import TopEvents from "@/components/TopEvents";
import Event from "@/components/Event";
import MyMap from "@/components/MyMap";
import { Placemark } from "@pbe/react-yandex-maps";
import { scroller } from "react-scroll";
import Auth from "@/components/isAuth";
import { getAllEvents } from "@/utils/api";
import Head from "next/head";
import { getTopEvents } from "@/utils/api";

export const getServerSideProps = async () => {
  const res = await getAllEvents();
  const topEvents = await getTopEvents();

  return {
    props: {
      eventsList: res,
      topEventsList: topEvents,
    },
  };
};

export default function Events({ isLoggedIn, eventsList, topEventsList }) {
  return (
    <>
      <Head>
        <title>События</title>
      </Head>
      <Auth isLoggedIn={isLoggedIn}>
        <TopEvents topEventsList={topEventsList} />
        <section className="events">
          <h2 className="events__map-title">Карта событий 🗺️</h2>
          <MyMap
            coordinates={[55.75399399999374, 37.62209300000001]}
            zoom={10}
            className="map_place_events"
            placemarks={eventsList.map((event) => {
              if (event.status === "NotStarted") {
                return (
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
                );
              }
            })}
          />
          <h2 className="events__title">Новые события в Москве 🌱</h2>
          {eventsList.length === 0 ? (
            <p className="events__empty-text">Скоро!</p>
          ) : (
            <div className="events__container">
              {eventsList.map((event) => {
                if (event.status === "NotStarted") {
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
                }
              })}
            </div>
          )}
        </section>
      </Auth>
    </>
  );
}
