import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router'
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landingpage/landingpage';
import CreateMarket from './components/createmarket/CreateMarket';
import Homepage from './components/homepage/Homepage';
import PrivateRoute from './components/privateroute/PrivateRoute';



import VendorForm from "./components/vendor/VendorForm";
import ProductForm from "./components/product/ProductForm";


import MarketLandingPage from "./components/marketLandingPage/marketLandingPage";

import { ContextProvider } from './components/context/state';
import "./App.css";

function App() {



  return (
      <React.Fragment>
        <CssBaseline />
        <ContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <PrivateRoute exact path="/create-market" component={CreateMarket} />
          <Route path="/vendor" component={VendorForm} />
          <Route path="/productForm" component={ProductForm} />
          <Route path="/markets" component={MarketLandingPage} />
          <Route path="/landing-page" component={LandingPage}/>
        </Switch>
        </ContextProvider>
      </React.Fragment>
  )
}

export default withRouter(App);
