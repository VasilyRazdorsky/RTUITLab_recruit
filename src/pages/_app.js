import "@/styles/index.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { getAllEvents } from "@/utils/api";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [events, setEvents] = useState([]);

  function handleLogout() {
    router.push("/");
    setIsLoggedIn(false);
  }

  return (
    <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
      <Component
        {...pageProps}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        currentEvents={events}
      />
    </Layout>
  );
}
