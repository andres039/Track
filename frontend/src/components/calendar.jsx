import React, { useState } from 'react';
import Calendar from 'react-calendar'

export default function Calendars() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="container">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
