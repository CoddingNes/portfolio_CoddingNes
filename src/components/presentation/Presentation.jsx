import React from 'react';
import './presentation.scss';


const Presentation = () => {
    return (
        <div className='presentation__content'>
            <p>Je suis <a className='presentation__link' href="Portrait.JPG">Alexandra NICOLAS aka CoddingNes</a>.</p>
            <p><a className='presentation__link' href="CVDeveloppeurWeb.pdf">Développeuse web</a> pour la création de sites vitrines ou applications
                web selon cahier des
                charges, intégration de maquettes ou création intégrale jusqu'à la mise en ligne.
            </p>
            <p>Je me passionne particulièrement pour le <a className='presentation__link'
                href="https://www.hellowork.com/fr-fr/metiers/developpeur-front-end.html">front-end</a> et l'expérience utilisateur (UI/UX,
                accessibilité, responsive design, intégration 3D).
            </p>
        </div>
    );
};

export default Presentation;