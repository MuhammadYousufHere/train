import React from "react";
import "./Contact.scss";
import Hero from "../../components/Hero";
import { ContactForm } from "./ContactForm";
import mockup from "../../assets/laptop-mockup-v.png";

const Contact = () => {
  return (
    <div className='contact-form-page'>
      <Hero
        title={"Get In Touch"}
        desc='How can we help your train travel needs'
      >
        <figure>
          <img src={mockup} alt='mockup' />
        </figure>
      </Hero>
      <ContactForm />
    </div>
  );
};

export default Contact;
