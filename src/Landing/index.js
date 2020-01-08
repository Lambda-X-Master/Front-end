import React from 'react'
import { 
    Main,
    P,
    Container,
} from "./styles";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <Main>
          <P>
            Welcome to Space...
          </P>
          <Container>
            <Link to="/login">
              Login
            </Link>
            <Link to="/register">
              Register
            </Link>
          </Container>
        </Main>
    )
}

export default Landing