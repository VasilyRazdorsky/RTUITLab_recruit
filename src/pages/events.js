import TopEvents from "@/components/TopEvents";
import Event from "@/components/Event";
import MyMap from "@/components/MyMap";
import { Placemark } from "@pbe/react-yandex-maps";
import { scroller } from "react-scroll";

import Auth from "@/components/isAuth";
import { useState } from "react";
import { getAllEvents } from "@/utils/api";

export const getServerSideProps = async () => {
  const res = await getAllEvents();

  return {
    props: {
      eventsList: res,
    },
  };
};

const events = [
  {
    coordinates: [55.75565706897642, 37.66587450000001],
    title: "Выставка Code 369",
    id: "123",
  },
  {
    coordinates: [55.76473183202939, 37.59783815766445],
    title: "Концерт в большом театре",
    id: "321",
  },
];

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
                  title={event.title}
                  date={event.startDate.slice(0, 10)}
                  posterUrl={event.posterUrl}
                  likeCount={event.likes.length}
                  description={event.description}
                  adress={event.address}
                  elementName={event.id.toString()}
                />
              );
            })}
          </div>
        </section>
      </Auth>
    </>
  );
}
