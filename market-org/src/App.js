import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router'
import Navbar from './components/navbar/Navbar';
import CreateMarket from './components/createmarket/CreateMarket';
import Homepage from './components/homepage/Homepage';
import PrivateRoute from './components/privateroute/PrivateRoute';





import MarketLandingPage from "./components/marketLandingPage/marketLandingPage";
import { AuthProvider } from './components/authContext/authState';
import { MarketProfilesProvider } from './components/context/GlobalContext.js';



import './App.css';

function App() {



  return (
    <AuthProvider>
      <React.Fragment>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <PrivateRoute exact path="/create-market" component={CreateMarket} />
          <MarketProfilesProvider>
          <Route path="/markets" component={MarketLandingPage}/>
          </MarketProfilesProvider>
        </Switch>
      </React.Fragment>
    </AuthProvider>
  );
}

export default withRouter(App);
