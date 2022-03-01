import React, { useState, useEffect } from "react";
import getPractices from "../helpers/getPractices";

export default function Table({ userId }) {
  const [practice, setPractice] = useState([]);

  useEffect(() => {
    updatePractices()
  }, [practice]);

  const updatePractices = async () => {
    try {
    const practices = await getPractices(userId);
    setPractice(practices);
    } catch (reason) {
      console.error(reason)
    }
  }
  
  return (
    <div>
      <h3>My Scales:</h3>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        {practice && (
          <ul>
            {practice.map((practices) => (
              <li key={practices.id}>
                <a>{practices.scale}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
