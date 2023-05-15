import Link from "next/link";
import { useRouter } from "next/router";
import UserNavigationPopup from "./UserNavigationPopup";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { useContext, useState } from "react";

const Header = ({isLoggedIn, onLogout}) => {
    const router = useRouter();
    const currentUser = useContext(CurrentUserContext);
    console.log(currentUser);
    
    return (
        <header className="header" id="up">
            <p className="header__logo">МосСобытия</p>

            <nav className="header__page-navigation">
                <Link href="/" className={`header__link ${router.pathname === "/" ? "header__link_active" : ""}`}>Главная</Link>
                { isLoggedIn && <>
                    <Link href="/events" className={`header__link ${router.pathname === "/events" ? "header__link_active" : ""}`}>События</Link>
                    <Link href="/my-events" className={`header__link ${router.pathname === "/my-events" ? "header__link_active" : ""}`}>Мои События</Link>
                </> }
                <Link href="/about-us" className={`header__link ${router.pathname === "/about-us" ? "header__link_active" : ""}`}>О нас</Link>
            </nav>

            { !isLoggedIn ? <div className="header__login-buttons">
                <button className="header__button header__button_action_register" onClick={() => router.push("/sign-up")}>Регистрация</button>
                <button className="header__button header__button_action_login" onClick={() => router.push("/sign-in")}>Войти</button>
            </div> : 
            <div className="header__user-navigation">
                <p className="header__user-name">{currentUser.firstName}</p>
                <UserNavigationPopup onLogout={onLogout}/>
            </div>}
        </header>
    );
};

export default Header;