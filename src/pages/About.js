import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about__main">
        <h1 className="about__title">About BetWolf</h1>
        <p className="about__description">
          At BetWolf, we believe in empowering bettors with the insights and tools they need to succeed. Our platform 
          offers expert sports betting predictions and daily 1.30 odds to help you make informed decisions. Whether you're 
          a seasoned bettor or new to the game, BetWolf is your trusted partner in the world of sports betting.
        </p>

        <div className="about__sections">
          <div className="about__section about__section--vision">
            <h2 className="about__section-title">Our Vision</h2>
            <p className="about__section-description">
              To become the leading provider of sports betting insights, delivering reliable predictions and expert analysis 
              that bettors can trust. We aim to help our users make smarter bets and consistently achieve winning results.
            </p>
          </div>

          <div className="about__section about__section--mission">
            <h2 className="about__section-title">Our Mission</h2>
            <p className="about__section-description">
              Our mission is to provide accurate, data-driven predictions and insights that empower our users to make informed 
              betting decisions. We strive to create a user-friendly platform where bettors of all levels can benefit from our 
              expertise and achieve success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
