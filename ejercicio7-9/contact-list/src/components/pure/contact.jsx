import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Contact.css';
import { Contact } from '../../models/Contact.class';
import { AiOutlineCloseCircle } from "react-icons/ai";

const ContactComponent = ({ contacto, remove }) => {
  
  const [state, setConectado] = useState(contacto.conectado);

  const toggleConectado = () => {
    setConectado(!state);
  };

  return (
    <div className='contact-container'>
      <div className='contact-text'>
        { contacto.name + " " + contacto.apellido + " - " + contacto.email + " - " } 
        { state ? ('Conectado') : ('Desconectado')}
        <button onClick={toggleConectado}>Cambiar estado</button> 
      </div>
      <div className='contact-container-icons' onClick={()=>remove(contacto)}>
        <AiOutlineCloseCircle className='contact-icon'></AiOutlineCloseCircle>
      </div>
    </div>
  )
};

// definiendo tipos
ContactComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contact),
};

export default ContactComponent;