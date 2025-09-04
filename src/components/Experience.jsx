// src/components/Experience.jsx

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; // Icônes

// =================================================================================
// == GÉREZ VOS EXPÉRIENCES ICI. Ajoutez/modifiez les 4 expériences. ==
// =================================================================================
const experiencesData = [
  {
    id: 1,
    number: "01",
    role: "Développeur Full Stack",
    company: "SOFWIFY.",
    location: "douala, cameroun",
    period: "2024 - ",
    technologies: ["React", "Node.js",  "MongoDB","Git" ,"HTML","CSS","php-mysql"],
    details: [
      "Développement de nouvelles fonctionnalités pour la plateforme principale.",
      "Maintenance et optimisation de la base de données.",
      "Collaboration avec les équipes de design pour créer des interfaces utilisateur intuitives."
    ]
  },
  {
    id: 2,
    number: "02",
    role: "Développeur Web",
    company: "AMT SYSTEMS ENGINEERING",
    location: "Douala, Cameroun",
    period: "2023 - 2024",
    technologies: [, "PHP", "MySQL", "JavaScript", "Bootstrap","react","git" , "HTML","CSS"],
    details: [
      "Conception et développement d'applications web sur mesure pour divers clients.",
      "Participation à la phase de spécification des besoins.",
      "Développement de l'API REST pour une application mobile."
    ]
  },
  {
    id: 3,
    number: "03",
    role: "Développeur Front-End",
    company: "APPFABRIK",
    location: "Douala, Cameroun",
    period: "2024 - 2025",
    technologies: ["HTML", "CSS", "JavaScript", "firebase", "Git", "react"],
    details: [
      "Intégration de maquettes graphiques en pages web responsives.",
      "Optimisation des performances de chargement des pages.",
      "Maintenance de sites web existants."
    ]
  },
  {
    id: 4,
    number: "04",
    role: "Stage Développeur",
    company: "IUC de douala",
    location: "Douala, Cameroun",
    period: "2025"- "present",
    technologies: ["React", "PHP", "CSS","javaSript","HTML", "Git", "react-native"],
    details: [
      "développeur sur le site Galio Student de IUC.",
      "mise a jour de la plateforme de IUC.",
      "Apprentissage des bonnes pratiques du développement web en agence."
      
    ]
  }
];

// =================================================================================
// == STYLES (Animations des bordures, cartes, modale) ==
// =================================================================================
// Animations des bordures (traduites de votre CSS)
const animate1 = keyframes`0% { transform: translateX(-100%); } 100% { transform: translateX(100%); }`;
const animate2 = keyframes`0% { transform: translateY(-100%); } 100% { transform: translateY(100%); }`;
const animate3 = keyframes`0% { transform: translateX(100%); } 100% { transform: translateX(-100%); }`;
const animate4 = keyframes`0% { transform: translateY(100%); } 100% { transform: translateY(-100%); }`;

const ExperienceSection = styled.section`
  background-color: #111111; // <-- Changez ici
  padding: 100px 5%;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 4rem;
  justify-items: center;
  margin-top: 3rem;
`;

const Card = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 500px; // Hauteur augmentée pour le contenu additionnel
  background: #06363fff;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const BorderSpan = styled.span`
  transition: 0.5s;
  opacity: 0;
  ${Card}:hover & { opacity: 1; }

  &:nth-child(1) { position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(to right, transparent, #ff6624); animation: ${animate1} 2s linear infinite; }
  &:nth-child(2) { position: absolute; top: 0; right: 0; width: 3px; height: 100%; background: linear-gradient(to bottom, transparent, #ff6624); animation: ${animate2} 2s linear infinite; animation-delay: 1s; }
  &:nth-child(3) { position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(to left, transparent, #ff6624); animation: ${animate3} 2s linear infinite; }
  &:nth-child(4) { position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: linear-gradient(to top, transparent, #ff6624); animation: ${animate4} 2s linear infinite; animation-delay: 1s; }
`;

const CardContent = styled.div`
  text-align: center;
  h2 { font-size: 4em; font-weight: 800; color: #ff6624; opacity: 0.1; transition: 0.5s; }
  h3 { font-size: 1.5em; letter-spacing: 1px; margin-top: -40px; } // Positionné pour monter au survol
  p { font-size: 1em; font-weight: 300; }
  ${Card}:hover & h2 { opacity: 1; transform: translateY(-50px); }
`;

const CardFooter = styled.div`
  // Styles pour les icônes, badges, et le bouton
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
  text-align: center;
  div { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
  svg { color: #ff6624; font-size: 1.2rem; }
`;

const TechList = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  span {
    background: #2b05d8ff;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    margin: 0.2rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`;

const MoreButton = styled.button`
  background: #ff6624;
  color: #fff;
  border: none;
  padding: 10px 20px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover { background: #e05a20; }
`;

// Styles pour la Modale
const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContent = styled(motion.div)`
  background: #222;
  padding: 2rem 3rem;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  border: 1px solid #ff6624;
  h3 { color: #ff6624; margin-bottom: 1rem; }
  ul { list-style: none; padding-left: 0; }
  li { margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative; }
  li::before { content: '✓'; color: #ff6624; position: absolute; left: 0; }
`;

// =================================================================================
// == COMPOSANT REACT (Avec la logique de la modale) ==
// =================================================================================
const Experience = () => {
  // État pour savoir quelle modale est ouverte. 'null' signifie qu'aucune n'est ouverte.
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Fonction pour ouvrir la modale
  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <ExperienceSection id="experiences">
      <h2><span>&lt;/</span> Mes Expériences <span>&gt;</span></h2>
      <ExperienceGrid>
        {experiencesData.map((exp) => (
          <Card key={exp.id}>
            <BorderSpan /><BorderSpan /><BorderSpan /><BorderSpan />
            <CardContent>
              <h2>{exp.number}</h2>
              <h3>{exp.role}</h3>
              <p>{exp.company}</p>
            </CardContent>
            <CardFooter>
              <InfoRow>
                <div><FaBuilding /><small>{exp.company}</small></div>
                <div><FaMapMarkerAlt /><small>{exp.location}</small></div>
                <div><FaCalendarAlt /><small>{exp.period}</small></div>
              </InfoRow>
              <TechList>
                {exp.technologies.slice(0, 5).map(tech => <span key={tech}>{tech}</span>)}
              </TechList>
              <MoreButton onClick={() => openModal(exp)}>
                En savoir plus
              </MoreButton>
            </CardFooter>
          </Card>
        ))}
      </ExperienceGrid>

      {/* Affiche la modale uniquement si une expérience est sélectionnée */}
      {selectedExperience && (
        <ModalBackdrop
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur la modale elle-même
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h3>{selectedExperience.role} - {selectedExperience.company}</h3>
            <ul>
              {selectedExperience.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </ModalContent>
        </ModalBackdrop>
      )}
    </ExperienceSection>
  );
};

export default Experience;