import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Records.css';

// Example record data
const records = [
  { date: new Date('2024-08-01'), status: 'won' },
  { date: new Date('2024-08-02'), status: 'lost' },
  { date: new Date('2024-08-03'), status: 'won' },
  { date: new Date('2024-08-04'), status: 'won' },
  { date: new Date('2024-08-05'), status: 'won' },
  { date: new Date('2024-08-06'), status: 'won' },
  { date: new Date('2024-08-07'), status: 'won' },
  { date: new Date('2024-08-08'), status: 'won' },
  { date: new Date('2024-08-09'), status: 'won' },
  // Add more records as needed
];

const Records = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Function to determine the class name for each day
  const tileClassName = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Convert date to YYYY-MM-DD format for comparison
    const dateStr = date.toISOString().split('T')[0];
    
    // Check if the date is today or in the future
    if (date > today) {
      return 'future-day';
    }

    // Find record for the date
    const record = records.find(record => record.date.toISOString().split('T')[0] === dateStr);
    if (record) {
      return record.status === 'won' ? 'won-day' : 'lost-day';
    }

    return 'past-day';
  };

  return (
    <div className="main">
      <h1>WinBig - Your Daily Sports Betting Insights!</h1>
      <h2>Our Track Records are displayed here for Transparency.</h2>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={tileClassName}
        />
        <div className="details">
          <h2>Details for {date.toDateString()}</h2>
          {/* Example detail */}
          <div className="record-detail">
            <p>
              <span className="done-icon"></span>
              <strong>1.30 odds Won successfully</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
