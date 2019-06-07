import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import  { AuthContext } from '../authContext/authState';

const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    const { currentUser } = useContext(AuthContext);
    console.log("private:", currentUser)
    return (
        <Route
            {...rest}
            render={routeProps => 
            currentUser ? (
                <RouteComponent {...routeProps} />
            ) : (
                null
            )
            }
        />
    )
}

export default PrivateRoute;