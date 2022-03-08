//import app from "./app.module.css";
//import "bulma/css/bulma.min.css";

import React, { useState } from "react";
import Login from "./components/login";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Practice from "./components/practice";
import Form from "./components/registration";
import Table from "./components/table";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [updated, setUpdated] = useState(false);
  const [log, setLog] = useState(false);

  return (
    <div className="App">
      <Navbar
        setLog={setLog}
        log={log}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />
      {!isLoggedIn && !log && (
        <Form
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          setLog={setLog}
        />
      )}
      {!isLoggedIn && log && (
        <>
          <Login
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
            userId={userId}
            setUserId={setUserId}
            token={token}
            setToken={setToken}
            setLog={setLog}
          />
        </>
      )}
      <Main
        userId={userId}
        setUpdated={setUpdated}
        updated={updated}
        isLoggedIn={isLoggedIn}
      />
      {/* {isLoggedIn && <Practice userId={userId} setUpdated={setUpdated} />}{" "}
      {isLoggedIn && (
        <Table
          token={token}
          userId={userId}
          setUpdated={setUpdated}
          updated={updated}
        />
      )} */}
    </div>
  );
}

export default App;
