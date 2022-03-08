import React, { useState } from "react";
import { createPractice } from "../helpers/createPractice";
import { FormLog } from "./FormLog";
import { Card } from "./PracticeStyled";
export default function Practice(props) {
  const [scale, setScale] = useState("");
  const [bpm, setBpm] = useState(0);
  const {userId} = props
  const handleSubmit = async (e) => {
    e.preventDefault()
    const practice = {scale, bpm, userId}
    try {
    await createPractice(practice)
      props.setUpdated(true)
    } catch (reason) {
      console.error('Failed to post new practice:', reason)
    }
  }
  return (
    <Card>
      <form className="container mt-6 is-align-content-center is-flex-direction-column" onSubmit={handleSubmit}>
        <h1 className="is-size-3"> Today's practice </h1>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <label>Scale</label>
            <input
              class="input"
              type="text"
              placeholder="Scale"
              value={scale}
              onChange={(e) => setScale(e.target.value)}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <label>BPM</label>
            <input
              class="input"
              type="text"
              placeholder="BPM"
              value={bpm}
              onChange={(e) => setBpm(~~e.target.value)}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">Save</button>
          </p>
        </div>
      </form>
    </Card>
  );
}
