import Image from "next/image";
import GitHubPath from "@/images/github.svg";
import VKPath from "@/images/vk.svg";
import TelegramPath from "@/images/telegram.svg";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="about-us__title">МосСобытия</h2>
      <p className="about-us__info">
        Решение по популяризации мероприятий внутри города Москва. Проект
        разработан при поддержке администрации города.
      </p>

      <div className="about-us__communication-block">
        <div className="about-us__contacts-block">
          <h2 className="about-us__communication-title">Контакты</h2>
          <ul className="about-us__contacts-list">
            <li>
              <p className="about-us__contact">
                📞 Телефон: +7 (965) 264-94-23
              </p>
            </li>
            <li>
              <p className="about-us__contact">📧 Почта: V.Razdorski@mail.ru</p>
            </li>
          </ul>
        </div>

        <div className="about-us__socials-block">
          <h2 className="about-us__communication-title">Соцсети</h2>
          <div className="about-us__socials-list">
            <a
              href="https://github.com/VasilyRazdorsky"
              target="_blank"
              className="about-us__social-link"
            >
              <Image
                className="about-us__social-img"
                alt="Ссылка на GitHub"
                src={GitHubPath}
              />
            </a>
            <a
              href="https://vk.com/id187762102"
              target="_blank"
              alt="Ссылка на VK"
              className="about-us__social-link"
            >
              <Image
                className="about-us__social-img"
                alt="Ссылка на VK"
                src={VKPath}
              />
            </a>
            <a
              href="https://t.me/b_bazil"
              target="_blank"
              alt="Ссылка на Telegram"
              className="about-us__social-link"
            >
              <Image
                className="about-us__social-img"
                alt="Ссылка на Telegram"
                src={TelegramPath}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
