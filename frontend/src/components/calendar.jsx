import React, { useState } from 'react';
import Calendar from 'react-calendar'

export default function Calendars() {
  const [date, setDate] = useState(new Date());
  console.log({date});
  return (
    <div className="container">
      <Calendar tileContent={({date, view }) => view === 'month' && date.getDay() === 3 ? <p>Scale: A, 60 BPM</p> : null} setDate={setDate} date={date}/>
    </div>
  );
}
