import React, { useState } from "react";
import axios from "axios";
import { Loader, Form } from "semantic-ui-react";
import { 
  Main,
  MyButton
} from "./styles";

export const Login = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const sendCreds = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        "https://lambda-beastmode.herokuapp.com/api/login/",
        credentials
      )
      .then(res => {
        console.log("response", res);
        setIsLoading(false);
        localStorage.setItem("token", res.data.key);
        props.history.push("/game");
      })
      .catch(err => {
        console.log("Error", err)
        setIsError(true);
        setIsLoading(false);
      });
    setIsError(false);
  };

  function loading() {
    console.log("inside loading state render function");
    console.log("isLoading", isLoading);
    if (isLoading) {
      return (
        <div className="alertMessage">
          <Loader active inline="centered" className="loader" />
          <p className="loader">Now Loading</p>
        </div>
      );
    }
  }
  function error() {
    console.log("inside error state render function");
    console.log("iserror", isError);
    if (isError) {
      return (
        <div className="messageContainer">
          <h3>You must register before you can do that!</h3>

          <p>Sign up to be part of our awesome list of wedding planners!</p>
        </div>
      );
    }
  }

  return (
    <Main>
      <h2 className="formHeader">
        Welcome Back
      </h2>
      <p>
        Login to continue your game
      </p>
      <p>
        Don't have an account? Click Register to play!
      </p>
      <Form onSubmit={sendCreds} className="formStyle">
        <Form.Field>
          <label>Username:</label>
          <input
            className="inputStyle"
            name="username"
            type="text"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email:</label>
          <input
            className="inputStyle"
            name="email"
            type="email"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input
            className="inputStyle"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </Form.Field>
        <MyButton type="submit">Submit</MyButton>
      </Form>

      {loading()}
      {error()}
    </Main>
  );
};
export default Login