
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

// 1. Importez votre image de logo
import logoImage from '../assets/bobo.jpeg';

// =================================================================================
// == MODIFICATIONS DES STYLES CI-DESSOUS ==
// =================================================================================
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 5%; // Padding vertical légèrement réduit
  background-color: ${({ $scrolled }) => ($scrolled ? 'rgba(38, 35, 160, 0.9)' : 'transparent')};
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none')};
`;

// "Logo" devient un conteneur pour l'image et le texte
const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem; // Espace entre le logo et le nom
  text-decoration: none;
`;

const LogoImg = styled.img`
  height: 40px; // Hauteur fixe pour le logo
  width: auto;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

// ... Le reste des styles (NavLinks, NavLink, MobileIcon) reste identique
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column; position: fixed; top: 70px;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 60%; height: calc(100vh - 70px); background-color: rgba(17, 17, 17, 0.95);
    padding: 2rem; transition: right 0.4s ease-in-out;
  }
`;
const NavLink = styled.li`
  a {
    color: #f0f0f0; font-weight: 500; text-decoration: none;
    transition: color 0.3s ease; padding-bottom: 5px;
    border-bottom: 2px solid transparent;
    &:hover { color: #ff6624; border-bottom-color: #ff6624; }
  }
`;
const MobileIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block; font-size: 1.8rem; cursor: pointer; color: #f0f0f0;
  }
`;


// =================================================================================
// == COMPOSANT REACT ==
// =================================================================================
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ... (La logique du composant reste identique)
  const toggleMenu = () => { setIsOpen(!isOpen); };
  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth' }); }
    setIsOpen(false);
  };

  return (
    <Nav $scrolled={scrolled}>
      {/* 2. Remplacez l'ancien Logo par le nouveau LogoContainer */}
      <LogoContainer href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>
        <LogoImg src={logoImage} alt="Logo" />
        <LogoText>DONFACK GAGNING</LogoText>
      </LogoContainer>
      
      <MobileIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>

      <NavLinks $isOpen={isOpen}>
        <NavLink><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>À Propos</a></NavLink>
        <NavLink><a href="#formations" onClick={(e) => handleLinkClick(e, 'formations')}>Formations</a></NavLink>
        <NavLink><a href="#competences" onClick={(e) => handleLinkClick(e, 'competences')}>Compétences</a></NavLink>
        <NavLink><a href="#experiences" onClick={(e) => handleLinkClick(e, 'experiences')}>Expériences</a></NavLink>
        <NavLink><a href="#projets" onClick={(e) => handleLinkClick(e, 'projets')}>Projets</a></NavLink>
        <NavLink><a href="#hobbies" onClick={(e) => handleLinkClick(e, 'hobbies')}>Hobbies</a></NavLink>
        <NavLink><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Me Contacter</a></NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
