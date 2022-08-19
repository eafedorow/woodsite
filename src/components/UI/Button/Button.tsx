import React from 'react';
import s from './Button.module.scss'

interface ButtonProps {
    children: React.ReactNode
}

const Button = ({children}: ButtonProps) => {
    return (
        <button className={s.button}>
            {children}
        </button>
    );
};

export default Button;