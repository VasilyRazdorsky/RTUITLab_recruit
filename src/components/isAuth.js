/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCurrentUser } from "@/utils/api";

export default function Auth({ isLoggedIn, children }) {
  const router = useRouter();
  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          return;
        }
        setTimeout(() => {
          if (!isLoggedIn) {
            router.push("/");
          }
        }, 1500);
      })
      .catch((err) => console.log(err));
  }, []);
  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <div className="not-auth">Требуется авторизация! Перенаправление...</div>
  );
}
