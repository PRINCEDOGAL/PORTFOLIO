
import React from 'react';
import styled, { keyframes, css } from 'styled-components'; // Importez 'css'
import { motion } from 'framer-motion';

import bgVideo from '../assets/code2.mp4';
import cvFile from '../assets/CV4.pdf';

// === ANIMATIONS KEYFRAMES (inchangées) ===
const textRevealBox = keyframes` /* ... */ 50% { width: 100%; left: 0; } 100% { width: 0; left: 100%; }`;
const textReveal = keyframes` /* ... */ 100% { color: white; }`;
const textRevealName = keyframes` /* ... */ 100% { color: #ff6624; font-weight: 500; }`;

// === STYLES (MODIFIÉS) ===
const AnimatedH1 = styled.h1`
  display: block;
  width: fit-content;
  font-size: 4rem;
  position: relative;
  color: transparent;
  
  // Applique les animations en utilisant les props préfixées par $
  animation: ${textReveal} 1s ease forwards;
  animation-delay: ${props => props.$delay || '0s'};

  // Condition pour changer l'animation du nom
  ${props => props.$isName && css`
    animation-name: ${textRevealName};
  `}

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #ff6624;
    animation: ${textRevealBox} 1s ease;
    animation-delay: ${props => props.$spanDelay || '0s'};
  }
`;
// ... Le reste des styles est inchangé
const HeroSection = styled.section` height: 100vh; width: 100%; display: flex; align-items: center; justify-content: flex-start; position: relative; overflow: hidden; `;
const VideoBackground = styled.video` position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; z-index: -2; transform: translateX(-50%) translateY(-50%); object-fit: cover; `;
const Overlay = styled.div` position: absolute; top: 0; left: 0; height: 100%; width: 100%; background-color: black; opacity: .7; z-index: -1; `;
const HeroContent = styled(motion.div)` max-width: 1200px; margin: 0 auto; padding: 0 50px; `;
const CTAButton = styled(motion.a)` display: inline-block; padding: 10px 20px; color: white; background-color: transparent; border: 2px solid #ff6624; font-size: 20px; text-transform: uppercase; letter-spacing: .1rem; margin-top: 30px; text-decoration: none; transition: .3s ease; &:hover { color: white; background-color: #ff6624; } `;

// === COMPOSANT REACT (MODIFIÉ) ===
const Hero = () => {
  return (
    <HeroSection id="hero">
      <VideoBackground autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </VideoBackground>
      <Overlay />
      <HeroContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          {/* On utilise les props préfixées par $ */}
          <AnimatedH1 $delay="1.5s" $spanDelay="1s">
            Hello, <span></span>
          </AnimatedH1>
          <AnimatedH1 $delay="2.5s" $spanDelay="2s">
            My name is <span></span>
          </AnimatedH1>
          {/* On ajoute une prop $isName pour changer l'animation */}
          <AnimatedH1 $delay="3.5s" $spanDelay="3s" $isName>
            DONFACK GAGNING LE PRINCE <span></span>
          </AnimatedH1>
          <CTAButton
            href={cvFile}
            download="CV_DONFACK_GAGNING.pdf"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            Télécharger mon CV
          </CTAButton>
        </div>
      </HeroContent>
    </HeroSection>
  );
};
export default Hero;