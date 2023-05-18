import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import closeIconPath from "@/images/close-icon.svg";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { getCurrentUser } from "@/utils/api";

export default function UserNavigationPopup({ onLogout }) {
  const [isUserPopupActive, setIsUserPopupActive] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const [roles, setRoles] = useState([]);

  useEffect(() => {}, []);

  function handleUserButtonClick() {
    setIsUserPopupActive(true);
  }

  function handleClosePopupButton() {
    setIsUserPopupActive(false);
  }

  function handleExitButtonClick() {
    handleClosePopupButton();
    onLogout();
  }
  return (
    <>
      <button className="navigation-button" onClick={handleUserButtonClick}>
        ▼
      </button>

      <button className="burger-menu-button" onClick={handleUserButtonClick}>
        <span className="burger-menu-button__line burger-menu-button__line_number_01"></span>
        <span className="burger-menu-button__line burger-menu-button__line_number_02"></span>
        <span className="burger-menu-button__line burger-menu-button__line_number_03"></span>
      </button>

      <nav
        className={`user-popup ${isUserPopupActive ? "user-popup_active" : ""}`}
      >
        <button
          className="user-popup__close-button"
          onClick={handleClosePopupButton}
        >
          <Image
            src={closeIconPath}
            alt="Закрыть"
            className="user-popup__close-button-image"
          />
        </button>

        <div className="user-popup__navigation-block">
          <Link
            href="/my-profile"
            className="user-popup__link"
            onClick={handleClosePopupButton}
          >
            Мой профиль
          </Link>
          <Link
            href="/my-events"
            className="user-popup__link"
            onClick={handleClosePopupButton}
          >
            Мои События
          </Link>
          <div className="user-popup__divider"></div>
          <Link
            href="/"
            className="user-popup__link"
            onClick={handleClosePopupButton}
          >
            Главная
          </Link>
          <Link
            href="/events"
            className="user-popup__link"
            onClick={handleClosePopupButton}
          >
            События
          </Link>
          <Link
            href="/about-us"
            className="user-popup__link"
            onClick={handleClosePopupButton}
          >
            О нас
          </Link>
          <Link
            href="/support"
            className="user-popup__link"
            onClick={handleClosePopupButton}
          >
            Поддержка
          </Link>
          {currentUser?.roles && currentUser.roles.includes("admin") ? (
            <Link
              href="/create-event"
              className="user-popup__link"
              onClick={handleClosePopupButton}
            >
              Создать событие
            </Link>
          ) : (
            <></>
          )}
          <div className="user-popup__divider"></div>
        </div>

        <button
          className="user-popup__exit-button"
          onClick={handleExitButtonClick}
        >
          Выйти из аккаунта
        </button>
      </nav>

      <div
        className={`background ${isUserPopupActive && "background_active"}`}
      ></div>
    </>
  );
}
