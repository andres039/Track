import "./App.css";
//import "bulma/css/bulma.min.css";
import "react-calendar/dist/Calendar.css";
import Button from "./components/button";
import Calendars from "./components/calendar";
import React, { useState } from "react";
import Login from "./components/login";
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
      {/* <Calendars/> */}
      {!isLoggedIn && !log && (
        <Form setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setLog={setLog}/>
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
      {isLoggedIn && (
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}>
          {" "}
        </Navbar>
      )}
      {isLoggedIn && <Practice userId={userId} setUpdated={setUpdated} />}{" "}
      {isLoggedIn && (
        <Table
          token={token}
          userId={userId}
          setUpdated={setUpdated}
          updated={updated}
        />
      )}
    </div>
  );
}

export default App;
