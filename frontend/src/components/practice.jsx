import React, { useState } from "react";

export default function Practice() {
  const [scale, setScale] = useState("");
  const [bpm, setBpm] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault()
    const practice = {scale, bpm, userId: 2}
    fetch('http://localhost:3000/api/practice', {
      mode: "cors",
      method: 'POST',
      headers: {"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImN1cnJlbnRVc2VyIjp7ImlkIjoyLCJlbWFpbCI6Im1hcmtAYmFjaC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRTamZscEdYZ2Zzc0pJc3JPSzZOdkF1YnRjNms2dUViVnpwS1JUWmNIdDAybzlLdW1lZXNtLiJ9fSwiaWF0IjoxNjQ0MDAyOTE5fQ.TG0ALqAI5zOp6p_01_8rD_DuuO1_8stbF_ylhqFhDVc"},
      body: JSON.stringify(practice)
    }).then(()=> console.log(practice))
  }
  return (
    <div>
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
    </div>
  );
}
