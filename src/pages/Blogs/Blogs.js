import React from 'react';
import Hero from '../../components/Hero';
import dev from '../../assets/dev.png';
import Button from '../../components/Button/Button';
import play from '../../assets/play.png';
import './style.scss';
import Pricing from './Pricing';
import Tours from './Tours';
const Blogs = () => {
  return (
    <>
      <Hero
        title='Online Booking Software'
        desc='The only B2B technology provider for multi-day tour operators'
      >
        <figure>
          <img
            src={dev}
            alt='dev'
          />
        </figure>
      </Hero>
      <div className='blogs-container'>
        <div className='blog-content'>
          <div className='top'>
            <div className='left'>
              <h3>
                Streamline your multi-day tour business with Tour Amigo's
                cloud-based booking and reservation system.{' '}
              </h3>
              <Button
                title='Submit'
                width={'30%'}
                varient='submit'
              />
            </div>
            <div className='right'>
              <figure>
                <img
                  src={play}
                  alt='play'
                />
              </figure>
            </div>
          </div>
          <div className='middle'></div>
          <div className='bottom'>
            <Pricing />
          </div>
          <div className='last'>
            <Tours />
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
