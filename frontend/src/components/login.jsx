import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {email, password}
    fetch('http://localhost:3000/api/login', {
      mode: "cors",
      method: 'POST',
      body: JSON.stringify(user)
    }).then(()=> console.log("this is the res:", req))
  }
  return <div>
   
    <div className="text-center mt-5">
      <form onSubmit={handleSubmit}>
        <h1 className="mt-5 h3 font-weight-normal">Track</h1>

        <label className="sr-only"></label>
        <input
          type="email"
          id="emailAddress"
          className="form-control"
          placeholder="Email Address"
          required
        />

        <label className="sr-only"> </label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
        />

        <div className="checkbox">
          <label>
            <input className="mt-3" type="checkbox" value="remember-me" /> Remember
            me
          </label>
        </div>
        <div className="mt-3 d-grid gap-2 col-4 mx-auto">
          <button className="btn btn-primary">Login</button>

          <button className="btn btn-primary mx-3">Register</button>
        </div>
      </form>
    </div>
  </div>;
}
