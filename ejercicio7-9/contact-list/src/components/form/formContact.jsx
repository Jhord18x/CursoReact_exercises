import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';
import '../../styles/FormContact.css'

const FormContact = ({add}) => {

    const nameRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            true
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='contact-form'>
            <div className=''>
                <input placeholder='Nombres' ref={nameRef} id='inputName' type='text' className='contact-input' required autoFocus/>
                <input placeholder='Apellidos' ref={apellidoRef} id='inputLast' type='text' className='contact-input' required />
                <input placeholder='@gmail.com' ref={emailRef} id='inputEmail' type='text' className='contact-input' required />
                <br />
                <button type='submit' className='contact-button'>
                    { 'agregar contacto'}
                </button>
            </div>
        </form>
    );
}

FormContact.protoTypes = {
    add: PropTypes.func.isRequired
}

export default FormContact;
