import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg';


export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <a className="header__logo" href="/">
                        <img src={logo} alt=""/>
                    </a>
                    <div className="header__content">
                        <div className="header__content-block">
                            <a className="header__item" href="settings.html">
                                <p className="header__item-description link_dark">Новости</p>
                            </a>
                            <a href="/" className="header__item">
                                <p className="header__item-description link_dark">Вход</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}