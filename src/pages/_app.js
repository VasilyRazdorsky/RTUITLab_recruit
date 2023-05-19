import "@/styles/index.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import {
  getCurrentUser,
  createEvent,
  changeUserInfo,
  changePassword,
} from "@/utils/api";
import { login, logout, register } from "@/utils/auth";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  function handleInfoToolTipClose() {
    setIsInfoToolTipOpen(false);
  }

  function handleRegister(firstName, email, password) {
    register(firstName, email, password)
      .then(() => {
        router.push("/sign-in");
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    login(email, password)
      .then(() => {
        setIsLoggedIn(true);
        router.push("/events");
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        console.log(err);
      });
  }

  function handleLogout() {
    logout()
      .then(() => {
        router.push("/");
        setIsLoggedIn(false);
        setCurrentUser({});
      })
      .catch((err) => console.log(err));
  }

  function handleChangeUserInfo(firstName, email) {
    changeUserInfo(firstName, email)
      .then((res) => {
        setCurrentUser({ ...currentUser, firstName: firstName, email: email });
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        console.log(err);
      });
  }

  function onPasswordChange(currentPassword, newPassword) {
    changePassword(currentPassword, newPassword)
      .then(() => {
        router.push("/my-profile");
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        console.log(err);
      });
  }

  //Заполнение контекста после авторизации
  useEffect(() => {
    if (isLoggedIn) {
      getCurrentUser().then((res) => {
        setCurrentUser(res);
        setIsAdmin(res.roles.includes("admin"));
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
          setIsAdmin(res.roles.includes("admin"));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCreateEvent(values) {
    createEvent(values)
      .then((res) => {
        router.push("/events");
        console.log(res);
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
        <Component
          {...pageProps}
          isLoggedIn={isLoggedIn}
          isAdmin={isAdmin}
          onLogin={handleLogin}
          onLogout={handleLogout}
          onRegister={handleRegister}
          isInfoToolTipOpen={isInfoToolTipOpen}
          onInfoToolTipClose={handleInfoToolTipClose}
          onCreateEvent={handleCreateEvent}
          onChangeUserInfo={handleChangeUserInfo}
          onPasswordChange={onPasswordChange}
        />
      </Layout>
    </CurrentUserContext.Provider>
  );
}
