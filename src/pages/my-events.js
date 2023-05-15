import Auth from "@/components/isAuth";
import Head from "next/head";

export default function MyEvents({ isLoggedIn }) {
  return (
    <Auth isLoggedIn={isLoggedIn}>
      <Head>
        <title>Мои События</title>
      </Head>
      <section className="my-events">
        <h2 className="my-events__title">Ваши избранные события</h2>
        <div className="my-events__events-container"></div>
      </section>
    </Auth>
  );
}
