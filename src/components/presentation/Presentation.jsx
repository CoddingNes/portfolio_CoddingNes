import React from 'react';

const Presentation = () => {
    return (
        <>
            <p>Je suis <a className='presentation__link' href="Portrait.JPG">Alexandra NICOLAS aka CoddingNes</a>.</p>
            <p><a className='presentation__link' href="CV web developpeur.pdf">Développeuse web</a> pour la création de sites vitrines ou applications
                web selon cahier des
                charges, intégration de maquettes ou création intégrale jusqu'à la mise en ligne.</p>
            <p>Je me passionne particulièrement pour le <a className='presentation__link'
                href="https://openclassrooms.com/fr/courses/6817086-decouvrez-les-metiers-de-developpeur/6954234-identifiez-les-activites-d-un-developpeur-front-end">front-end</a> et l'expérience utilisateur (UI/UX,
                accessibilité, responsive design, intégration 3D).</p>

        </>
    );
};

export default Presentation;