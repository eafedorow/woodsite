import React from 'react';
import s from './Footer.module.scss'
import Navigation from "../Navigation/Navigation";
import logo from "../../assets/img/logo.png";
import LinksList from "../LinksList/LinksList";
import {ILinksItem} from "../../model/ILinksItem";

const Footer = () => {
    const links: ILinksItem[] = [
        {
            value: "Опция 1",
            href: "#"
        },
        {
            value: "Опция 2",
            href: "#"
        },
        {
            value: "Опция 3",
            href: "#"
        },
    ]
    return (
        <footer className={s.footer}>
            <div className={`container`}>
                <div className={s.footer__menu}>
                    <Navigation isVertical isLogoDisplay/>
                    <LinksList items={links}/>
                    <LinksList items={links}/>
                    <LinksList items={links}/>
                    <LinksList items={links}/>
                    <LinksList items={links}/>
                    <LinksList items={links}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;