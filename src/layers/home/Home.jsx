import React, { useEffect, useState } from 'react';
import header_background from "./Switched_pitting_usb_key_text4_whiteback.png";
import './home.scss';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    const [showNav, setShowNav] = useState(false);

    const setNavbarDisplay = () => {
        if (window.innerWidth >= 768) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }

    useEffect(() => {
        setNavbarDisplay()
    }, [])

    window.addEventListener('resize', setNavbarDisplay)

    return (
        <header id="home" className={showNav ? 'shadow' : ''}>
            <h1 className="home__title">Alexandra <br />Développeuse Web</h1>
            <img className="home__banner" src={header_background}
                alt="Clé USB 3D libérant des logos relatifs au développement" />
            {showNav ?
                <Navbar showNav={showNav} setShowNav={setShowNav} /> :
                <button className="home__menu-button" aria-label='Menu' onClick={() => { setShowNav(true) }}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            }


        </header>
    );
};

export default Home;