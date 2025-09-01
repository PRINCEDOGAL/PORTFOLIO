
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

// =================================================================================
// == STYLES ==
// =================================================================================
const ContactSection = styled.section`
  padding: 100px 5%;
  background-color: #1a1a1a;
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto 4rem auto;
  text-align: center;
`;

const InfoItem = styled.div`
  color: #ccc;
  svg { font-size: 2rem; color: #ff6624; margin-bottom: 1rem; }
`;

const ContactForm = styled(motion.form)`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: #222;
  border: 2px solid #333;
  border-radius: 5px;
  color: #f0f0f0;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  &:focus { outline: none; border-color: #ff6624; }
`;

const FormTextarea = styled(FormInput).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: 150px;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
  color: #fff;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 2px solid #333;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  // Change le style quand la radio est sélectionnée
  ${({ isSelected }) => isSelected && `
    border-color: #ff6624;
    background-color: rgba(255, 102, 36, 0.1);
  `}
`;

const RadioInput = styled.input`
  display: none; // On cache la radio par défaut
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: #ff6624;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

// =================================================================================
// == COMPOSANT REACT ==
// =================================================================================
const Contact = () => {
  // États pour contrôler les champs du formulaire
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // État pour contrôler le choix de la méthode d'envoi
  const [sendMethod, setSendMethod] = useState('email');

  // Gère la mise à jour des champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    if (sendMethod === 'whatsapp') {
      e.preventDefault(); // Empêche l'envoi par Formspree
      
      const whatsappNumber = '237695917936';
      // Formate le message pour WhatsApp
      const whatsappMessage = encodeURIComponent(
        `Bonjour, je suis ${formData.name}.\n\nMessage:\n${formData.message}\n\nMon email: ${formData.email}`
      );
      
      // Ouvre le lien WhatsApp dans un nouvel onglet
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    }
    // Si la méthode est 'email', le formulaire se soumettra normalement à Formspree
  };

  return (
    <ContactSection id="contact">
      <h2><span>&lt;/</span> Me Contacter <span>&gt;</span></h2>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '1rem auto 3rem auto', color: '#ccc' }}>
        Une question, une collaboration ? Remplissez le formulaire ci-dessous et choisissez comment me l'envoyer.
      </p>

      <ContactInfoGrid>
        <InfoItem> <FaMapMarkerAlt /> <p>Cameroun</p> </InfoItem>
        <InfoItem> <FaEnvelope /> <p>gagningdonfack@gmail.com</p> </InfoItem>
        <InfoItem> <FaPhoneAlt /> <p>+237 695 917 936</p> </InfoItem>
      </ContactInfoGrid>

      <ContactForm
        action="https://formspree.io/f/YOUR_FORM_ID" // <-- METTEZ VOTRE ID FORMSPREE ICI
        method="POST"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FormInput type="text" name="name" placeholder="Votre nom" required value={formData.name} onChange={handleChange} />
        <FormInput type="email" name="email" placeholder="Votre email" required value={formData.email} onChange={handleChange} />
        <FormTextarea name="message" placeholder="Votre message" required value={formData.message} onChange={handleChange} />

        <RadioContainer>
          <RadioLabel isSelected={sendMethod === 'email'}>
            <RadioInput type="radio" name="sendMethod" value="email" checked={sendMethod === 'email'} onChange={() => setSendMethod('email')} />
            <FaEnvelope /> Email
          </RadioLabel>
          <RadioLabel isSelected={sendMethod === 'whatsapp'}>
            <RadioInput type="radio" name="sendMethod" value="whatsapp" checked={sendMethod === 'whatsapp'} onChange={() => setSendMethod('whatsapp')} />
            <FaWhatsapp /> WhatsApp
          </RadioLabel>
        </RadioContainer>

        <SubmitButton 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {sendMethod === 'email' ? 'Envoyer par Email' : 'Envoyer sur WhatsApp'}
        </SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;

