import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="main">
        <h2>Our Services</h2>
        <p>At WinBig, we provide essential services to help you achieve consistent success in sports betting. Our expert team is dedicated to offering you the best resources and insights to make informed bets. <br></br> Explore our key services below:</p>
        
        <div className="child">
          <div className="section section-1">
            <h2>Expert Betting Tips</h2>
            <p>Receive expertly analyzed betting tips with a focus on 1.30 odds. Our experienced analysts carefully select each tip to ensure a high probability of success, helping you make smarter and more confident bets.</p>
          </div>

          <div className="section section-2">
            <h2>In-Depth Match Analysis</h2>
            <p>Benefit from detailed match analyses covering various sports, including football, basketball, and tennis. Our analyses consider team form, player statistics, and head-to-head records, giving you comprehensive insights to inform your betting decisions.</p>
          </div>

          <div className="section section-1">
            <h2>Bankroll Management Guidance</h2>
            <p>Learn effective bankroll management strategies to ensure long-term betting success. Our guidance includes tips on staking strategies and how to manage your betting funds wisely, helping you avoid common pitfalls.</p>
          </div>

        </div>
        <p>With these core services, WinBig equips you with the tools and knowledge you need to make informed betting decisions and achieve consistent wins. Join us today and start your journey to smarter betting and bigger wins!</p>
      </div>
    </div>
  );
};

export default Services;
