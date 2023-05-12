/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useEffect } from "react";

function isAuth({ isLoggedIn, Component }) {
  return () => {
    const router = useRouter();

    useEffect(() => {
      setTimeout(() => {
        if (!isLoggedIn) {
          router.push("/");
        }
      }, 1500);
    }, []);

    return isLoggedIn ? (
      <>
        <Component />
      </>
    ) : (
      <div className="not-auth">Требуется авторизация! Перенаправление...</div>
    );
  };
}

export default isAuth;
