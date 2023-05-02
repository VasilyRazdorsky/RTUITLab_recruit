import "@/styles/index.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function handleLogout() {
    router.push("/");
    setIsLoggedIn(false);
  }
  return (
    <Component {...pageProps} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
  );
}
