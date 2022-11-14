import React from "react";
import Hero from "../../components/Hero";
import "./Faq.scss";
import buildings from "../../assets/header-buildings.png";
import Accordion from "./Accordin";
import { faq } from "./data";
const FAQ = () => {
  return (
    <>
      <Hero title={"FAQ"} desc='Frequently asked question about our platform'>
        <figure>
          <img src={buildings} alt='/' />
        </figure>
      </Hero>
      <div className='faq-container'>
        <div className='faq-content'>
          {faq.map((item) => (
            <Accordion
              key={item.id}
              title={item.question}
              content={item.answer}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
