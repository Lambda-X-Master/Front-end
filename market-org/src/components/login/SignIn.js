import React, { useState, useEffect, useContext } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel, withStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Link, withRouter } from 'react-router-dom'
import { auth, googleProvider } from '../../firebase';
import axios from '../../axios-instance';

import { AuthContext } from '../authContext/authState';


const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
});

function SignIn(props) {
	const { classes } = props

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
		.then(({ user }) => {
			console.log("user:", user);
			if (user) {
				const { uid, ra, email } = user;
				localStorage.setItem('token', ra);
				localStorage.setItem('firebaseId', uid);
				if (user.email) {
					const { email } = user;
					console.log("emailuser", user)
					const userObj = {
						email,
						uid,
						
					}
					console.log('userra', user.ra)
					console.log(userObj)
				
						axios.defaults.headers.common['Authorization'] = user.ra
						axios.post('/users/register', { ...userObj })
							.then(res => {
								console.log("res:", res);

							})
							.catch(err => {
								console.log(err)
							})
						props.history.push('/')
					
				}
			}
		})
		.catch(err => {
			console.log(err);
		})

    }


    const signInWithEmailAndPassword = () => {
  
        auth.signInWithEmailAndPassword(email, password)
		.then(({ user }) => {
			console.log("user:", user);
			if (user) {
				const { uid, ra, email } = user;
				localStorage.setItem('token', ra);
				localStorage.setItem('firebaseId', uid);
				if (user.email) {
					const { email } = user;
					console.log("emailuser", user)
					const userObj = {
						email,
						uid,
						
					}
					console.log('userra', user.ra)
					console.log(userObj)
				
						axios.defaults.headers.common['Authorization'] = user.ra
						axios.post('/users/register', { ...userObj })
							.then(res => {
								console.log("res:", res);

							})
							.catch(err => {
								console.log(err)
							})
						props.history.push('/')
					
				}
			}
		})
		.catch(err => {
			console.log(err);
		})
		
	 }
	 
	 const { currentUser } = useContext(AuthContext);



	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
       			</Typography>
				<form className={classes.form} onSubmit={e => e.preventDefault() && false}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email Address</InputLabel>
						<Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={signInWithEmailAndPassword}
						className={classes.submit}>
						Sign in
          			</Button>
					 
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						onClick={signInWithGoogle}
						className={classes.submit}>
						Sign in with Google
          			</Button>
				</form>
			</Paper>
		</main>
	)

}


export default withRouter(withStyles(styles)(SignIn));