import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="services__header">
        <h1 className="services__title">Our Services</h1>
        <p className="services__description">
          At BetWolf, we offer a range of services designed to help you succeed in the sports betting world. 
          Explore our services and find out how we can assist you in making informed betting decisions.
        </p>
      </div>
      
      <div className="services__grid">
        <div className="services__card">
          <h2 className="services__card-title">Daily Odds</h2>
          <p className="services__card-description">
            Get access to our carefully selected daily odds, designed to give you a winning edge every day.
          </p>
        </div>

        <div className="services__card">
          <h2 className="services__card-title">Expert Predictions</h2>
          <p className="services__card-description">
            Benefit from our expert predictions, based on thorough analysis and the latest data.
          </p>
        </div>

        <div className="services__card">
          <h2 className="services__card-title">Betting Strategies</h2>
          <p className="services__card-description">
            Learn winning betting strategies that can help you make smarter decisions and maximize your returns.
          </p>
        </div>

        <div className="services__card">
          <h2 className="services__card-title">Customer Support</h2>
          <p className="services__card-description">
            Have questions? Our dedicated customer support team is here to assist you with anything you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
