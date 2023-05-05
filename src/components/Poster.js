import { VscArrowDown } from "react-icons/vsc";

export default function Poster() {
  return (
    <section className="poster">
      <h1 className="poster__title">Все события города в один клик</h1>
      <ul className="poster__subtitle-list">
        <li>
          <p className="poster__subtitle">Узнавай 💡</p>
        </li>
        <li>
          <p className="poster__subtitle">Лайкай ❤️</p>
        </li>
        <li>
          <p className="poster__subtitle"> Посещай 🌳</p>
        </li>
        <li>
          <p className="poster__subtitle"> Развивайся 📈</p>
        </li>
      </ul>

      <p className="poster__info-text">
        Официальный портал мероприятий города Москва
      </p>

      <VscArrowDown className="poster__arrow" />
    </section>
  );
}
