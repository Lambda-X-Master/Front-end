import React from 'react'
import axios from 'axios'           

const registerUrl = 'localhost:8000/api/registration/'
const registeredUser = `{"username":"CapKirk", "password1":"asswerd1", "password2":"asswerd1"}`
const loginUser = `{"username":"CapKirk", "password":"asswerd1"}`
const loginUrl = 'localhost:8000/api/login/'
const url = `https://lambda-mud-test.herokuapp.com`
const direction = 'e'
const Token = ''
const token = '284c818834f7c8c56561c73f840fc234a14e819b'



export const commands = {
    register: () => {
        try {
            const key = axios.post(
                `${url}/api/register/`, 
                `${registeredUser}`
            )
            console.log(key)
        } catch (err) {
            console.log(err)
        }
    },
    login: () => {
        try {
            const key = axios.post(
                `${url}/api/login/`, 
                `${loginUser}`
            )
            console.log(key)
        } catch (err) {
            console.log(err)
        }
    },
    initialize: () => {
        try {
            const init = axios.get(
                `https://lambda-beastmode.herokuapp.com/api/adv/init/`,
                { "Authorization": `Token ${token}`} 
            )
            console.log(init)
        } catch (err) {
            console.log(err.stack)
        }
    },
    move: () => {
        try {
            const mv2rm = axios.post(
                `${url}/`, 
                {"direction": `${direction}`}, 
                { "Authorization": `Token ${token}` }
            )
            console.log(mv2rm)
        } catch (error) {
            console.log(error.stack)
        }
    }
    // say, 
}

// export default commands
