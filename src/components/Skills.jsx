
import React from 'react';
import styled from 'styled-components';

// Imports de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//Imports des images (avec html et css en commentaire)
import htmlIcon from '../assets/skills/icone-html.png';
import cssIcon from '../assets/skills/icone-css.svg';
import jsIcon from '../assets/skills/js.png';
import nodeIcon from '../assets/skills/nod.png';
import phpIcon from '../assets/skills/php.png';
import bootstrapIcon from '../assets/skills/bootstrap.png';
import angularIcon from '../assets/skills/angu.png';
import reactIcon from '../assets/skills/react.png';
import cIcon from '../assets/skills/c.png';
import cplusIcon from '../assets/skills/cplus.png';
import javaIcon from '../assets/skills/java.png';
import pythonIcon from '../assets/skills/python.png';
import gitIcon from '../assets/skills/git.png';
import githubIcon from '../assets/skills/github.png';
import mysqlIcon from '../assets/skills/mysql.png';
import scrumIcon from '../assets/skills/scrum.jpg';
import zohoIcon from '../assets/skills/zoho.png';
import jiraIcon from '../assets/skills/JiraSoftware.png';
import trelloIcon from '../assets/skills/Trello.png';

// Données des compétences (avec HTML5 et CSS3 en commentaire)
const skillsData = [
    { 
      category: "Web", 
      skills: [ 
         { name: "HTML5", icon: htmlIcon },
         { name: "CSS3", icon: cssIcon },
       { name: "JavaScript", icon: jsIcon }, 
        { name: "Node.js", icon: nodeIcon }, 
        { name: "PHP", icon: phpIcon }, 
        { name: "Bootstrap", icon: bootstrapIcon }, 
        { name: "Angular", icon: angularIcon }, 
        { name: "React", icon: reactIcon } 
      ] 
    },
    { category: "Software", skills: [ { name: "C", icon: cIcon }, { name: "C++", icon: cplusIcon }, { name: "Java", icon: javaIcon }, { name: "Python", icon: pythonIcon } ] },
    { category: "Serveurs & Outils", skills: [ { name: "Git", icon: gitIcon }, { name: "GitHub", icon: githubIcon }, { name: "MySQL", icon: mysqlIcon } ] },
    { category: "Scrum & Agile", skills: [ { name: "Scrum", icon: scrumIcon }, { name: "Zoho", icon: zohoIcon } ] },
    { category: "Travail en Équipe", skills: [ { name: "Jira Software", icon: jiraIcon }, { name: "Trello", icon: trelloIcon } ] }
];

// Styles
const SkillsSection = styled.section`
  padding: 100px 0;
   background-color: #1a1a1a;
  .swiper-pagination-bullet { background-color: #f0f0f0; width: 10px; height: 10px; }
  .swiper-pagination-bullet-active { background-color: #61dafb; }
`;

const SkillSlide = styled.div`
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

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  &:hover { transform: scale(1.1); }
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const SkillName = styled.p`
  font-size: 0.9rem;
  color: #f0f0f0;
  text-align: center;
`;

// Composant
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        style={{ padding: '2rem 0' }}
      >
        {skillsData.map((categoryData) => (
          <SwiperSlide key={categoryData.category} style={{ width: '450px' }}>
            <SkillSlide>
              <CategoryTitle>{categoryData.category}</CategoryTitle>
              <IconsGrid>
                {categoryData.skills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillIcon src={skill.icon} alt={`${skill.name} logo`} />
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