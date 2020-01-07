import React, { useState } from 'react'
import { Route } from "react-router-dom";

import Game from '../Game'

const Routes = () => {
    
    return (
        <>
            <Route path='/'  component={Landing} /> 
            <Route path='/game'  component={Game} /> 
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
