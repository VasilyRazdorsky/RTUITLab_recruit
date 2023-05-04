import Head from "next/head";
import Poster from "@/components/Poster";
import TopEvents from "@/components/TopEvents";

export default function Home() {
  return (
    <>
      <Head>
        <title>МосСобытия</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={``}>
        <Poster />
        <TopEvents />
      </main>
    </>
  );
}
