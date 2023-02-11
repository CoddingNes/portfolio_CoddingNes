import React from 'react';
import './navbar.scss';

const Navbar = (props) => {
    return (
        <nav className="home__nav-bar">
            <i className="home__nav-bar__close fa-regular fa-rectangle-xmark" onClick={() => props.setShowNav(false)}></i>
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
        </nav>
    );
};

export default Navbar;