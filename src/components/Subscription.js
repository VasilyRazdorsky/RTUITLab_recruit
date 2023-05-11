import useFormValidation from "@/hooks/useFormValidation";
import { useState } from "react";

export default function Subscription() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { handleInputChange, isFormValid } = useFormValidation({
    passwordInput: false,
    nameInput: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubscribed(true);
  }

  return (
    <section className="subscription">
      <div className="subscription__divider"></div>
      <h2 className="subscription__title">Подписаться на рассылку 📨</h2>
      <p className="subscrition__info">
        Хотите узнавать всё первыми? Тогда вводите адрес своей электронной почты
        и смело жмите &quot;Подписаться&quot;. Уведомления о новых событиях
        будут приходить к вам на почту.
      </p>

      {isSubscribed ? (
        <p className="subscription__submit-text">Вы успешно подписаны! ✅</p>
      ) : (
        <>
          <form className="subscription__form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="subscription__form-label">
                Введите вашу почту:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="subscription__input"
                onChange={handleInputChange}
              />
            </div>

            <button
              disabled={!isFormValid}
              type="submit"
              className={`subscription__submit-button ${
                !isFormValid && "subscription__submit-button_disabled"
              }`}
            >
              Подписаться
            </button>
          </form>
        </>
      )}
      <div className="subscription__divider"></div>
      <div className="subscription__moto">🛵</div>
    </section>
  );
}
