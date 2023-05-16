import Image from "next/image";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import { Element } from "react-scroll";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { addLike, removeLike, getEvent } from "@/utils/api";

export default function Event({
  id,
  title,
  date,
  posterUrl,
  description,
  adress,
  elementName,
  onDislike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(
    currentUser.likedEvents.find((event) => {
      return event.id === id;
    })
  );

  useEffect(() => {
    getEvent(id)
      .then((res) => {
        setLikesCount(res.likes.length);
        if (
          res.likes.find((user) => {
            return user.id === currentUser.id;
          })
        ) {
          setIsLiked(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLikeClick = () => {
    if (isLiked) {
      removeLike(id)
        .then(() => {
          setIsLiked(false);
          onDislike(id);
          setLikesCount(likesCount - 1);
        })
        .catch((err) => console.log(err));
    } else {
      addLike(id)
        .then(() => {
          setIsLiked(true);
          setLikesCount(likesCount + 1);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Element name={elementName} className="element">
      <div className="event">
        <div className="event__head">
          <h3 className="event__title">{title}</h3>
          <p className="event__date">{date}</p>
        </div>

        <div className="event__poster">
          <Image
            loader={() => {
              return posterUrl;
            }}
            alt="Постер события"
            src={posterUrl}
            width={375}
            height={375}
            className="event__poster-img"
          />
        </div>

        <div className="event__info-block">
          <div className="event__likes-block">
            <p className="event__likes-count">Нравится: {likesCount}</p>
            <button className="event__like-button" onClick={handleLikeClick}>
              {isLiked ? (
                <VscHeartFilled className="event__like-icon event__like-icon_liked" />
              ) : (
                <VscHeart className="event__like-icon" />
              )}
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
