import React from 'react';
import Button from '../../components/Button/Button';
import { tours } from './data';
import './Tours.scss';
const Tours = () => {
  return (
    <div className='tours-container'>
      <div className='tours-content'>
        <div className='top'>
          <h1>Featuring Tours From</h1>
        </div>
        <div className='middle'>
          {tours.map((item) => {
            return (
              <div
                className='tours-card'
                key={item.id}
              >
                <img
                  src={item.url}
                  alt='partner'
                />
              </div>
            );
          })}
        </div>
        <div className='bottom'>
          <Button
            title='View Pricing'
            varient='pricing'
          />
        </div>
      </div>
    </div>
  );
};

export default Tours;
