import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import { withRouter  } from 'react-router'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { auth } from './firebase';
import './App.css';

function App(props) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://market-organizer.herokuapp.com/users')
         .then(res => {
           console.log(res)
           setUsers(res.data)
         })
         .catch(err => {
           console.log(err.message)
         })
  }, [])



  const logout = () => {
    auth.signOut();
    props.history.push('/')
  }

  return (
    
    <div className="App">
      <NavLink to="/signin">Login</NavLink>
      <Route exact path="/" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <button type="button" onClick={logout}>Logout</button>
      { users && users.map(user => {
        return (
          <div key={user.id}>{user.email}</div>
        )
      })}
    </div>
  );
}

export default withRouter(App);
