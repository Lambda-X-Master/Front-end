import React, { useState } from "react";
import axios from "axios";
import { 
    Main,
} from "./styles";
import { Form } from "semantic-ui-react";



export const Register = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [userID, setUserID] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const handleChange = event => {
    setUserID({ ...userID, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    console.log("submitting")
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        "https://lambda-mud-test.herokuapp.com/api/registration/",
        userID
      )
      .then(res => {
        console.log("RESPONSE", res);
        setIsLoading(false);
        localStorage.setItem("token", res.data.key);
        props.history.push("/game");
      })
      .catch(err => {
        setIsError(true);
        console.log("Server Error", err);
      });
    setIsError(false);
    setIsLoading(false);
  };

  console.log("This is the userId", userID);

  function loading() {
    if (isLoading) {
      return (
        <div>
          <h1>Creating Account</h1>
        </div>
      );
    }
  }

  function error() {
    if (isError) {
      return (
        <div>
          <h1>An error has occurred, please try again!</h1>
        </div>
      );
    }
  }

  return (
    <Main>
      {loading()}
      {error()}
      <h2>Register to Play</h2>
      <p>
        SpaceQuest - an Adventure in Space
      </p>
      <Form onSubmit={handleSubmit} className="formStyle">
        <Form.Field>
          <label>Username</label>
          <input
            className="inputStyle"
            name="username"
            type="text"
            onChange={handleChange}
          />
        </Form.Field>
        {/* <div>
          <div
            label="User Name"
            name="username"
            type="text"
            onChange={handleChange}
            width={12}
          />
        </div> */}
        <Form.Field>
          <label>Password</label>
          <input
            className="inputStyle"
            name="password1"
            type="password"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input
            className="inputStyle"
            name="password2"
            type="password"
            onChange={handleChange}
          />
        </Form.Field>

        <button type="submit">Submit</button>
      </Form>
    </Main>
  );
};

export default Register