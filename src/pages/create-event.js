import Auth from "@/components/isAuth";
import Head from "next/head";
import MyMap from "@/components/MyMap";
import { useState } from "react";
import { Placemark } from "@pbe/react-yandex-maps";
import useFormValidation from "@/hooks/useFormValidation";
import InfoToolTip from "@/components/InfoToolTip";

export default function CreateEvent({
  isLoggedIn,
  onCreateEvent,
  isInfoToolTipOpen,
  onInfoToolTipClose,
}) {
  const [coordinates, setCoordinates] = useState([
    55.75399399999374, 37.62209300000001,
  ]);

  const { handleInputChange, isFormValid, values } = useFormValidation({
    passwordInput: false,
    nameInput: false,
    createEventInput: true,
  });

  function handleMapClick(e) {
    setCoordinates(e.get("coords"));
    values.coordinates = e.get("coords");
    return e.get("coords");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCreateEvent(values);
  }
  return (
    <>
      <Head>
        <title>Создать событие</title>
      </Head>
      <Auth isLoggedIn={isLoggedIn}>
        <section className="login">
          <h1 className="login__title">Создать событие 🎨</h1>

          <form className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="title" className="login__form-label">
              Название события:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="login__input"
              defaultValue=""
              onChange={handleInputChange}
            />

            <label htmlFor="description" className="login__form-label">
              Описание:
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              className="login__input login__input_textarea"
              defaultValue=""
              onChange={handleInputChange}
            />

            <label
              htmlFor="address"
              className="login__form-label login__form-label_after-textarea"
            >
              Адрес:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="login__input"
              defaultValue=""
              onChange={handleInputChange}
            />

            <label htmlFor="startDate" className="login__form-label">
              Дата(вид месяц.день.год):
            </label>
            <input
              type="text"
              name="startDate"
              id="startDate"
              className="login__input"
              defaultValue=""
              onChange={handleInputChange}
            />

            <p className="login__map-text">
              Кликните на карту, чтобы выбрать координаты:
            </p>

            <MyMap
              coordinates={[55.75399399999374, 37.62209300000001]}
              zoom={11}
              className="map_place_create-event"
              onClick={handleMapClick}
              placemarks={<Placemark geometry={coordinates} />}
            />

            <label
              htmlFor="coordinates"
              className="login__form-label login__form-label_after-textarea"
            >
              Координаты(через запятую):
            </label>
            <input
              type="text"
              name="coordinates"
              id="coordinates"
              className="login__input "
              value={coordinates}
              disabled={true}
              onChange={handleInputChange}
            />

            <label htmlFor="posterUrl" className="login__form-label">
              Ссылка на постер:
            </label>
            <input
              type="text"
              name="posterUrl"
              id="posterUrl"
              className="login__input"
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
              Войти
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
