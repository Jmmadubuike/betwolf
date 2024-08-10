import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Records.css';

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

  const tileClassName = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateStr = date.toISOString().split('T')[0];

    if (date > today) {
      return 'future-day';
    }

    const record = records.find(record => record.date.toISOString().split('T')[0] === dateStr);
    if (record) {
      return record.status === 'won' ? 'won-day' : 'lost-day';
    }

    return 'past-day';
  };

  return (
    <div className="records-container">
      <header className="records-header">
        <h1>BetWolf - Daily Sports Betting Records</h1>
        <p>Transparency is key. Here’s a detailed view of our daily betting records.</p>
      </header>
      <div className="calendar-section">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={tileClassName}
        />
        <div className="details-section">
          <h2>Details for {date.toDateString()}</h2>
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
