import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid, Paper, withStyles, makeStyles, InputBase  } from '@material-ui/core'
import { withRouter } from 'react-router'

import Navbar from './components/navbar/Navbar';
import Searchbar from './components/navbar/Searchbar';
import { auth } from './firebase';

import './App.css';

import fruit from './images/fruit-stand.jpg'
import market from './images/market-stand.jpg'



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
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));


function App() {

  const [users, setUsers] = useState([]);
  const classes = useStyles();
  // useEffect(() => {
  //   axios.get('https://market-organizer.herokuapp.com/users')
  //     .then(res => {
  //       console.log(res)
  //       setUsers(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  // }, [])

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("user:", user)
      if(user) {
        const {uid, ra, email} = user;
        localStorage.setItem('token', ra)
        if(user.email) {
          const { email } = user;
          axios.defaults.headers.common['Authorization'] = user.ra
    
          axios.post('http://localhost:5000/users/register', user)
               .then(res => {
                 console.log("res:", res);
                 console.log("userinthen", user)
                 setUsers(user);
                 localStorage.setItem('fireBaseId', res.data.firebase_id)
               })
               .catch(err => {
                 console.log(err)
               })
        }
      }
    })

  }, [])


//   export const register = (user) => dispatch => {
//     dispatch({
//         type: authTypes.REGISTER_START
//     })
//     axios.defaults.headers.common['Authorization'] = user.ra
//     axios
//         .post(`/api/users/register`, user )
//         .then(res => {
//             // console.log(res.data.user.id, 'in register action')
//             const payload = {
//                 ...res.data,
//                 ...user
//             }
//             dispatch({
//                 type: authTypes.REGISTER_SUCCESS,
//                 payload: payload
//             })
//         })
//         .catch(err => {
//             dispatch({
//                 type: authTypes.REGISTER_FAIL,
//                 payload: err
//             })
//         })
// }





//   auth.onAuthStateChanged((user) => {
//     console.log(user, 'in auth listener')
//     if (user) {
//       const { uid, ra, email } = user;
//       localStorage.setItem('token', ra)
//       if (user.email) {
//         const { email } = user;
//         this.props.oAuth({ firebase_id: uid, email, token: ra })
//       }

//       // this.props.emailLogin(user)
//     }
//     else {
//       this.setState({
//         users: null
//       })
//     }
//   })



  // const storeUser = (user) => {
  //   axios.post('/users/register')
  // } 

  return (

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <Grid container style={{height: '500px'}}>
          <Grid item xs={6}>
            <Paper className={classes.paperImageOne}>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paperImageTwo}>
            </Paper>
          </Grid>
        </Grid>
        <div style={{display: 'flex', justifyContent:'center'}}>
          <Searchbar />
        </div>
        
        <div  style={{textAlign: 'center', marginTop: '200px'}}>
        {/* {users && users.map(user => {
          return (
              <div key={user.id}>{user.email}</div>
          )
        })} */}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default withRouter(App);
