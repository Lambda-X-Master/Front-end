import React, { useState, useEffect, useContext } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withRouter } from "react-router";

import Homepage from "./components/homepage/Homepage";
import VendorForm from "./components/vendor/VendorForm";
import ProductForm from "./components/product/ProductForm";
import ProductByVendor from './components/product/ProductByVendor';

import MarketLandingPage from "./components/marketLandingPage/marketLandingPage";
import { AuthProvider } from "./components/authContext/authState";
import { MarketProfilesProvider } from "./components/context/GlobalContext.js";
import { ContextProvider } from './components/context/state';
import Store from "./components/authContext/authState";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [user, setUsers] = useState([]);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     console.log("user:", user)
  //     if(user) {
  //       const {uid, ra, email} = user;
  //       localStorage.setItem('token', ra)
  //       if(user.email) {
  //         const { email } = user;
  //         axios.defaults.headers.common['Authorization'] = user.ra
  //         axios.post('http://localhost:5000/users/register', user)
  //              .then(res => {
  //                console.log("res:", res);
  //                console.log("userinthen", user)
  //                setUsers(user)
  //              })
  //              .catch(err => {
  //                console.log(err)
  //              })
  //       }
  //     }
  //   })

  // }, [])

  //   export const register = (user) => dispatch => {
  //     dispatch({
  //         type: authTypes.REGISTER_START
  //     })
  //     axios.defaults.headers.common['Authorization'] = user.ra
  //     axios
  //         .post(`/api/users/register`, user )
  //         .then(res => {
  //             // console.log(res.data.user.id, 'in register action')
  //             const payload = {
  //                 ...res.data,
  //                 ...user
  //             }
  //             dispatch({
  //                 type: authTypes.REGISTER_SUCCESS,
  //                 payload: payload
  //             })
  //         })
  //         .catch(err => {
  //             dispatch({
  //                 type: authTypes.REGISTER_FAIL,
  //                 payload: err
  //             })
  //         })
  // }

  //   auth.onAuthStateChanged((user) => {
  //     console.log(user, 'in auth listener')
  //     if (user) {
  //       const { uid, ra, email } = user;
  //       localStorage.setItem('token', ra)
  //       if (user.email) {
  //         const { email } = user;
  //         this.props.oAuth({ firebase_id: uid, email, token: ra })
  //       }

  //       // this.props.emailLogin(user)
  //     }
  //     else {
  //       this.setState({
  //         users: null
  //       })
  //     }
  //   })

  // const storeUser = (user) => {
  //   axios.post('/users/register')
  // }

  return (
    // <AuthProvider>
    //   <React.Fragment>
    //     <CssBaseline />
    //     <Switch>
    //       <Route exact path="/" component={Homepage} />

    //       <MarketProfilesProvider>
    //         <Route path="/markets" component={MarketLandingPage} />
    //       </MarketProfilesProvider>
    //     </Switch>
    //   </React.Fragment>
    // </AuthProvider>
    // <Store>
    //   <React.Fragment>
    //     <CssBaseline />
    //     <Switch>
    //       <Route exact path="/" component={Homepage} />
    //       <Route path='/vendor' component={VendorForm} />
    //     </Switch>
    //   </React.Fragment>
    // </Store>
    <React.Fragment>
      <CssBaseline />
      <ContextProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/markets" component={MarketLandingPage} />
          <Route path="/vendor" component={VendorForm} />
          <Route path="/productForm" component={ProductForm} />
          <Route path="/productsByVendor" component={ProductByVendor} />
        </Switch>
      </ContextProvider>
    </React.Fragment>
  );
}

export default withRouter(App);
