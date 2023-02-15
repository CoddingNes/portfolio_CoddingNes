import React, { useState } from 'react';
import './navbar.scss';

const Navbar = (props) => {
    const [hide, setHide] = useState(false)
    const closeNavbar = () => {
        setHide(true);
        setTimeout(() => {
            props.setShowNav(false);
            setHide(false);
        },
            300);
    }

    return (
        <nav className={hide ? "home__nav-bar hide" : "home__nav-bar"}>
            <i className="home__nav-bar__close fa-solid fa-xmark"
                onClick={closeNavbar}>
            </i>
            <ul>
                <li className="home__nav-bar__nav">
                    <a href="#home" >Accueil</a>
                </li>
                <li className="home__nav-bar__nav">
                    <a href="#presentation">Présentation</a>
                </li>
                <li className="home__nav-bar__nav">
                    <a href="#skills">Compétences</a>
                </li>
                <li className="home__nav-bar__nav">
                    <a href="#realisations">Réalisations</a>
                </li>
                <li className="home__nav-bar__nav">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav >
    );
};

export default Navbar;