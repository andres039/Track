import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import boots from "./Login.module.css";

export default function Login(props) {
  const PORT = process.env.PORT || 8081;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn, setUserId } = props;
  const { token, setToken, setLog } = props;
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    fetch(`http://localhost:${PORT}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserId(data.userId);
        console.log("data", data);
        data.accessToken && setIsLoggedIn(true);
        setToken(data.accessToken);
      });
  };
  return (
    <div>
      <div className={(boots["text-center"], boots["mt-5"])}>
        <form onSubmit={handleSubmit}>
          <h1
            className={(boots["mt-5"], boots.h3, boots["font-weight-normal"])}
          >
            Track
          </h1>

          <label className={boots['sr-only']}></label>
          <input
            type="email"
            id="emailAddress"
            className={boots['form-control']}
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={boots['sr-only']}> </label>
          <input
            type="password"
            id="password"
            className={boots['form-control']}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={boots["checkbox"]}>
            <label>
              <input className={boots["mt-3"]} type="checkbox" value="remember-me" />{" "}
              Remember me
            </label>
          </div>
          <div
            className={
              (boots["mt-3"],
              boots["d-grid"],
              boots["gap-2"],
              boots["col-4"],
              boots["mx-auto"])
            }
          >
            <button className={(boots.btn, boots["btn-primary"])}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
