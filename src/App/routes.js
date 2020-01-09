import React, { useState } from 'react'
import { Route } from "react-router-dom";
import { PrivateRoute } from "../utilities/PrivateRoute";

import Game from '../Game'
import Login from '../Login'
import Register from '../Register'
import Landing from '../Landing'

const Routes = () => {
    
    return (
        <>
            <Route exact path='/'  component={Landing} /> 
            <PrivateRoute path='/game'  component={Game} /> 
            <Route path='/login'  component={Login} /> 
            <Route path='/register'  component={Register} /> 
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
        </>
    )
}

export default Routes
