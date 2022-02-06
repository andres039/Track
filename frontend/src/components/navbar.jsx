import React from 'react';
import Button from './button';
  
export default function Navbar(props) {
  const {isLoggedIn, setIsLoggedIn} = props
  
  return <nav className="navbar is-link" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
   <h1 className="navbar-item is-size-3">🎹   Welcome to TRACK. </h1>
  </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Button className="button is-primary" onClick={() => setIsLoggedIn(false)}>
            <strong className="is-size-4">Sign out</strong>
          </Button>
        </div>
      </div>
    </div>
</nav>

}