import { useState } from "react";
//import app from "../app.module.css"
import registration from './Registration.module.css'
export default function Form(props) {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = props;
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);

      const user = { email, password };
      fetch("http://localhost:8081/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    }
  };


  // Showing success message
  const successMessage = () => {
    return (
      <div
        className={registration.success}
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className={registration.error}
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div >
      <div className={registration.form}>
        <h1>Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className={registration.messages}>
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className={registration.label}>Name</label>
        <input
          onChange={handleName}
          className={registration.input}
          value={name}
          type="text"
        />

        <label className={registration.label}>Email</label>
        <input
          onChange={handleEmail}
          className={registration.input}
          value={email}
          type="email"
        />

        <label className={registration.label}>Password</label>
        <input
          onChange={handlePassword}
          className={registration.input}
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className={registration.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
