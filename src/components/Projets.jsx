import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Importation des composants et modules Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

// Importation des styles Swiper
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// =================================================================================
// == IMPORTATION DES IMAGES ==
// =================================================================================
// Projet 1: UNIVERS DIGITAL
import univDigitalImg1 from '../assets/projects/univDigital/UNIV.jpeg';
import univDigitalImg2 from '../assets/projects/univDigital/DIG.PNG';

// Projet 2: EXOTIP-TRIP
import exotripImg1 from '../assets/projects/exotrip/1.PNG';
import exotripImg2 from '../assets/projects/exotrip/10.PNG';


// Projet 3: Mon Portfolio
import portfolioImg1 from '../assets/projects/portfolio/cvv.PNG';
import portfolioImg2 from '../assets/projects/portfolio/cvv2.PNG';
import portfolioImg4 from '../assets/projects/portfolio/cvv3.PNG';



// Projet 4: CV BUILDER
import cvBuilderImg1 from '../assets/projects/cvbuilder/bui1.PNG';
import cvBuilderImg2 from '../assets/projects/cvbuilder/bui2.PNG';
import cvBuilderImg3 from '../assets/projects/cvbuilder/bui3.PNG';

// Projet 5: PRINCE VOYAGE
import princeVoyageImg1 from '../assets/projects/princevoyage/voi1.PNG';
import princeVoyageImg2 from '../assets/projects/princevoyage/voi2.PNG';

// =================================================================================
// == DONNÉES DES PROJETS ==
// =================================================================================
const projectsData = [
  { 
    title: "UNIVERS DIGITAL", 
    description: "Site web de solutions informatiques en React, CSS, JavaScript, Mongodb, et Bootstrap.", 
    technologies: ["React", "MongoDB", "Node.js"], 
    images: [univDigitalImg1, univDigitalImg2], 
    githubLink: "#", 
    liveLink: "https://univers-digital-56vd.vercel.app/" 
  },
  { 
    title: "Galio-Student", 
    description: "Site d'inscription aux concours a Iuc .", 
    technologies: ["React js", "node js", "MongoDB"], 
    images: [exotripImg1, exotripImg2], 
    githubLink: "#", 
    liveLink: "https://students.myiuc.com/" 
  },
  { 
    title: "Mon site personnel", 
    description: "Une façon différente de me présenter à vous et de me découvrir sous d’autres aspects.", 
    technologies: ["React", "Styled-Comp.", "Framer Motion"], 
   images: [portfolioImg1, portfolioImg2, portfolioImg4],
    githubLink: "#", 
    liveLink: "#" 
  },
  { 
    title: "CV BUILDER", 
    description: "Application web permettant de créer et personnaliser des CV professionnels.", 
    technologies: ["React", "Node.js", "JAVASCRIPT"],
    images: [cvBuilderImg1, cvBuilderImg2, cvBuilderImg3], 
    githubLink: "#", 
    liveLink: "#" 
  },
  { 
    title: "PRINCE VOYAGE", 
    description: "Plateforme de réservation de voyages et de séjours touristiques.", 
    technologies: ["REACT", "Firebase", "NODE.JS"],
    images: [princeVoyageImg1, princeVoyageImg2], 
    githubLink: "#", 
    liveLink: "#" 
  },
];

// =================================================================================
// == STYLES ==
// =================================================================================
const ProjectsSection = styled.section`
  padding: 100px 5%;
  background-color: #1a1a1a;
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 4rem auto 0 auto;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;
const ProjectCard = styled(motion.div)`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  aspect-ratio: 1 / 1;
`;
const ProjectCarousel = styled.div`
  height: 50%;
  .swiper, .swiper-slide { width: 100%; height: 100%; }
  .swiper-slide {
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-pagination-bullet-active { background-color: #ff6624; }
`;
const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 50%;
`;
const CardTitle = styled.h4`
  color: #ff6624;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
const CardText = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  flex-grow: 1;
  margin-bottom: 0.5rem;
`;
const TechBadges = styled.div`
  margin-bottom: 1rem;
  span {
    background: #333; padding: 0.2rem 0.5rem; border-radius: 5px;
    margin: 0.1rem; display: inline-block; font-size: 0.7rem;
  }
`;
const CardLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const LinkButton = styled.a`
  background: #ff6624;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  &:hover { background: #e05a20; }
`;
const GithubButton = styled(LinkButton)`
  background: #333;
  &:hover { background: #444; }
`;

// =================================================================================
// == COMPOSANT REACT ==
// =================================================================================
const Projects = () => {
  return (
    <ProjectsSection id="projets">
      <h2><span>&lt;/</span> Projets <span>&gt;</span></h2>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCarousel>
              <Swiper
                modules={[EffectCube, Pagination, Autoplay]}
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 2500 + index * 500, disableOnInteraction: false }}
              >
                {project.images.map((imgSrc, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} - Screenshot ${imgIndex + 1}`} 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </ProjectCarousel>
            <CardBody>
              <CardTitle>{project.title}</CardTitle>
              <TechBadges>
                {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
              </TechBadges>
              <CardText>{project.description}</CardText>
              <CardLinks>
                <LinkButton 
                  href={project.liveLink && project.liveLink !== "#" ? project.liveLink : "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Voir le site.
                </LinkButton>

                {project.githubLink && project.githubLink !== "#" && (
                  <GithubButton 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </GithubButton>
                )}
              </CardLinks>
            </CardBody>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
