import React from "react";
import "./footerstyles.css";
import { LogoSVG } from "../../assets/img/LogoSVG";
import { SocialIcons } from '../custom/SocialIcons';
import { Link } from "react-router-dom";
import { NavBar } from '../navbar/NavBar';

export const Footer = () => {
    return (
        <footer className="footer container">
            <NavBar footer />
            <div className="footer__container">
                <div className="footer__description">
                    <div>
                        <LogoSVG/>
                        <h2 className="footer__title">Clay Shop</h2>
                    </div>
                    <p className="paragraph">
                        Fashion is a popular aesthetic expression at a particular
                        time, place and in a specific context, especially in
                        clothing, footwear, lifestyle, accessories, makeup.
                    </p>
                </div>
                <div className="footer__links">
                    <h2 className="footer__title">Hot links</h2>
                    <ul className="footer_list">
                        <li className="footer__li"><Link to="/" className="footer__link">Home</Link></li>
                        <li className="footer__li"><Link to="/shop" className="footer__link">Shop</Link></li>
                        <li className="footer__li"><Link to="/blog" className="footer__link">Blog</Link></li>
                        <li className="footer__li"><Link to="/contact" className="footer__link">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer__info">
                    <h2 className="footer__title">More info</h2>
                    <ul className="footer_list">
                        <li className="footer__li"><a href="https://www.google.com" target="_blank" className="footer__link">How it works</a></li>
                        <li className="footer__li"><a href="https://www.google.com" target="_blank" className="footer__link">About us</a></li>
                        <li className="footer__li"><a href="https://www.google.com" target="_blank" className="footer__link">Decline rules</a></li>
                        <li className="footer__li"><a href="https://www.google.com" target="_blank" className="footer__link">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer__customer">
                    <h2 className="footer__title">Customer care</h2>
                    <ul className="footer_list">
                        <li className="footer__li"><a href="https://www.google.com" target="_blank" className="footer__link">FAQ</a></li>
                        <li className="footer__li"><a href="https://www.google.com" target="_blank" className="footer__link">Terms of use</a></li>
                        <li className="footer__li"><a href="https://www.google.com" target="_blank" className="footer__link">Privacy Policy</a></li>
                        <li className="footer__li"><a href="https://www.google.com" target="_blank" className="footer__link">Discount system</a></li>
                    </ul>
                </div>
            </div>
            <div className="copy">
                <div className="copy__container">
                    <p className="copy__text">&copy; Clay Shop all right reserved</p>
                    <div className="copy__icons">
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </footer>
    );
};
