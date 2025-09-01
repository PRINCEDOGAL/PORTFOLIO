// src/components/Hobbies.jsx

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// 1. Importez les icônes spécifiques dont vous avez besoin depuis react-icons
import { 
  FaFootballBall, 
  FaDumbbell, 
  FaMusic, // FaDrum n'est pas idéal, FaMusic est mieux pour "Dancing"
  FaUtensils, 
  FaGamepad, 
  FaPlane 
} from 'react-icons/fa';


// =================================================================================
// == GÉREZ VOS HOBBIES ICI. Ajoutez/modifiez les éléments pour mettre à jour. ==
// =================================================================================
const hobbiesData = [
  {
    name: "Football",
    icon: <FaFootballBall />,
    color: "#e63946" // Couleur rouge
  },
  {
    name: "Cinéma",
    icon: <FaDumbbell />,
    color: "#457b9d" // Couleur indigo
  },
  {
    name: "Danse",
    icon: <FaMusic />,
    color: "#00b4d8" // Couleur cyan
  },
  {
    name: "Cuisine",
    icon: <FaUtensils />,
    color: "#2a9d8f" // Couleur verte
  },
  {
    name: "Jeux Vidéo",
    icon: <FaGamepad />,
    color: "#008080" // Couleur teal
  },
  {
    name: "Voyages",
    icon: <FaPlane />,
    color: "#6a0dad" // Couleur violette
  },
];

// =================================================================================
// == STYLES (Améliorés avec des animations) ==
// =================================================================================
const HobbiesSection = styled.section`
  padding: 100px 5%;
  background-color: #111111;
`;

const HobbiesGrid = styled.div`
  display: grid;
  // Grille responsive qui s'adapte à la taille de l'écran
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto 0 auto;
`;

const HobbyCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  border: 1px solid #333;
  // Bordure inférieure colorée pour un style subtil
  border-bottom: 4px solid ${props => props.color};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }
`;

const HobbyIcon = styled.div`
  // L'icône hérite de la couleur passée en prop à la carte
  color: ${props => props.color}; 
  font-size: 3.5rem; // 3x de Font Awesome correspond environ à cette taille
  margin-bottom: 1.5rem;
`;

const HobbyName = styled.h4`
  font-weight: bold;
  font-size: 1.3rem;
  color: #fff;
`;

// Animation pour l'apparition des cartes
const cardAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


// =================================================================================
// == COMPOSANT REACT ==
// =================================================================================
const Hobbies = () => {
  return (
    <HobbiesSection id="hobbies">
      <h2><span>&lt;/</span> Mes Hobbies <span>&gt;</span></h2>
      <HobbiesGrid>
        {hobbiesData.map((hobby, index) => (
          <HobbyCard
            key={hobby.name}
            color={hobby.color} // Passe la couleur au composant stylé
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible" // L'animation se déclenche quand la carte est visible
            viewport={{ once: true }}
            // Effet d'apparition en cascade
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <HobbyIcon color={hobby.color}>
              {hobby.icon}
            </HobbyIcon>
            <HobbyName>{hobby.name}</HobbyName>
          </HobbyCard>
        ))}
      </HobbiesGrid>
    </HobbiesSection>
  );
};

export default Hobbies;