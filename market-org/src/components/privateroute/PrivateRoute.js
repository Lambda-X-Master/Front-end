import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import  { AuthContext } from '../authContext/authState';

const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps => 
            currentUser ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to='/'/>
            )
            }
        />
    )
}

export default PrivateRoute;