import Image from "next/image";
import GitHubPath from "@/images/github.svg";
import VKPath from "@/images/vk.svg";
import TelegramPath from "@/images/telegram.svg";
import Map from "@/components/Map";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="about-us__title">МосСобытия</h2>
      <p className="about-us__info">
        Решение по популяризации мероприятий внутри города Москва. Проект
        разработан при поддержке администрации города.
      </p>

      <div className="about-us__divider"></div>

      <div className="about-us__communication-block">
        <div className="about-us__contacts-block">
          <h3 className="about-us__communication-title">Контакты</h3>
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
          <h3 className="about-us__communication-title">Соцсети</h3>
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

      <div className="about-us__divider"></div>

      <h3 className="about-us__adress-title">Адрес офиса в Москве</h3>
      <p className="about-us__adress-text">
        📍 1-й Красногвардейский проезд, д. 15 башня &quot;Меркурий&quot;
      </p>
      <Map
        link="https://yandex.ru/map-widget/v1/?ll=37.542765%2C55.749669&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0NTMwMTM1MjgxErcC0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCm0LXQvdGC0YDQsNC70YzQvdGL0Lkg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC40LLQvdGL0Lkg0L7QutGA0YPQsywg0J_RgNC10YHQvdC10L3RgdC60LjQuSDRgNCw0LnQvtC9LCDQnNC-0YHQutC-0LLRgdC60LjQuSDQvNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQtNC10LvQvtCy0L7QuSDRhtC10L3RgtGAINCc0L7RgdC60LLQsC3QodC40YLQuCwg0LzQvdC-0LPQvtGE0YPQvdC60YbQuNC-0L3QsNC70YzQvdGL0Lkg0LrQvtC80L_Qu9C10LrRgSDQkdCw0YjQvdGPINCc0LXRgNC60YPRgNC40LkiCg1nKBZCFYYAX0I%2C&z=15.55"
        className="map_place_about-us"
      />
    </section>
  );
};

export default AboutUs;
