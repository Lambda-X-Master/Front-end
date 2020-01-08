import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RouteContext } from '../Contexts/routeContext'
import { Menu, Segment } from 'semantic-ui-react'
import { 
  Main,
  MyButton,
} from "./styles";
export const Nav = props => {
  const routeProps = useContext(RouteContext)

  const logout = () => {
    console.log("logout props", props);
    routeProps.routeProps.history.push("/");
    localStorage.clear();
  };

  const protectedView = () => {
    if (localStorage.getItem("token")) {
      return (
        <Main>
          <MyButton
              onClick={logout}
          >
            Log Out
          </MyButton>
        </Main>
      )
    } else {
      return (
        <Main>
            <MyButton>
              <NavLink to="/">
                Home
              </NavLink>
            </MyButton>
            <MyButton>
              <NavLink to="/login">
                Login
              </NavLink>
            </MyButton>
            <MyButton>
              <NavLink to="/register">
                Register
              </NavLink>
            </MyButton>
        </Main>
      )
    }
  }

  return (
    <div>
    <Segment attached>
      <Menu >
        {protectedView()}
      </Menu>
    </Segment>
  </div>
  )
}

export default Nav