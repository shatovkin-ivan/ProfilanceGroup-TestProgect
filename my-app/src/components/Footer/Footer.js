import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer__list">
                    <li className="footer__item">
                        <a className="footer__link" href="tel:+74752000000">+ 7(4752) 00-00-00</a>
                    </li>
                    <li className="footer__item">
                        <address className="footer__address">г. Тамбов, ул. Агапкина 17а, оф. 113</address>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="mailto:tekhservis@mail.ru">tekhservis@mail.ru</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}