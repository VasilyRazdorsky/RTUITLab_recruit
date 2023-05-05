import Carousel from "./Carousel";

export default function TopEvents() {
  return (
    <section className="top-events">
      <h2 className="top-events__title">Самые ожидаемые события 🎉</h2>
      <Carousel>
        <div className="carousel__item carousel__item_num_1">Item 1</div>
        <div className="carousel__item carousel__item_num_2">Item 2</div>
        <div className="carousel__item carousel__item_num_3">Item 3</div>
      </Carousel>
    </section>
  );
}
