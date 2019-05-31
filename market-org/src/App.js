import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import { withRouter  } from 'react-router'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { auth } from './firebase';
import './App.css';

function App(props) {

  const [users, setUsers] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:5000')
//          .then(response => {
//            console.log('response:', response)
//            return (
//               setUsers(response)
//            )
           
//          })
//          console.log(users)
//   }, [])



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
    </div>
  );
}

export default withRouter(App);
