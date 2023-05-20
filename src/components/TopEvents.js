import Carousel from "./Carousel";
import Image from "next/image";
import { getTopEvents } from "@/utils/api";
import { useState, useEffect } from "react";

export default function TopEvents({ topEventsList }) {
  return (
    <section className="top-events">
      <h2 className="top-events__title">Самые ожидаемые события 🎉</h2>
      {topEventsList.length === 0 ? (
        <p className="top-events__empty-text">Скоро!</p>
      ) : (
        <Carousel>
          {topEventsList.map((event, ind) => {
            return (
              <div key={ind} className="carousel__item">
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
