import React from 'react';
import { data } from './data';
import about from '../../assets/about-image.png';
import './History.scss';
const History = () => {
  return (
    <div className='history-container'>
      <div className='history-body'>
        <div className='tagline'>
          <h1>Information About Save</h1>
          <h1>A Train</h1>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='details'>
              <p>
                Save A Train started in 2016, as Millenials and avid travelers,
                we found it ridiculous that we had to search in many places and
                websites to find the best train tickets for our needs, not to
                mention that most railway websites are just not user friendly.
                We understood early on that travelers care in 70% of the times
                about prices, so we developed algorithms to show B2B and B2B2c
                clients the best prices.
              </p>
              <p>
                We are now connected to over 20 major operators and expanding
                globally to more continents and markets.
              </p>
            </div>
          </div>
          <div className='col'>
            <figure>
              <img
                src={about}
                alt='save a train'
              />
            </figure>
          </div>
        </div>
        <div className='bottom'>
          <div className='content'>
            <p>
              We have several key things that we look at when we pick a railway
              partner:
            </p>
            <ul>
              {data.bullets.map((text, i) => (
                <li key={text}>
                  {i + 1}. {text}
                </li>
              ))}
            </ul>
            <p>
              Save A Train focus on rail only, since its a 400$ Billion USD
              market and we feel that digitalization must come to this
              transportation option, we live by the rule, that when you try to
              do several things at the same time, you fail - so we decided to be
              the best at what we know best, and that is Digitizing Rail. In our
              humble opinion, the process of digitalization of rail will take
              several years, and if we look at the history of travel and
              transportation champions of products, skyscanner had a good flight
              product in 2009, Expedia and Booking had over 1 million hotels
              just in 2012, Rentalcars and Cartrawler only in 2015 had a decent
              product for Car rentals online, We want to be that champion in the
              trains market, and we believe that our core technologies in Rail,
              places us much ahead of our competition. If you believe you can
              contribute to our success or have an opinion you would like to
              share, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
