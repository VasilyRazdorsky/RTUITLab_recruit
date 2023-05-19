/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCurrentUser } from "@/utils/api";

export default function Admin({ isAdmin, children }) {
  const router = useRouter();
  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res.roles.includes("admin")) {
          return;
        }
        setTimeout(() => {
          if (!isAdmin) {
            router.push("/");
          }
        }, 1500);
      })
      .catch((err) => console.log(err));
  }, []);
  return isAdmin ? (
    <>{children}</>
  ) : (
    <div className="not-auth">
      Страница доступна только админестратору сайта!
    </div>
  );
}
