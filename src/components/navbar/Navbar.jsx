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

    const banner = document.querySelector('.home__banner');
    const [stickyNavbar, setStickyNavbar] = useState(false)

    const changeNavbarDisplay = () => {
        if (window.scrollY >= banner.offsetHeight) {
            setStickyNavbar(true);
        } else {
            setStickyNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbarDisplay)

    return (
        <nav className={'home__nav-bar' + (stickyNavbar ? ' sticky' : '') + (hide ? " hide" : "")}>
            <i className="home__nav-bar__close fa-solid fa-xmark"
                onClick={closeNavbar}>
            </i>
            <ul className='home__nav-menu'>
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
                <li className="home__nav-bar__nav">
                    <input type='checkbox' id='dark-light-mode' />
                    <label htmlFor='dark-light-mode'></label>
                </li>
            </ul>
        </nav >
    );
};

export default Navbar;