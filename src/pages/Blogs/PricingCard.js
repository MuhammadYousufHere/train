import React from "react";

const PricingCard = () => {
  return (
    <div className='pricing-card'>
      <div className='card-content'>
        <div className='top-row'>
          <h1>
            29% <sup>*</sup>
          </h1>
          <h2>+ $236pm</h2>
        </div>
        <div className='block'></div>
        <div className='bottom-row'>
          <h2>Distribution</h2>
          <h2>(Api)</h2>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
