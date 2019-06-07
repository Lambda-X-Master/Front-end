import React, { useEffect, useContext, useState } from 'react';
import { Route } from 'react-router-dom';
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'

// import Navbar from '../navbar/Navbar';
import Searchbar from '../navbar/Searchbar';
import { AuthContext } from '../authContext/authState';

import axios from 'axios';

import fruit from '../../images/fruit-stand.jpg'
import market from '../../images/market-stand.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paperImageOne: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${fruit})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%'

    },
    paperImageTwo: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${market})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%'
    }
}))

const Homepage = (props) => {

    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const { currentUser } = useContext(AuthContext);



    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
        axios.get('http://localhost:5000/users', currentUser)
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
            .catch(err => {
                console.log(err.message)
            })

    }, [])

    console.log("curr", currentUser)

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                {/* <Navbar /> */}
                <Grid container style={{ height: '500px' }}>
                    <Grid item xs={6}>
                        <Paper className={classes.paperImageOne}>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paperImageTwo}>
                        </Paper>
                    </Grid>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Searchbar />
                </div>
                {currentUser ?
                    <div style={{ textAlign: 'center', marginTop: '200px' }}>
                        {users && users.map(user => {
                            return (
                                <div key={user.id}>{user.email}</div>
                            )
                        })}
                    </div> : <h1>You must log in</h1>
                }
            </Container>
        </React.Fragment>
    )
}

// <div style={{ textAlign: 'center', marginTop: '200px' }}>
// {users && users.map(user => {
//     return (
//         <div key={user.id}>{user.email}</div>
//     )
// })}
// </div>

export default Homepage;