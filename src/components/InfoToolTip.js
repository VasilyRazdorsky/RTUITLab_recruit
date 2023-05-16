import errorImagePath from "@/images/registration-denied.svg";
import Image from "next/image";
import closeIconPath from "@/images/close-icon.svg";

export default function InfoToolTip({ isInfoToolTipOpen, onInfoToolTipClose }) {
  return (
    <div className={`popup ${isInfoToolTipOpen && "popup_active"}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onInfoToolTipClose}
        >
          <Image
            alt="Закрыть попап"
            src={closeIconPath}
            className="popup__close-icon"
          />
        </button>

        <Image alt="Ошибка операции" src={errorImagePath} />

        <h2 className="popup__header popup__header_place_infotooltip">
          Что-то пошло не так! Попробуйте ещё раз.
        </h2>
      </div>
    </div>
  );
}
