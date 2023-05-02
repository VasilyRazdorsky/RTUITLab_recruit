import "@/styles/index.css";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
      />
    </Layout>
  );
}
