import React from 'react'
import { BrowserRouter, } from "react-router-dom";
import Routes from './routes'

import { Main } from './styles'
import Nav from '../Nav'

import { RouteContext } from "../Contexts/routeContext";

const App = (props) => {
    
    const routeProps = props

    return (
        <RouteContext.Provider value={{routeProps}}>
            <Main>
                <Nav /> 
                <Routes />
            </Main>
        </RouteContext.Provider>
    )
    
}

export default App

