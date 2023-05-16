import Auth from "@/components/isAuth";
import Head from "next/head";
import Event from "@/components/Event";
import { useState, useEffect } from "react";
import { getCurrentUser } from "@/utils/api";

export default function MyEvents({ isLoggedIn }) {
  const [events, setEvents] = useState([]);

  const handleEventDislike = (eventId) => {
    setEvents(
      events.filter((event) => {
        return event.id !== eventId;
      })
    );
  };

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        setEvents(res.likedEvents);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Auth isLoggedIn={isLoggedIn}>
      <Head>
        <title>Мои События</title>
      </Head>
      <section className="my-events">
        <h2 className="my-events__title">Ваши избранные события</h2>
        <div className="my-events__events-container">
          {events.length !== 0 ? (
            events.map((event) => {
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
                  onDislike={handleEventDislike}
                />
              );
            })
          ) : (
            <p className="my-events__empty-text">
              Лайкайте посты в разделе события, они будут храниться здесь! ❤️
            </p>
          )}
        </div>
      </section>
    </Auth>
  );
}
