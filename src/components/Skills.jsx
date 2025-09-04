
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Imports de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Imports des icônes depuis la bibliothèque
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPhp, FaBootstrap, FaAngular, FaReact, 
  FaJava, FaPython, FaGitAlt, FaGithub, FaJira, FaTrello, FaTasks 
} from 'react-icons/fa';
import { SiC, SiCplusplus, SiMysql, SiZoho } from 'react-icons/si';

// Données des compétences (avec des composants icônes)
const skillsData = [
    { 
      category: "Web", 
      skills: [ 
        { name: "HTML5", IconComponent: FaHtml5, color: "#E34F26" },
        { name: "CSS3", IconComponent: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", IconComponent: FaJsSquare, color: "#F7DF1E" }, 
        { name: "Node.js", IconComponent: FaNodeJs, color: "#339933" }, 
        { name: "PHP", IconComponent: FaPhp, color: "#777BB4" }, 
        { name: "Bootstrap", IconComponent: FaBootstrap, color: "#7952B3" }, 
        { name: "Angular", IconComponent: FaAngular, color: "#DD0031" }, 
        { name: "React", IconComponent: FaReact, color: "#61DAFB" } 
      ] 
    },
    { 
      category: "Software", 
      skills: [ 
        { name: "C", IconComponent: SiC, color: "#A8B9CC" }, 
        { name: "C++", IconComponent: SiCplusplus, color: "#00599C" }, 
        { name: "Java", IconComponent: FaJava, color: "#f89820" }, 
        { name: "Python", IconComponent: FaPython, color: "#3776AB" } 
      ] 
    },
    { 
      category: "Serveurs & Outils", 
      skills: [ 
        { name: "Git", IconComponent: FaGitAlt, color: "#F05032" }, 
        { name: "GitHub", IconComponent: FaGithub, color: "#181717" }, // Sera stylé différemment
        { name: "MySQL", IconComponent: SiMysql, color: "#4479A1" } 
      ] 
    },
    { 
      category: "Scrum & Agile", 
      skills: [ 
        { name: "Scrum", IconComponent: FaTasks, color: "#0091D5" }, 
        { name: "Zoho", IconComponent: SiZoho, color: "#E42526" } 
      ] 
    },
    { 
      category: "Travail en Équipe", 
      skills: [ 
        { name: "Jira", IconComponent: FaJira, color: "#0052CC" }, 
        { name: "Trello", IconComponent: FaTrello, color: "#0079BF" } 
      ] 
    }
];

// =================================================================================
// == STYLES ==
// =================================================================================
const SkillsSection = styled.section`
  padding: 100px 0;
   background-color: #1a1a1a;
  .swiper-pagination-bullet { background-color: #f0f0f0; width: 10px; height: 10px; }
  .swiper-pagination-bullet-active { background-color: #00bfff; } // Assorti au bleu
`;

const SkillSlide = styled(motion.div)`
  background: radial-gradient(circle, #1a2a45, #0d1b2a);
  border-radius: 15px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 350px;
  border: 2px solid #00bfff;
  box-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px #00f6ff, 0 0 40px #00f6ff;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 2rem;
  text-shadow: 0 0 5px #00bfff;
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  // La couleur est maintenant passée en prop, avec une couleur par défaut
  color: ${props => props.color || '#f0f0f0'};
  
  // L'icône change de couleur au survol de l'item
  &:hover {
    color: #fff;
  }
`;

const SkillIcon = styled.div`
  font-size: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  // L'icône grandit au survol de l'item
  ${SkillItem}:hover & {
    transform: scale(1.2);
  }
`;

const SkillName = styled.p`
  font-size: 0.9rem;
  color: #f0f0f0;
  text-align: center;
`;
// =================================================================================
// == COMPOSANT REACT ==
// =================================================================================
const Skills = () => {
  return (
    <SkillsSection id="competences">
      <h2><span>&lt;/</span> Mes compétences <span>&gt;</span></h2>
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        pagination={{ clickable: true }}
        style={{ padding: '2rem 0' }}
      >
        {skillsData.map((categoryData, index) => (
          <SwiperSlide key={categoryData.category} style={{ width: '450px' }}>
            <SkillSlide
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryTitle>{categoryData.category}</CategoryTitle>
              <IconsGrid>
                {categoryData.skills.map((skill, skillIndex) => (
                  <SkillItem 
                    key={skill.name}
                    color={skill.color} // Passe la couleur officielle à l'icône
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + skillIndex * 0.1 }}
                  >
                    <SkillIcon>
                      <skill.IconComponent />
                    </SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </IconsGrid>
            </SkillSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SkillsSection>
  );
};

export default Skills;