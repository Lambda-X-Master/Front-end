import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RouteContext } from '../Contexts/routeContext'
import { Menu, Segment } from 'semantic-ui-react'

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
        <>
          <Menu.Item 
            name="Game"
            header as={NavLink} 
            exact to="/game" 
            activeClassName="active"
          >
          </Menu.Item>
          <Menu.Item
              name="Logout"
              onClick={logout}
          />
        </>
      )
    } else {
      return (
        <>
          <Menu.Item 
            name="Command Central"
            header as={NavLink} 
            exact to="/" 
            activeClassName="active"
          >
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item 
              name="Login"
              header as={NavLink} 
              exact to="/login" 
              activeClassName="active"
              
            >
            </Menu.Item>
            <Menu.Item 
              name="Sign Up"
              header as={NavLink} 
              exact to="/register" 
              activeClassName="active"
              >
            </Menu.Item>
          </Menu.Menu>
        </>
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