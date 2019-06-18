import React, {useContext } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router'
import Navbar from './components/navbar/Navbar';
import SignIn from './components/login/SignIn';
import SignUp from './components/register/SignUp';
import LandingPage from './components/landingpage/landingpage';
import CreateMarket from './components/createmarket/CreateMarket';

import Homepage2 from './components/homepage/Homepage2';
import PrivateRoute from './components/privateroute/PrivateRoute';
import StallsList from './components/stalls/stallsList';


import VendorNav from './components/vendor-nav/VendorNav';
import VendorForm from "./components/vendor/VendorForm";
import VendorLandingPage from "./components/vendor/VendorLandingPage";
import ProductForm from "./components/product/ProductForm";
import UpdateProductForm from "./components/product/UpdateProductForm";
import ProductByVendor from './components/product/ProductByVendor';
import OneVendorPublic from './components/vendor/OneVendorPublic';
import OneVendorPrivate from './components/vendor/OneVendorPrivate';
import MarketProfilePage from './components/markets/marketProfile';
import VendorCart from './components/cart/cart';
import MarketLandingPage from "./components/marketLandingPage/marketLandingPage";
import VendorsPerMarket from "./components/marketLandingPage/VendorsPerMarket";

import { ContextProvider } from './components/context/state';
import { AuthContext } from "./components/authContext/authState";
import "./App.css";


function App() {
  // const { currentUser } = useContext(AuthContext);
  // console.log(currentUser, 'from app js')
  return (
      <React.Fragment>
        <div className='app-wrapper'>
        <CssBaseline />
        <ContextProvider>
        <Navbar className='nav-bar' />
          {/* <VendorNav/> */}
        {/* <Navbar /> */}
        <Switch>
          <Route exact exact path="/" component={Homepage2} />
          <PrivateRoute exact path="/create-market" component={CreateMarket} />
          <Route path="/vendor" component={VendorForm} />
          <Route path="/productForm" component={ProductForm} />
          <Route path='/signup' component={SignUp}/>
          <Route path='/signin' component={SignIn}/>
          {/* <Route path="/updateProductForm" component={UpdateProductForm} /> */}
          <Route path="/productsByVendor" component={ProductByVendor} />
          <Route path="/productsByVendor/:id/updateProductForm" component={UpdateProductForm} />
          <Route exact path="/markets" component={MarketLandingPage} />
          <Route path="/vendorsByMarket/:firebase_id" component={VendorsPerMarket} />
          <Route path="/markets/marketProfile/" component={MarketProfilePage} />
          <Route path="/landing-page" component={LandingPage}/>
          <Route path="/stalls/" component={StallsList}/>  
          <Route path="/allVendors" component={VendorLandingPage} />
          <Route path="/oneVendorPublic/:firebase_id" component={OneVendorPublic} />
          <Route path="/oneVendorPrivate/:firebase_id" component={OneVendorPrivate} />        
          <Route path='/cart/:id' component={VendorCart}/>
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
