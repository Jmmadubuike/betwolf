import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home__main">
        <h1 className="home__title">BetWolf - Your Daily Sports Betting Insights!</h1>
        <p className="home__description">
          Get the edge you need with our expert sports betting predictions and daily 1.30 odds insights. 
          At BetWolf, we empower you to make informed betting decisions, whether you're a seasoned bettor 
          or just starting out.
        </p>
        
        <div className="home__sections">
          <div className="home__section home__section--primary">
            <h2 className="home__section-title">Welcome to BetWolf!</h2>
            <p className="home__section-description">
              Get reliable daily 1.30 odds and expert sports betting predictions. Maximize your winning potential with 
              our accurate insights and comprehensive analysis. Join BetWolf today and make smarter bets with confidence. 
              Enjoy a user-friendly experience and stay ahead with our expert guidance.
            </p>
          </div>

          <div className="home__section home__section--secondary">
            <h2 className="home__section-title">Guaranteed Wins with BetWolf</h2>
            <p className="home__section-description">
              Join BetWolf to consistently outsmart the competition and secure your wins. Take your betting game to the 
              next level with strategies designed for success. Only at BetWolf would you find such opportunities and 
              privileges to earn an income daily from a multi-billion dollar industry. Your time is now.
            </p>
          </div>
        </div>

        <div className="home__football-tips">
          <h2 className="home__football-tips-title">Football Tips of the Day</h2>
          <div className="home__football-tip">
            <h3 className="home__football-league">Premier League</h3>
            <p className="home__football-teams">Manchester City vs Liverpool</p>
            <p className="home__football-teams">Over 1.5 goals</p>
            <p className="home__football-bookie">Bookie: SportyBet</p>
          </div>

          <div className="home__football-tip">
            <h3 className="home__football-league">Spanish La-Liga</h3>
            <p className="home__football-teams">Real Madrid vs Barcelona</p>
            <p className="home__football-teams">Over 1.5 goals</p>
            <p className="home__football-bookie">Bookie: SportyBet</p>
          </div>
          {/* Add more tips here as needed */}
        </div>

        <div className="home__button-container">
          <a href="/contact" className="home__button-link">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
