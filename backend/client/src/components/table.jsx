import React, { useState, useEffect } from "react";
import getPractices from "../helpers/getPractices";
import ScaleInfo from "./scaleInfo";
import "bulma/css/bulma.min.css";
import { FormLog } from "./FormLog";
import { Card, Keyboard } from "./TableStyle";
import { cleanPractice } from "../helpers/cleanPractice";
import Button from "./button";
import randomColors from "../helpers/randomColors";
export default function Table({ userId, updated, setUpdated }) {
  const [practice, setPractice] = useState([]);
  const [active, setActive] = useState();
  const [currentScale, setCurrentScale] = useState("New Records");
  const practiceArray = cleanPractice(practice);

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
    console.log('event', e.target.value)
  };
  return (
    <Card>
      <h2 className="title">My Scales:</h2>
      
      {practice && (
        <Keyboard>
          {practiceArray.map((practices) => (
            <li key={practices.id}>
              <Button 
                clicked={(event) => handleClick(event)}
                className={randomColors()}
                value={practices.scale}
                active={active}
                setActive={setActive}
              >
                {practices.scale}
              </Button>
            </li>
          ))}
        </Keyboard>
      )}
      <ScaleInfo practice={practice} currentScale={currentScale} />
    </Card>
  );
}
