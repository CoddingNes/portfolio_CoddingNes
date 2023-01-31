import React from 'react';
import header_background from "./Switched_pitting_usb_key_text4_whiteback.png";

const Home = () => {
    return (
        <header id="home">
            <h1 className="home__title">Alexandra <br />Développeuse Web</h1>
            <img className="home__banner" src={header_background}
                alt="Clé USB 3D libérant des logos relatifs au développement" />
            <button className="home__menu-button"><i className="fa-solid fa-bars"></i></button>
            <nav className="home__nav-bar">
                <ul>
                    <li className="home__nav-bar__nav">
                        <a href="#home">Accueil</a>
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
        </header>
    );
};

export default Home;