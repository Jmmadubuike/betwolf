import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="main">
      <h1>BetWolf - Your Daily Sports Betting Insights!</h1>
      <p>Get the edge you need with our expert sports betting predictions and daily 1.30 odds insights. At BetWolf, we empower you to make informed betting decisions, whether you're a seasoned bettor or just starting out.</p>
      <div className="sections">
        <div className="section section-1">
          <h2>Welcome to BetWolf!</h2>
          <p>Get reliable daily 1.30 odds and expert sports betting predictions. Maximize your winning potential with our accurate insights and comprehensive analysis. Join BetWolf today and make smarter bets with confidence. Enjoy a user-friendly experience and stay ahead with our expert guidance.</p>
        </div>
        <div className="section section-2">
          <h2>Guaranteed Wins with BetWolf</h2>
          <p>Join BetWolf to consistently outsmart the competition and secure your wins. Take your betting game to the next level with strategies designed for success. Only at BetWolf would you find such opportunities and privileges to earn an income daily from a multi-billion dollar industry. Your time is now.</p>
        </div>
      </div>
      <div className="button-container">
        <a href="/contact" className="button-link">Get Started</a>
      </div>
    </div>
  );
};

export default Home;
