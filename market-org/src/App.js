import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router'
import Navbar from './components/navbar/Navbar';
import CreateMarket from './components/createmarket/CreateMarket';
import Homepage from './components/homepage/Homepage';
import PrivateRoute from './components/privateroute/PrivateRoute';
import StallsList from './components/stalls/stallsList';

import VendorForm from "./components/vendor/VendorForm";
import ProductForm from "./components/product/ProductForm";

import MarketProfilePage from './components/markets/marketProfile'
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
          <Route path="/stalls/" component={StallsList}/> 
          <Route path="/markets/marketProfile/" component={MarketProfilePage} />
        </Switch>
        </ContextProvider>
      </React.Fragment>
  )
}

export default withRouter(App);
