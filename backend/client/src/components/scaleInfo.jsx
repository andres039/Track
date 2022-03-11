import React, { useEffect } from "react";
import getScaleHistory from "../helpers/getScaleHistory";

const ScaleInfo = ({ practice, currentScale }) => {

  useEffect(() => {}, [currentScale]);

  const scaleArray = getScaleHistory(practice, currentScale);
  console.log('scale', practice)
  const message = practice.length === 0 ? "Welcome. We don't have any records of your practice yet. Feel free to add a new scale and speed on the left hand side form." : "Click on a scale to see a history of when you played it and how speed has changed"
  return (
    <div className="container">
      <h3 className="title is-size-4">Scale Records {`for ${currentScale}`}</h3>
      <p className="is-size-5">{message}</p>
      <table className="container table is-bordered is-hoverable">
        <thead>
          <tr>
            <th>Date</th>
            <th>BPM</th>
          </tr>
        </thead>
        <tbody>
          {currentScale &&
            scaleArray.map((scale) => 
              <tr key={scale.date}>
                <td>{scale.date}</td>
                <td>{scale.bpm}</td>
              </tr>
            )}  
        </tbody>
      </table>
    </div>
  );
};

export default ScaleInfo;
