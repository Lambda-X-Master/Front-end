import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';


const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then(({user}) => {
            console.log("user:", user);
            })
            .catch(err => {
                console.log(err.message)
            })   
    }


    const signInWithEmailAndPassword = () => {
  
        auth.signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                console.log(user)
            })
            .catch(err => {
                console.log(err);
            })
     }

     return (
        <div>
            <form autoComplete="off">
                <input
                    label="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                 />
                 <input
                    label="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                 />
                 <button type='button' onClick={signInWithEmailAndPassword}>
                    Sign In
                </button>
            </form>
            <button type='button' onClick={signInWithGoogle}>
                Sign In with Google
            </button>
        </div>
    )

}

export default SignIn;