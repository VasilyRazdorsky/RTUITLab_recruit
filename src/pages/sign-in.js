import Link from "next/link";
import useFormValidation from "@/hooks/useFormValidation";
import InfoToolTip from "@/components/InfoToolTip";
import Head from "next/head";

export default function Login({
  onLogin,
  isInfoToolTipOpen,
  onInfoToolTipClose,
}) {
  const { handleInputChange, isFormValid, values } = useFormValidation({
    passwordInput: true,
    nameInput: false,
    createEventInput: false,
  });

  const handleSubmitClick = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
  };

  return (
    <>
      <Head>
        <title>Войти</title>
      </Head>
      <section className="login">
        <h2 className="login__title">Рады видеть!</h2>

        <form className="login__form" onSubmit={handleSubmitClick}>
          <label htmlFor="email" className="login__form-label">
            Почта:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="login__input"
            onChange={handleInputChange}
            defaultValue=""
          />

          <label htmlFor="password" className="login__form-label">
            Пароль:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="login__input"
            required
            minLength="4"
            maxLength="40"
            onChange={handleInputChange}
            defaultValue=""
          />

          <button
            disabled={!isFormValid}
            type="submit"
            className={`login__submit-button ${
              !isFormValid && "login__submit-button_disabled"
            }`}
          >
            Войти
          </button>
        </form>

        <p className="login__redirect-text">
          Ещё не зарегистрированы?{" "}
          <Link href="/sign-up" className="login__redirect-link">
            Регистрация
          </Link>
        </p>

        <InfoToolTip
          isInfoToolTipOpen={isInfoToolTipOpen}
          onInfoToolTipClose={onInfoToolTipClose}
        />
      </section>
    </>
  );
}
