import React from 'react';
import footer_background from "./Background_white.png";

const Footer = () => {
    return (
        <footer>
            <img src={footer_background} alt="dégradé de couleurs bleu à blanc" />
            <div className="footer__links">
                <a href="https://github.com/CoddingNes?tab=repositories"><i className="fa-brands fa-github"></i></a>
                <a href="mailto:axela.n@wanadoo.fr"><i className="fa-sharp fa-solid fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/alexandra-n-95258390/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <p>©2023 Alexandra NICOLAS aka CoddingNes, tous droits réservés.</p>
        </footer>
    );
};

export default Footer;