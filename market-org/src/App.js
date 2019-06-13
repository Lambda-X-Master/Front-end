import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router'
import Navbar from './components/navbar/Navbar';
import CreateMarket from './components/createmarket/CreateMarket';
import Homepage from './components/homepage/Homepage';
import Homepage2 from './components/homepage/Homepage2';
import PrivateRoute from './components/privateroute/PrivateRoute';
import StallsList from './components/stalls/stallsList';

import VendorForm from "./components/vendor/VendorForm";
import VendorLandingPage from "./components/vendor/VendorLandingPage";
import ProductForm from "./components/product/ProductForm";

import MarketProfilePage from './components/markets/marketProfile'
import ProductByVendor from './components/product/ProductByVendor';
// import ProductByVendorCard from './components/product/ProductByVendorCard';

import MarketLandingPage from "./components/marketLandingPage/marketLandingPage";

import { ContextProvider } from './components/context/state';
import "./App.css";

function App() {
  return (
      <React.Fragment>
        <div className='app-wrapper'>
        <CssBaseline />
        <ContextProvider>
        <Navbar className='nav-bar' />
        <Switch>
          <Route exact path="/" component={Homepage2} />
          <PrivateRoute exact path="/create-market" component={CreateMarket} />
          <Route path="/vendor" component={VendorForm} />
          <Route path="/productForm" component={ProductForm} />
          <Route path="/productsByVendor" component={ProductByVendor} />
          <Route path="/markets" component={MarketLandingPage} />
          <Route path="/stalls/" component={StallsList}/> 
          <Route path="/markets/marketProfile/" component={MarketProfilePage} />
          <Route path="/allVendors" component={VendorLandingPage} />
          {/* <Route
          path="/allVendors/:id"
          render={props => <ProductByVendorCard {...props} />}
        /> */}
        </Switch>
        </ContextProvider>
        </div>
      </React.Fragment>
  )
}

export default withRouter(App);
