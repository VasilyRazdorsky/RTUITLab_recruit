import useFormValidation from "@/hooks/useFormValidation";
import InfoToolTip from "./InfoToolTip";

export default function Subscription({
  isEmailSelected,
  onEmailSelection,
  onCodeSend,
  isSubscribed,
  isInfoToolTipOpen,
  onInfoToolTipClose,
}) {
  const { handleInputChange, isFormValid, values } = useFormValidation({
    passwordInput: false,
    nameInput: false,
    isSubscription: true,
    isEmailSelected: isEmailSelected,
  });

  function handleEmailSelection() {
    onEmailSelection(values.email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCodeSend(values.email, values.code);
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

            {isEmailSelected && (
              <div>
                <label htmlFor="code" className="subscription__form-label">
                  Введите код из сообщения(на вашей почте):
                </label>
                <input
                  type="text"
                  name="code"
                  id="code"
                  className="subscription__input"
                  onChange={handleInputChange}
                />
              </div>
            )}

            {isEmailSelected ? (
              <button
                disabled={!isFormValid}
                type="submit"
                className={`subscription__submit-button ${
                  !isFormValid && "subscription__submit-button_disabled"
                }`}
              >
                Отправить
              </button>
            ) : (
              <button
                disabled={!isFormValid}
                type="button"
                className={`subscription__submit-button ${
                  !isFormValid && "subscription__submit-button_disabled"
                }`}
                onClick={handleEmailSelection}
              >
                Подписаться
              </button>
            )}
          </form>
        </>
      )}

      <div className="subscription__divider"></div>
      <div className="subscription__moto">🛵</div>
      <InfoToolTip
        isInfoToolTipOpen={isInfoToolTipOpen}
        onInfoToolTipClose={onInfoToolTipClose}
      />
    </section>
  );
}
