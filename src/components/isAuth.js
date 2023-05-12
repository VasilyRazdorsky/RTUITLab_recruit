/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Auth({ isLoggedIn, children }) {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn) {
        router.push("/");
      }
    }, 1500);
  }, []);
  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <div className="not-auth">Требуется авторизация! Перенаправление...</div>
  );
}
