import "@/styles/index.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { getCurrentUser } from "@/utils/api";
import { login, logout } from "@/utils/auth";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  function handleLogout() {
    logout()
      .then(() => {
        router.push("/");
        setIsLoggedIn(false);
        setCurrentUser({});
      })
      .catch((err) => console.log(err));
  }

  //Заполнение контекста после авторизации
  useEffect(() => {
    if (isLoggedIn) {
      getCurrentUser().then((res) => {
        setCurrentUser(res);
      });
    }
  }, [isLoggedIn]);

  //Заполнение контекста автоматически с наличием куков
  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleLogin(email, password) {
    login(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        router.push("/events");
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
        <Component
          {...pageProps}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      </Layout>
    </CurrentUserContext.Provider>
  );
}
