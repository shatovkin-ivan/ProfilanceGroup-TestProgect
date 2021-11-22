import React from "react";
import './LoginPopup.scss';

export default function LoginPopup() {
    return (
        <article className="authorization__card card"> 
            <form className="authorization__form" method="POST">
                <fieldset className="authorization__form-wrap">
                    <legend className="authorization__tabs-item">Вход</legend>
                    <ul className="authorization__form-list"> 
                        <li className="authorization__form-item"> 
                            <label className="authorization__form-label" for="">
                                Логин
                            </label>
                            <div className="authorization__form-input input-wrap"> 
                                <input className="input" type="text"/>
                            </div>
                        </li>
                        <li className="authorization__form-item"> 
                            <label className="authorization__form-label" for="">
                                Пароль
                            </label>
                            <div className="authorization__form-input input-wrap">
                                <input className="input" type="password"/>
                                <button className="toggle-password" type="button">
                                    <svg className="toggle-password__icon open">
                                        <use href="../../images/sprites.svg#view-open"></use>
                                    </svg>
                                    <svg className="toggle-password__icon close">
                                        <use href="../../images/sprites.svg#view-close"></use>
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                    <button className="btn type-1 authorization__form-btn" type="submit">
                        Войти
                    </button>
                    <a className="authorization__form-link" href="/">
                        Забыли пароль?
                    </a>
                </fieldset>
            </form>
        </article>
    ) 
}