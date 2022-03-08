import React, { useState, useEffect } from "react";
import getPractices from "../helpers/getPractices";
import ScaleInfo from "./scaleInfo";
import "bulma/css/bulma.min.css";
import { FormLog } from "./FormLog";
import { Card } from "./TableStyle";
export default function Table({ userId, updated, setUpdated }) {
  const [practice, setPractice] = useState([]);
  const [active, setActive] = useState();
  const [currentScale, setCurrentScale] = useState("hello");

  useEffect(() => {
    updatePractices();

    return setUpdated(false);
  }, [updated]);

  const updatePractices = async () => {
    try {
      const practices = await getPractices(userId);
      setPractice(practices);
    } catch (reason) {
      console.error(reason);
    }
  };

  const handleClick = (e) => {
    setActive("isActive");
    setCurrentScale(e.target.value);
  };
  return (
    <Card>
        <h2>My Scales:</h2>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          {practice && (
            <ul>
              {practice.map((practices) => (
                <li key={practices.id}>
                  <button
                    onClick={handleClick}
                    className={"button is-info"}
                    value={practices.scale}
                  >
                    {practices.scale}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <ScaleInfo practice={practice} currentScale={currentScale} />
    </Card>
  );
}
