import Link from "next/link";
import useFormValidation from "@/hooks/useFormValidation";
export default function Register() {
  const { handleInputChange, isFormValid } = useFormValidation({
    passwordInput: true,
    nameInput: true,
  });
  return (
    <section className="login">
      <h1 className="login__title">Добро пожаловать!</h1>

      <form className="login__form">
        <label htmlFor="name" className="login__form-label">
          Имя:
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="login__input"
          onChange={handleInputChange}
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
    </section>
  );
}
