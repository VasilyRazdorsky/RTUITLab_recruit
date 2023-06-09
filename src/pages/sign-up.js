import Link from "next/link";
import useFormValidation from "@/hooks/useFormValidation";
import Head from "next/head";
import InfoToolTip from "@/components/InfoToolTip";
export default function Register({
  onRegister,
  isInfoToolTipOpen,
  onInfoToolTipClose,
}) {
  const { handleInputChange, isFormValid, values } = useFormValidation({
    passwordInput: true,
    nameInput: true,
    createEventInput: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  };
  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <section className="login">
        <h2 className="login__title">Добро пожаловать!</h2>

        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="login__form-label">
            Имя:
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="login__input"
            onChange={handleInputChange}
            defaultValue=""
          />

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
            Пароль(минимум 1 цифра):
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
            Зарегестрироваться
          </button>
        </form>

        <p className="login__redirect-text">
          Уже зарегистрированы?{" "}
          <Link href="/sign-in" className="login__redirect-link">
            Войти
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
