import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import '../wrapComponents/LoginPopupWrap';
import logo from '../../images/logo.svg';

const Header = ({active, setActive}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <Link className="header__logo" to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    <div className="header__content">
                        <div className="header__content-block">
                            <Link className="header__item link_dark" to="/news">Новости</Link>
                            <a href="void(0)" className="header__item link_dark" onClick={() => setActive(true)}>
                                Вход
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header