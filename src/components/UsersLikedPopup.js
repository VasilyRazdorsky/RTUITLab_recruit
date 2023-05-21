import Image from "next/image";
import closeIconPath from "@/images/close-icon.svg";

export function UsersLikedPopup({
  isUsersLikedPopupOpen,
  onUsersLikedPopupClose,
  likedUsers,
}) {
  return (
    <div className={`popup ${isUsersLikedPopupOpen && "popup_active"}`}>
      <div className="popup__container popup__container_place_user-liked">
        <button
          className="popup__close-button"
          type="button"
          onClick={onUsersLikedPopupClose}
        >
          <Image
            alt="Закрыть попап"
            src={closeIconPath}
            className="popup__close-icon"
          />
        </button>

        <h2 className="popup__header  popup__header_place_user-liked">
          Пост нравится:
        </h2>
        {likedUsers.length > 0 ? (
          <div className="popup__names-container">
            {likedUsers.map((user) => {
              return (
                <p key={user.id} className="popup__name">
                  {user.firstName}
                </p>
              );
            })}
          </div>
        ) : (
          <p className="popup__empty-text">Нет лайков</p>
        )}
      </div>
    </div>
  );
}
