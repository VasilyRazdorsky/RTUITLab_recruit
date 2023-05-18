import Auth from "@/components/isAuth";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import useFormValidation from "@/hooks/useFormValidation";
import InfoToolTip from "@/components/InfoToolTip";

export default function MyProfile({
  isLoggedIn,
  onChangeUserInfo,
  isInfoToolTipOpen,
  onInfoToolTipClose,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isFormActive, setIsFormActive] = useState(false);

  const { handleInputChange, isFormValid, values } = useFormValidation({
    passwordInput: false,
    nameInput: true,
    createEventInput: false,
  });

  useEffect(() => {
    values.name = currentUser.firstName;
    values.email = currentUser.email;
  }, [currentUser]);

  function handleEditClick(e) {
    e.preventDefault();
    setIsFormActive(true);
  }

  function handleSubmitClick(e) {
    e.preventDefault();
    onChangeUserInfo(values.name, values.email);
    setIsFormActive(false);
  }
  return (
    <>
      <Auth isLoggedIn={isLoggedIn}>
        <section className="my-profile">
          <h1 className="my-profile__title">
            Привет, {currentUser.firstName}! 👋
          </h1>

          <form className="my-profile__form" onSubmit={handleSubmitClick}>
            <div className="my-profile__input-block">
              <label htmlFor="name" className="my-profile__form-label">
                Имя:
              </label>
              <input
                disabled={!isFormActive}
                type="name"
                name="name"
                id="name"
                className={`my-profile__input ${
                  !isFormActive && "my-profile__input_disabled"
                }`}
                defaultValue={currentUser.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="my-profile__input-block">
              <label htmlFor="email" className="my-profile__form-label">
                Почта:
              </label>
              <input
                disabled={!isFormActive}
                type="email"
                name="email"
                id="email"
                className={`my-profile__input ${
                  !isFormActive && "my-profile__input_disabled"
                }`}
                defaultValue={currentUser.email}
                onChange={handleInputChange}
              />
            </div>

            {!isFormActive ? (
              <button
                className="my-profile__button my-profile__button_action_edit"
                type="button"
                onClick={handleEditClick}
              >
                Редактировать
              </button>
            ) : (
              <button
                disabled={!isFormValid}
                className={`my-profile__button ${
                  !isFormValid && "my-profile__button_disabled"
                } my-profile__button_action_submit`}
                type="submit"
              >
                Сохранить
              </button>
            )}
          </form>
          <InfoToolTip
            isInfoToolTipOpen={isInfoToolTipOpen}
            onInfoToolTipClose={onInfoToolTipClose}
          />
        </section>
      </Auth>
    </>
  );
}
