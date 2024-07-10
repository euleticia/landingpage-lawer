import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './style.css'; 

const WhatsAppButton = () => {
  return (
    <a
      href='https://wa.me/message/NPGY5LW5PPCNO1 '
      target='_blank'
      rel='noopener noreferrer'
      className='floating-button'
    >
      <FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' />
    </a>
  );
};

export default WhatsAppButton;
