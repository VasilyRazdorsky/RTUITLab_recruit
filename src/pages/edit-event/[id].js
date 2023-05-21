import Auth from "@/components/isAuth";
import Admin from "@/components/isAdmin";
import InfoToolTip from "@/components/InfoToolTip";
import { getAllEvents, getEvent } from "@/utils/api";
import MyMap from "@/components/MyMap";
import { Placemark } from "@pbe/react-yandex-maps";
import useFormValidation from "@/hooks/useFormValidation";
import { useState } from "react";

export const getStaticPaths = async () => {
  const res = await getAllEvents();

  const paths = res.map((event) => {
    return {
      params: {
        id: event.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await getEvent(id);
  return {
    props: {
      event: res,
      revalidate: 10,
    },
  };
};

export default function EditEvent({
  isAdmin,
  isLoggedIn,
  event,
  isInfoToolTipOpen,
  onInfoToolTipClose,
  onEditEvent,
}) {
  const { handleInputChange, isFormValid, values } = useFormValidation({
    createEventInput: true,
    changeEvent: true,
    changeEventConfig: {
      title: event.title,
      description: event.description,
      address: event.address,
      startDate: event.startDate,
      posterUrl: event.posterUrl,
      coordinates: event.coordinates,
      id: event.id,
    },
  });
  const [coordinates, setCoordinates] = useState(event.coordinates);

  function handleMapClick(e) {
    setCoordinates(e.get("coords"));
    values.coordinates = e.get("coords");
    return e.get("coords");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onEditEvent(values);
  }

  return (
    <Auth isLoggedIn={isLoggedIn}>
      <Admin isAdmin={isAdmin}>
        <section className="login">
          <h2 className="login__title">Редактировать событие 🎨</h2>

          <form className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="title" className="login__form-label">
              Название события:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="login__input"
              defaultValue={event.title}
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
              defaultValue={event.description}
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
              defaultValue={event.address}
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
              defaultValue={event.startDate}
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
              defaultValue={event.posterUrl}
              onChange={handleInputChange}
            />

            <button
              disabled={!isFormValid}
              type="submit"
              className={`login__submit-button ${
                !isFormValid && "login__submit-button_disabled"
              }`}
            >
              Применить изменения
            </button>
          </form>
          <InfoToolTip
            isInfoToolTipOpen={isInfoToolTipOpen}
            onInfoToolTipClose={onInfoToolTipClose}
          />
        </section>
      </Admin>
    </Auth>
  );
}
