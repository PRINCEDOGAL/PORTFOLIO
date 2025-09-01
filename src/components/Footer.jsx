
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// 1. Importez votre logo
import logoImage from '../assets/bobo.jpeg'; // Assurez-vous que le nom du fichier est correct

// =================================================================================
// == STYLES ==
// =================================================================================
const FooterContainer = styled.footer`
  padding: 3rem 5%;
  background-color: #0d0844ff; // Un fond légèrement plus clair pour le distinguer
  text-align: center;
  border-top: 1px solid #333;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImg = styled.img`
  width: 60px; // Ajustez la taille selon votre logo
  height: 60px;
`;

const LogoName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: #f0f0f0;
    font-size: 2rem;
  }
`;

const CopyrightText = styled.p`
  color: #888;
  font-size: 0.9rem;
  margin-top: 1rem; // Ajoute un peu d'espace au-dessus
`;

// =================================================================================
// == COMPOSANT REACT ==
// =================================================================================
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo et Nom */}
        <LogoContainer>
          <LogoImg src={logoImage} alt="Logo Donfack Gagning" />
          <LogoName>DONFACK GAGNING LE PRINCE</LogoName>
        </LogoContainer>

        {/* Liens Réseaux Sociaux */}
        <SocialLinks>
          <motion.a 
            href="https://github.com" // Mettez votre lien GitHub ici
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#ff6624' }}
            title="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" // Mettez votre lien LinkedIn ici
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#ff6624' }}
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
        </SocialLinks>

        {/* Copyright */}
        <CopyrightText>
          &copy; {new Date().getFullYear()} DONFACK GAGNING LE PRINCE. Tous droits réservés.
        </CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;