 'react';
import styled from 'styled-components';

// Imports Swiper (inchangés)
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Imports des images (inchangés)
import iucImage1 from '../assets/formations/iuc1.jpeg';
import iucImage2 from '../assets/formations/iuc2.jpeg';

// Données des formations (inchangées)
const formationsData = [
  { image: iucImage1, code: "Niveau Bac+3", title: "Génie Logiciel", text: "Institut Universitaire de la Côte.", link: "#" },
  { image: iucImage2, code: "Niveau Bac+4 (en cours)", title: "Conception & Développement d'Applications", text: "Institut Universitaire de la Côte.", link: "#" },
];

// Styles (inchangés)
const FormationsSection = styled.section`
  padding: 100px 5%;
  background-color: #111111; // <-- Changez ici

`;
const SliderContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto 0 auto;
  position: relative;
  .swiper-pagination-bullet {
    background: #fff;
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    background: #00bfff;
  }
`;
const FormationSlide = styled.div`
  display: flex;
  background: radial-gradient(circle, #1a2a45, #0d1b2a);
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #00bfff;
  box-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 25px #00f6ff, 0 0 40px #00f6ff;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SlideImage = styled.div`
  width: 40%;
  height: 300px;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) { width: 100%; height: 200px; }
`;
const SlideContent = styled.div`
  width: 60%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) { width: 100%; }
`;
const Code = styled.span`
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;
const Title = styled.h3`
  color: #00bfff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const Text = styled.p`
  color: #fff;
  flex-grow: 1;
`;
const ReadMoreButton = styled.a`
  background: #00bfff;
  color: #0d1b2a;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  align-self: flex-start;
  transition: all 0.3s;
  &:hover {
    background: #fff;
    box-shadow: 0 0 10px #fff;
  }
`;


// =================================================================================
// == COMPOSANT REACT (Avec la correction) ==
// =================================================================================
const Formations = () => {
  return (
    <FormationsSection id="formations">
      <h2><span>&lt;/</span> Formations <span>&gt;</span></h2>
      <SliderContainer>
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect={'fade'}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {formationsData.map((formation, index) => (
            <SwiperSlide key={index}>
              <FormationSlide>
                <SlideImage style={{ backgroundImage: `url(${formation.image})` }} />
                <SlideContent>
                  <Code>{formation.code}</Code>
                  {/* CORRECTIONS CI-DESSOUS */}
                  <Title>{formation.title}</Title>
                  <Text>{formation.text}</Text>
                  <ReadMoreButton href={formation.link}>En savoir plus</ReadMoreButton>
                </SlideContent>
              </FormationSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </FormationsSection>
  );
};

export default Formations;