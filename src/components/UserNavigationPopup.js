import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import closeIconPath from "@/images/close-icon.svg";

export default function UserNavigationPopup({ onLogout }) {
  const [isUserPopupActive, setIsUserPopupActive] = useState(false);

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
        <div className="user-popup__info-block">
          <Link href="/my-profile" className="user-popup__link">
            Мой профиль
          </Link>
          <Link href="/my-events" className="user-popup__link">
            Мои События
          </Link>
        </div>

        <div className="user-popup__divider"></div>

        <div className="user-popup__navigation-block">
          <Link href="/" className="user-popup__link">
            Главная
          </Link>
          <Link href="/events" className="user-popup__link">
            События
          </Link>
          <Link href="/about-us" className="user-popup__link">
            О нас
          </Link>
          <Link href="/support" className="user-popup__link">
            Поддержка
          </Link>
        </div>

        <div className="user-popup__divider"></div>

        <button
          className="user-popup__exit-button"
          onClick={handleExitButtonClick}
        >
          Выйти из аккаунта
        </button>
      </nav>
    </>
  );
}
