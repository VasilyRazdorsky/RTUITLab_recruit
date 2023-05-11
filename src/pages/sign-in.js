import Link from "next/link";
import useFormValidation from "@/hooks/useFormValidation";
export default function Login() {
  const { handleInputChange, isFormValid } = useFormValidation({
    passwordInput: true,
    nameInput: false,
  });

  return (
    <section className="login">
      <h1 className="login__title">Рады видеть!</h1>

      <form className="login__form">
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
          Войти
        </button>
      </form>

      <p className="login__redirect-text">
        Ещё не зарегистрированы?{" "}
        <Link href="/sign-up" className="login__redirect-link">
          Регистрация
        </Link>
      </p>
    </section>
  );
}
