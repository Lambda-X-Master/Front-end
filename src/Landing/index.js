import React from 'react'
import { 
    Main,
    P,
    Container,
    MyButton,
} from "./styles";
import { Link } from "react-router-dom";
import img from '../Images/Starship.png'


const Landing = () => {
    return (
        <Main>
          <P>
            Welcome to Space...
          </P>
          <img src="${img}" alt="Italian Trulli"/>
          {/* <Container>
            <MyButton>
              <Link to="/login">
                Login
              </Link>
            </MyButton>
            <MyButton>
              <Link to="/register">
                Register
              </Link>
            </MyButton>

          </Container> */}
        </Main>
    )
}

export default Landing