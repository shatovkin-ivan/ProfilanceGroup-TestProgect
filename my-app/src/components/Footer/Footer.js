import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer__list">
                    <li className="footer__item">
                        <a className="footer__link" href="tel:+74752000000">+ 7(4752) 00-00-00</a>
                    </li>
                    <li className="footer__item">
                        <address className="footer__address">г. Тамбов, ул. Билли Харрингтона 6, оф. 42</address>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="mailto:tekhservis@mail.ru">text@mail.ru</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer