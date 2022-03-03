import React, { useEffect } from "react";
import getScaleHistory from "../helpers/getScaleHistory";

const ScaleInfo = ({ practice, currentScale }) => {
  // const practice = [{
  //   bpm: 85,
  //   createdAt: '2021-06-24'
  // }]
  useEffect(() => {}, [currentScale]);

  const scaleArray = getScaleHistory(practice, currentScale);
 
  return (
    <div className="table-container">
      <h3>Scale Records</h3>
      <p>Click on a scale to see a history of when you played it and how speed has changed (hopefully improved!)</p>
      <table className="table is-bordered is-hoverable">
        <thead>
          <tr>
            <th>Date</th>
            <th>BPM</th>
          </tr>
        </thead>
        <tbody>
          {currentScale &&
            scaleArray.map((scale) => 
              <tr>
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
