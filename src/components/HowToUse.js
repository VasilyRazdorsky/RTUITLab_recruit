export default function HowToUse() {
  return (
    <section className="how-to-use">
      <h2 className="how-to-use__title">Как пользоваться? 📙</h2>

      <ol className="how-to-use__advice-list">
        <li className="how-to-use__advice">
          <p className="how-to-use__advice-num">1</p>
          <p className="how-to-use__advice-text">Создайте аккаунт на портале</p>
        </li>

        <li className="how-to-use__advice">
          <p className="how-to-use__advice-num">2</p>
          <p className="how-to-use__advice-text">
            Добавляйте понравившиеся мероприятия в Мои События
          </p>
        </li>

        <li className="how-to-use__advice">
          <p className="how-to-use__advice-num">3</p>
          <p className="how-to-use__advice-text">
            В разделе Подробнее события узнайте дату, время и место проведения.
            Приходите и наслаждайтесь 🤩
          </p>
        </li>
      </ol>

      <div className="how-to-use__gear">⚙️</div>
    </section>
  );
}
