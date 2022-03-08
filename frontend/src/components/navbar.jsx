import React from "react";
import Button from "./button";
import styles from "./Navbar.module.css";
import "bulma/css/bulma.min.css";
export default function Navbar(props) {
  const { isLoggedIn, setIsLoggedIn, setLog, log } = props;
  const logInInstead = () => {
    props.setLog(true);
  };
  const registerInstead = () => {
    setLog(false);
  };
  return (
    <nav className={styles.back} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="navbar-item is-size-1 has-text-primary ">🎹 Welcome to TRACK. </h1>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {!isLoggedIn && !log && (
              <button onClick={logInInstead} className="button is-primary"type="submit">
                Log in
              </button>
            )}
            {!isLoggedIn && log && (
              <button className="button is-info" onClick={registerInstead}>Register</button>
            )}
            {isLoggedIn && (
              <button className="button is-danger"
                onClick={() => setIsLoggedIn(false)}
              >
                <strong className="is-size-5">Sign out</strong>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
