import React from 'react';
import s from "./Navigation.module.scss";
import Button from "../UI/Button/Button";
import logo from "../../assets/img/logo.png";

interface NavigationProps {
    isVertical?: boolean;
    isSendButtonDisplay?: boolean;
    isLogoDisplay?: boolean;
}

const Navigation = ({isVertical, isSendButtonDisplay, isLogoDisplay}: NavigationProps) => {

    const listClasses = [s.menu__list, isVertical ? s.menu__vertList : ""];
    const menuClasses = [s.menu, isVertical ? s.vertMenu : ""];

    return (
        <nav className={menuClasses.join(" ")}>
            {isLogoDisplay &&
                <a href="#" className={s.menu__list__link + ' ' + s.menu__logo}>
                    <img src={logo} alt="logo image" className={s.menu__logo__img}/>
                    <span>Company name</span>
                </a>
            }
            <ul className={listClasses.join(' ')}>
                <li className={s.menu__list__item}>
                    <a href="#" className={s.menu__list__link}>Главная</a>
                </li>
                <li className={s.menu__list__item}>
                    <a href="#" className={s.menu__list__link}>Товары</a>
                </li>
                <li className={s.menu__list__item}>
                    <a href="#" className={s.menu__list__link}>Вакансии</a>
                </li>
                <li className={s.menu__list__item}>
                    <a href="#" className={s.menu__list__link}>Контакты</a>
                </li>
                {isSendButtonDisplay &&
                    <li className={s.menu__list__item}>
                        <Button>Оставить заявку</Button>
                    </li>
                }
            </ul>
        </nav>
    );
};

export default Navigation;