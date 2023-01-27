import React from 'react';
import header_background from "./Switched_pitting_usb_key_text4_whiteback.png";

const Home = () => {
    return (
        <header>
            <h1 class="home__title">Alexandra <br />Développeuse Web</h1>
            <img class="home__banner" src={header_background}
                alt="Clé USB 3D libérant des logos relatifs au développement" />
            <button class="home__menu-button"><i class="fa-solid fa-bars"></i></button>
            <nav class="home__nav-bar">
                <ul>
                    <li class="home__nav-bar__nav">
                        <a href="#home">Accueil</a>
                    </li>
                    <li class="home__nav-bar__nav">
                        <a href="#presentation">Présentation</a>
                    </li>
                    <li class="home__nav-bar__nav">
                        <a href="#skills">Compétences</a>
                    </li>
                    <li class="home__nav-bar__nav">
                        <a href="#realisations">Réalisations</a>
                    </li>
                    <li class="home__nav-bar__nav">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Home;