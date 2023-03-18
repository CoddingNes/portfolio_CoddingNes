import React from 'react';
import Form from '../../components/form/Form';
import Presentation from '../../components/presentation/Presentation';
import Realisations from '../../components/realisations/Realisations';
import Sections from '../../components/sections/Sections';
import SkillChoicePanel from '../../components/skillChoicePanel/SkillChoicePanel';
import './main.scss';


const Main = () => {
    return (
        <main>
            <Sections title="Présentation" subtitle="PRESENTATION" content={<Presentation />} id="presentation" />
            <Sections title="Compétences" subtitle="COMPETENCES" content={<SkillChoicePanel />} id="skills" />
            <Sections title="Réalisations" subtitle="REALISATIONS" content={<Realisations />} id="realisations" />
            <Sections title="Contact" subtitle="CONTACT" content={<Form />} id="contact" />
        </main>
    );
};

export default Main;