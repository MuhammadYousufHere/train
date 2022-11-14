import React from "react";
import PricingCard from "./PricingCard";
import "./Pricing.scss";
import Button from "../../components/Button/Button";
const Pricing = () => {
  return (
    <div className='pricing-container'>
      <div className='pricing-content'>
        <div className='top'>
          <h1>Pricing</h1>
        </div>
        <div className='middle'>
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
        <div className='bottom'>
          <div className='content'>
            <h2>Compare Pricing and Feature Differences HERE</h2>
            <Button title='View Pricing' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
