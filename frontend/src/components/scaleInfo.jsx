import React, { useEffect } from "react";

const ScaleInfo = ({ practice, currentScale }) => {
  // const practice = [{
  //   bpm: 85,
  //   createdAt: '2021-06-24'
  // }]
  useEffect(() => {

  }, [currentScale])
  
  console.log(currentScale);
  return (
    <div className="table-container">
      <table className="table is-bordered is-hoverable">
        <thead>
          <tr>
            <th>Date</th>
            <th>BPM</th>
          </tr>
        </thead>
        <tbody>
          {practice.map((practices) => {
            practices.scale === currentScale && (
              <tr>
                <td>{practices.createdAt}</td>
                <td>{practices.bpm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScaleInfo;
