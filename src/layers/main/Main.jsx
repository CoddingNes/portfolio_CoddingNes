import React from 'react';
import Presentation from '../../components/presentation/Presentation';
import Sections from '../../components/sections/Sections';

const Main = () => {
    return (
        <main>
            <Sections title="Présentation" subtitle="PRESENTATION" content={<Presentation />} />
            <Sections title="Compétences" subtitle="COMPETENCES" content={"truc"} />
            <Sections title="Réalisations" subtitle="REALISATIONS" content={"truc"} />
            <Sections title="Contact" subtitle="CONTACT" content={"truc"} />
        </main>
    );
};

export default Main;