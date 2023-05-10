import TopEvents from "@/components/TopEvents";
import Event from "@/components/Event";

export default function Events() {
  return (
    <>
      <TopEvents />
      <section className="events">
        <h2 className="events__title">Новые события в Москве 🌱</h2>
        <div className="events__container">
          <Event />
        </div>
      </section>
    </>
  );
}
