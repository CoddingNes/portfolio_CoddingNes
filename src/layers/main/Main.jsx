import React from 'react';
import Form from '../../components/form/Form';
import Presentation from '../../components/presentation/Presentation';
import Realisations from '../../components/realisations/Realisations';
import Sections from '../../components/sections/Sections';
import Skills from '../../components/skills/Skills';

const Main = () => {
    return (
        <main>
            <Sections title="Présentation" subtitle="PRESENTATION" content={<Presentation />} id="presentation" />
            <Sections title="Compétences" subtitle="COMPETENCES" content={<Skills />} id="skills" />
            <Sections title="Réalisations" subtitle="REALISATIONS" content={<Realisations />} id="realisations" />
            <Sections title="Contact" subtitle="CONTACT" content={<Form />} id="contact" />
        </main>
    );
};

export default Main;