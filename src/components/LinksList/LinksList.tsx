import React from 'react';
import {ILinksItem} from "../../model/ILinksItem";
import s from './LinksList.module.scss'

interface LinksListProps {
    items: ILinksItem[];
}

const LinksList = ({items}: LinksListProps) => {
    return (
        <ul className={s.ul}>
            {items.map((item) => (
                <li className={s.li}>
                    <a className={s.link} href={item.href}>{item.value}</a>
                </li>
            ))}
        </ul>
    );
};

export default LinksList;