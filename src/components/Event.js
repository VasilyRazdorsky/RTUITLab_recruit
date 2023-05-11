import Image from "next/image";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { useState } from "react";
import { Element } from "react-scroll";

export default function Event({
  title,
  date,
  posterUrl,
  likeCount,
  description,
  adress,
  elementName,
}) {
  return (
    <Element name={elementName} className="element">
      <div className="event">
        <div className="event__head">
          <h3 className="event__title">{title}</h3>
          <p className="event__date">{date}</p>
        </div>

        <div className="event__poster"></div>

        <div className="event__info-block">
          <div className="event__likes-block">
            <p className="event__likes-count">Нравится: {likeCount}</p>
            <button className="event__like-button">
              <VscHeart className="event__like-icon" />
            </button>
          </div>

          <p className="event__info-text">
            <span className="event__text-title">{title}</span>
            {description}
          </p>
        </div>

        <p className="event__adress">📍 {adress}</p>
      </div>
    </Element>
  );
}

/*<div className={`test ${isMoreOpened && "test_active"}`}>
            <p className="element">123</p>
            <p className="element">321</p>
            <p className="element">23</p>
            <p className="element">321</p>
            <p className="element">123</p>
            <p className="element">321</p>
            <button className="element" onClick={handleMoreCloseClick}>
              Close
            </button>
          </div>
          
          
          
          <button className onClick={handleMoreClick}>
            More...
          </button>*/
