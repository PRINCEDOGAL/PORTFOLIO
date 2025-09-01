
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'; // <-- 1. Importez createGlobalStyle

// Importez vos composants
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Formations from './components/Formations.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projets.jsx';
import Hobbies from './components/Hobbies.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// =================================================================================
// == 2. DÉFINITION DES STYLES GLOBAUX ==
// =================================================================================
const GlobalStyle = createGlobalStyle`
  /* Réinitialisation de base */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Style de base pour toute la page */
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #111111; // <-- FOND PRINCIPAL SOMBRE
    color: #f0f0f0;
    line-height: 1.6;
  }
  
  /* Pour un défilement fluide quand on clique sur les liens de la navbar */
  html {
    scroll-behavior: smooth;
  }

  /* Style de base pour les titres de section */
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    span {
      color: #ff6624; // La couleur orange signature
    }
  }

  a {
    color: #ff6624;
    text-decoration: none;
  }
`;
// =================================================================================


const MainContainer = styled.main``;

function App() {
  return (
    <>
      <GlobalStyle /> {/* <-- 3. AJOUTEZ CETTE BALISE ICI */}
      <Navbar />
      <MainContainer>
        <Hero />
        <About />
        <Formations />
        <Skills />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
