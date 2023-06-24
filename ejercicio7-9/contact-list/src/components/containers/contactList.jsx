import React, { useState} from 'react';
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/contact';
import '../../styles/ContactList.css'
import FormContact from '../form/formContact';

const ContactListComponent = () => {
  
  const defaultContact = new Contact('Tsurugi', 'SE', 'jhordtse@gmail.com', true)
  const [contacts, setContacts] = useState([defaultContact]);

  function deleteContact(contact) {
    console.log('Eliminar contacto:', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  function addContact(contact){
    console.log('crear contacto:', contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }
  
  return (
    <div>
      <FormContact add={addContact}></FormContact>
      <div className='showContacts-div'>
        <h1>_____________Contactos_____________</h1> 
      </div>
      {/* Renderizando al componente B la app */}
      {contacts.map((contact,index)=>{
        return(
          <ContactComponent key={index} contacto={contact} remove={deleteContact}></ContactComponent>
        )
      })}
    </div>
  )
}

export default ContactListComponent 
