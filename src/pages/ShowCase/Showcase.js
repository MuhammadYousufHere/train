import React from 'react';
import Card from './Card';
import { data } from './data';
const Showcase = () => {
  return (
    <section className='showcase-container'>
      <div className='showcase-body'>
        {data.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            tag_1={item.tag_1}
            tag_2={item.tag_2}
            text_1={item.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Showcase;
