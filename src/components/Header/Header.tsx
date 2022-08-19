import React from 'react';
import s from './Header.module.scss'
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={`container + ${s.menu}`}>
                <Navigation isLogoDisplay isSendButtonDisplay/>
            </div>
        </header>
    );
};

export default Header;