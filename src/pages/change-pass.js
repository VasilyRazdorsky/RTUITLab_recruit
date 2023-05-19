import Auth from "@/components/isAuth";
import Head from "next/head";
import useFormValidation from "@/hooks/useFormValidation";
import InfoToolTip from "@/components/InfoToolTip";

export default function ChangePass({
  isLoggedIn,
  onPasswordChange,
  isInfoToolTipOpen,
  onInfoToolTipClose,
}) {
  const { handleInputChange, isFormValid, values } = useFormValidation({
    passwordInput: false,
    nameInput: false,
    createEventInput: false,
    changePassword: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
    onPasswordChange(values.old_password, values.new_password);
  }
  return (
    <>
      <Head>
        <title>Пароль</title>
      </Head>
      <Auth isLoggedIn={isLoggedIn}>
        <section className="login login_place_change-pass">
          <h2 className="login__title">Редактирование пароля 🔐</h2>
          <form className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="old_password" className="login__form-label">
              Старый пароль:
            </label>
            <input
              type="password"
              name="old_password"
              id="old_password"
              className="login__input"
              required
              minLength="3"
              maxLength="40"
              defaultValue=""
              onChange={handleInputChange}
            />

            <label htmlFor="new_password" className="login__form-label">
              Новый пароль:
            </label>
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="login__input"
              required
              minLength="3"
              maxLength="40"
              defaultValue=""
              onChange={handleInputChange}
            />

            <button
              disabled={!isFormValid}
              type="submit"
              className={`login__submit-button ${
                !isFormValid && "login__submit-button_disabled"
              }`}
            >
              Изменить пароль
            </button>
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
