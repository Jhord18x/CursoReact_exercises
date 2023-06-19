import React from 'react';
import { Contact } from '../../models/Contacto.class';
import ContactComponent from '../pure/componentB';

const AComponent = props => {
  
  const defaultContact = new Contact('Jhordan', 'QD', 'gohansayayin321@gmail.com', true)

  return (
    <div>
      <div>
        ____________________Contacto 1______________________ 
      </div>
      {/* Renderizando al componente B la app */}
      <ContactComponent contacto = { defaultContact }></ContactComponent>
    </div>
  )
}

export default AComponent 
