import React from "react";
import Button from "./button";
import styles from "./Navbar.module.css";
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
        <h1 className="navbar-item is-size-3 text">🎹 Welcome to TRACK. </h1>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {!isLoggedIn && !log && (
              <Button onClick={logInInstead} type="submit">
                Log in
              </Button>
            )}
            {!isLoggedIn && log && (
              <Button onClick={registerInstead}>Register</Button>
            )}
            {isLoggedIn && (
              <Button
                className="button is-primary"
                onClick={() => setIsLoggedIn(false)}
              >
                <strong className="is-size-5">Sign out</strong>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
