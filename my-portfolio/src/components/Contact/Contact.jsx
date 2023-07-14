import React from 'react';
import './contact.css';
import { motion } from 'framer-motion';
import AnimatedCharacter from '../AnimatedCharacter/AnimatedCharacter';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        {/* Agrega aquí la información de contacto */}
        <p>Email: Pablobezard@gmail.com</p>
        <p>Teléfono: +54 3534789688</p>
      </div>
      <div className="contact-content">
        <form className="contact-form">
          {/* Agrega aquí el formulario de contacto */}
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className="contact-animation">
          <AnimatedCharacter />
        </div>
      </div>
    </div>
  );
};

export default Contact;
