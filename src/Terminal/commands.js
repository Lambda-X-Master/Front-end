import React from 'react'
import axios from 'axios'           

const registerUrl = 'localhost:8000/api/registration/'
const registeredUser = `{"username":"CapKirk", "password1":"asswerd1", "password2":"asswerd1"}`
const loginUser = `{"username":"CapKirk", "password":"asswerd1"}`
const loginUrl = 'localhost:8000/api/login/'
const url = `https://lambda-mud-test.herokuapp.com/`


export const commands = {
    register: () => {
        try {
            const key = axios.post(`${url}/api/registration`, `${registeredUser}` )
            console.log(key)
        } catch (err) {
            console.log(err)
        }
    },
    login: () => {
        try {
            const key = axios.post(`${url}/api/login`, `${loginUser}`)
            console.log(key)
        } catch (err) {
            console.log(err)
        }
    },
    initialize: () => {
        try {
            const init = axios.get('localhost:8000/api/adv/init/', )
        } catch (err) {
            console.log(err)
        }
    },
    // move,
    // say, 
}

// export default commands
