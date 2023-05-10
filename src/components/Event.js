import Image from "next/image";

export default function Event() {
  return (
    <div className="event">
      <div className="event__short-info">
        <Image alt="Постер события" className="event__poster" />
        <div className="event__info-block">
          <div className="event__first-line">
            <h3 className="event__title">Название события</h3>
            <button className="event__like-button"></button>
          </div>
        </div>
        <p className="event__date">Дата проведения</p>
        <p className="event__adress">Адрес проведения</p>
        <p className="event__status">Статус</p>
      </div>

      <div className="event__main-info">
        <p className="event__description">Описание</p>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "fit-content",
          }}
          className="event__map-position"
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.541629%2C55.607972&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjYzODE0MBJE0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCb0LjRgtC-0LLRgdC60LjQuSDQsdGD0LvRjNCy0LDRgCwgNDLQujIiCg2gKhZCFZBuXkI%2C&z=16.86"
            style={{
              width: "560px",
              height: "400px",
              position: "relative",
              border: "none",
            }}
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
