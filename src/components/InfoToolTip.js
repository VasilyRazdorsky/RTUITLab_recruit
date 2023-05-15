import successRegistrationIconPath from "@/images/success-registration.svg";
import Image from "next/image";
import closeIconPath from "@/images/close-icon.svg";

export default function InfoToolTip() {
  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__close-button" type="button">
          <Image alt="Успешная регистрация" src={closeIconPath} />
        </button>
      </div>
    </div>
  );
}
