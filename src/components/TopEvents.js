import Carousel from "./Carousel";
import Image from "next/image";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";

function handleScroll(name, path) {
  if (path === "/events") {
    scroller.scrollTo(name, {
      duration: 1500,
      smooth: true,
    });
  }
}

export default function TopEvents({ topEventsList }) {
  const router = useRouter();

  return (
    <section className="top-events">
      <h2 className="top-events__title">Самые ожидаемые события 🎉</h2>
      {topEventsList.length < 3 ? (
        <p className="top-events__empty-text">Скоро!</p>
      ) : (
        <Carousel>
          {topEventsList.map((event, ind) => {
            return (
              <div
                key={ind}
                id={event.id.toString()}
                className="carousel__item"
                onClick={() => {
                  handleScroll(event.id.toString(), router.pathname);
                }}
              >
                <div className="carousel__upper-layer"></div>
                <Image
                  alt={`Постер к событию ${event.title}`}
                  src={event.posterUrl}
                  width={375}
                  height={375}
                  unoptimized={true}
                  className="carousel__image"
                />
                <p className="carousel__item-text carousel__item-text_place_title">
                  {event.title}
                </p>
                <p className="carousel__item-text carousel__item-text_place_date">
                  {event.startDate.slice(0, 10)}
                </p>
              </div>
            );
          })}
        </Carousel>
      )}
    </section>
  );
}
