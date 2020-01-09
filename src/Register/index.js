import React, { useState } from "react";
import axios from "axios";
import { 
    Main,
    Info,
    InfoTwo,
} from "./styles";
import { Form } from "semantic-ui-react";
import { MyButton } from "../Login/styles";


export const Register = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [userID, setUserID] = useState({
    username: "",
    email: "",
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
        "https://lambda-beastmode.herokuapp.com/api/register/ ",
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
          <Info>Creating Account</Info>
        </div>
      );
    }
  }

  function error() {
    if (isError) {
      return (
        <div>
          <Info>An error has occurred, please try again!</Info>
        </div>
      );
    }
  }

  return (
    <Main>
      {loading()}
      {error()}
      <Info>Register to Play</Info>
      <InfoTwo>
        SpaceQuest - an Adventure in Space
      </InfoTwo>
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
        <Form.Field>
          <label>Email</label>
          <input
            className="inputStyle"
            name="email"
            type="email"
            onChange={handleChange}
          />
        </Form.Field>
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

        <MyButton type="submit">Submit</MyButton>
      </Form>
    </Main>
  );
};

export default Register