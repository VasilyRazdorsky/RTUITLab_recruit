import Image from "next/image";
import Link from "next/link";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import { Element } from "react-scroll";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { addLike, removeLike, getEvent } from "@/utils/api";
import { UsersLikedPopup } from "./UsersLikedPopup";

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
  const [isLiked, setIsLiked] = useState(false);
  const [likesInfo, setLikesInfo] = useState([]);
  const [isUsersLikedPopupOpen, setIsUsersLikedPopupOpen] = useState(false);

  function handleUsersLikedPopupOpen() {
    setIsUsersLikedPopupOpen(true);
  }

  function handleUsersLikedPopupClose() {
    setIsUsersLikedPopupOpen(false);
  }

  useEffect(() => {
    getEvent(id)
      .then((res) => {
        setLikesCount(res.likes.length);
        setLikesInfo(res.likes);
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
    <>
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
              unoptimized={true}
              className="event__poster-img"
            />
          </div>

          <div className="event__info-block">
            <div className="event__likes-block">
              <button
                className="event__likes-count"
                onClick={handleUsersLikedPopupOpen}
              >
                Нравится: {likesCount}
              </button>
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
          {currentUser?.roles && currentUser.roles.includes("admin") && (
            <Link
              href={`/edit-event/${id.toString()}`}
              className="event__edit-link"
            >
              Редактировать событие
            </Link>
          )}
        </div>
      </Element>
      <UsersLikedPopup
        isUsersLikedPopupOpen={isUsersLikedPopupOpen}
        likedUsers={likesInfo}
        onUsersLikedPopupClose={handleUsersLikedPopupClose}
      />
    </>
  );
}
