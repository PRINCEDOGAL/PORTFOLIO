

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg'; // Assurez-vous d'avoir une image ici

/**
 * Section "À propos de moi"
 * Présente une brève introduction avec une photo de profil.
 * Utilise framer-motion pour animer l'apparition des éléments.
 */

// Styles

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a; // <-- Changez ici
  min-height: 80vh;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1100px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const AboutImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #ff6624;
  box-shadow: 0 0 20px rgba(255, 102, 36, 0.5);
`;

const AboutText = styled(motion.div)`
  max-width: 600px;
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

// Animations
const imageAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const textAnimation = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
};

// Composant
const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <AboutImage 
          src={profileImage} 
          alt="Donfack Gagning"
          variants={imageAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <AboutText
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2><span>&lt;/</span> À Propos <span>&gt;</span></h2>
          <h3>Passionné par les nouvelles technologies</h3>
          <p>
            Mon parcours m'a permis de développer une grande curiosité pour le monde du numérique. 
            De l'analyse à la mise en production, j'aime participer à toutes les étapes de la création d'une solution digitale, 
            que ce soit pour le web ou le mobile.
          </p>
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default About;