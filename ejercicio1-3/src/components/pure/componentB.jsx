import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contacto.class';

const ContactComponent = ({ contacto }) => {
  // 
  const [state, setConectado] = useState(contacto.conectado);

  const toggleConectado = () => {
    setConectado(!state);
  };

  return (
    <div>
		  <h3>
		  	Nombre y apellido : {contacto.name} { contacto.apellido }
		  </h3>
		  <h3>
		  	Email   : { contacto.email } 
		  </h3>
		  <h3>
        {state ? 'En Línea' : 'Hace 1 minuto'}
		  </h3>
      <button onClick={toggleConectado}>Cambiar estado</button>
    </div>
  );
};
// definiendo tipos
ContactComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contact),
};

export default ContactComponent;