import Event from "@/components/Event";

export default function MyEvents() {
  return (
    <section className="my-events">
      <h2 className="my-events__title">Ваши избранные события</h2>
      <div className="my-events__events-container">
        <Event />
      </div>
    </section>
  );
}
