import React, { useState, useEffect } from "react";
import getPractices from "../helpers/getPractices";
import ScaleInfo from "./scaleInfo";

export default function Table({ userId, updated,setUpdated }) {
  const [practice, setPractice] = useState([]);
  const [active, setActive] = useState();
  const [currentScale, setCurrentScale] = useState("");

  useEffect(() => {
    
      updatePractices();

      return setUpdated(false);

  },[updated]);

  const updatePractices = async () => {
    try {
      const practices = await getPractices(userId);
      setPractice(practices);
    } catch (reason) {
      console.error(reason);
    }
  };

  return (
    <div>
      <h2>My Scales:</h2>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        {practice && (
          <ul>
            {practice.map((practices) => (
              <li key={practices.id}>
                <a
                  onClick={() => {
                    setActive("isActive");
                    setCurrentScale(practices.scale);
                  }}
                  className={active}
                >
                  {practices.scale}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <ScaleInfo practice={practice} currentScale={currentScale} />
    </div>
  );
}
