import React, { useState } from "react";
import { FormLog } from "./FormLog";
import { Container, Form, Label, Title, Input, Button } from "./Loginstyle";
//import "bootstrap/dist/css/bootstrap.min.css";


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
      <Container> 
        <Form onSubmit={handleSubmit}>
          <Title
            
          >
            Track
          </Title>

          <Label ></Label>
          <Input
            type="email"
            id="emailAddress"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label> </label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <Label>
              <Input  type="checkbox" value="remember-me" />{" "}
              Remember me
            </Label>
          </div>
          <div

          >
            <Button>Login</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
