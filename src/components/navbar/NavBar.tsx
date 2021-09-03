import "./navBar.css";
import React from "react";

import { NavLink } from "react-router-dom";
// import {  } from 'styled-components';

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import styled from "styled-components";
import { colors, rounded } from "../../theme/global";
import { LogoSVG } from "../../assets/img/LogoSVG";
import { navItems } from '../../db/navItems';

interface Props {
    theme?: "pink" | "white";
    footer?: boolean;
}

export const NavBar = ({ theme = "white", footer = false }: Props) => {
    const MenuDiv = styled.div`
        width: 100%;
        background-color: inherit;
        --height-nav: 70px;
        overflow: hidden;
    `;

    const MenuContainer = styled.div`
        background-color: ${theme === "pink" ? colors.pink : colors.white};
        color: ${theme === "pink" ? colors.white : colors.black};
        /* border-radius: ${rounded.round3}; */
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        padding-bottom: 0;
        padding-top: 30px;
        border-radius: 18px 18px 0 0;

        @media only screen and (max-width: 500px){
            padding-top: 0 ;
            padding:0 10px;
            justify-content: center;
        }
    `;

    return (
        <MenuDiv className="menu">
            <MenuContainer className="menu__container container">
                {   !footer &&
                    (<div className="menu__bar">
                        <div>
                            <LogoSVG
                                color={
                                    theme === "pink"
                                        ? colors.white
                                        : colors.black
                                }
                            />
                            <h2 className="menu__title"> Clay Shop</h2>
                        </div>
                        <BiMenuAltRight className="menu__icon menu__hamburguer" />
                        <div className="menu__social">
                            <FaInstagram className="menu__icon" />
                            <FaTwitter className="menu__icon" />
                            <FaFacebookF className="menu__icon" />
                        </div>
                        <div className="menu__searchAndCart">
                            <AiOutlineShopping className="menu__icon" />
                            <AiOutlineSearch className="menu__icon" />
                        </div>
                    </div>)
                }
                <nav className="nav">
                    <ul className="menu__navigation">
                        {
                            navItems.map(navItem => (
                                <li className="menu__item">
                                    <NavLink exact to={navItem.link} className="menu__link" activeClassName={footer ? 'menu__link--footer' : 'menu__link--active'}>
                                        {navItem.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </MenuContainer>
        </MenuDiv>
    );
};
