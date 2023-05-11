import TopEvents from "@/components/TopEvents";
import Event from "@/components/Event";
import MyMap from "@/components/MyMap";
import { Placemark } from "@pbe/react-yandex-maps";
import { scroller, Element } from "react-scroll";

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

export default function Events() {
  return (
    <>
      <TopEvents />
      <section className="events">
        <h2 className="events__map-title">Карта событий 🗺️</h2>
        <MyMap
          coordinates={[55.75399399999374, 37.62209300000001]}
          zoom={11}
          className="map_place_events"
          placemarks={events.map((event) => (
            <Placemark
              key={event.id}
              defaultGeometry={event.coordinates}
              properties={{
                iconCaption: event.title,
              }}
              onClick={() => {
                console.log(event.id);
                scroller.scrollTo(event.id, {
                  duration: 1500,
                  smooth: true,
                });
              }}
            />
          ))}
        />
        <h2 className="events__title">Новые события в Москве 🌱</h2>

        <div className="events__container">
          <Event
            title="Выставка Code 369"
            date="24.05.2023"
            posterUrl="abc"
            likeCount="37"
            description="Экспозиция выстроена в своей особой логике: следуя от одной инсталляции к другой, посетитель проходит путь от высшей точки нематериального мира «Абсолют» до точки «Земля». Арт-объекты наводят на размышления и неспешный внутренний диалог. Посетителей сопровождает аудиогид, который поможет глубже погрузиться в смыслы экспонатов и собственные ощущения. Почувствовать умиротворение и поразмышлять помогают звук и свет, а главное — возможность тактильно взаимодействовать с арт-объектами: песком и водой. Кинестетиков ждёт особенно много впечатлений."
            adress="4-й Сыромятнический пер., д 1/8, стр. 11."
            elementName="123"
          />
          <Event
            id="321"
            title="Концерт в большом театре"
            date="06.06.2023"
            posterUrl="abc"
            likeCount="19"
            description="Historic theatre in Moscow, Russia, originally designed by architect Joseph Bové, which holds ballet and opera performances. Before the October Revolution it was a part of the Imperial Theatres of the Russian Empire along with Maly Theatre in Moscow and a few theatres in Saint Petersburg."
            adress="Moscow, Teatralnaya Square, 1"
            elementName="321"
          />
        </div>
      </section>
    </>
  );
}
