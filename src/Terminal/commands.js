import React, {useContext} from 'react'
import axios from 'axios'           

import RoomContext from '../Contexts/roomContext'  

const registeredUser = `{"username":"CapKirk", "password1":"asswerd1", "password2":"asswerd1"}`
const loginUser = `{"username":"CapKirk", "password":"asswerd1"}`
const url = `https://lambda-beastmode.herokuapp.com`

const commands = () => {
    // const {title, setTitle} = useContext(RoomContext)

    const command = {
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
                const token = localStorage.getItem("token")
                axios.get(
                    `${url}/api/adv/init/`,
                    { headers: { Authorization: `Token ${token}`} }
                ).then((res) => {
                    const room = res.data;
                    console.log(`WELCOME TO SPACE ${room.name}`)
                    console.log(`You are currently located at: ${room.x_coord}, ${room.y_coord} - ${room.title}`)
                    console.log(`You see: ${room.description}`)
                    const numPlayers = room.players.length
                    if (numPlayers > 0) {
                        if (numPlayers === 1) {
                            console.log(`You see a person: ${room.players[0]}`)
                        } else {
                            console.log(`You see ${numPlayers}: ${room.players.reduce((player, players) => `${player}, ${players}`)}`)
                        }
                    } else {
                        console.log("You see no one")
                    }
                    localStorage.setItem("room", room)
                })
            } catch (err) {
                console.log(err.stack)
            }
        },
        move: (args) => {
            const direction = args[1]
            if (!["n", "e", "s", "w"].includes(direction)) {
                console.log("You must choose one of 4 directions: n s e w")
                return
            }
            try {
                const token = localStorage.getItem("token")
                axios.post(
                    `${url}/api/adv/move/`, 
                    {"direction": `${direction}`},
                    { headers: {
                        Authorization: `Token ${token}`,
                        "Content-Type": "application/json"
                    }}
                ).then((res) => {
                    const room = res.data
                    console.log(room)
                    localStorage.setItem("room", room)
                    localStorage.setItem('title', room.title)
                    localStorage.setItem('description', room.description)
                })
            } catch (err) {
                console.log(err.stack)
            }
        },
        // say, 
    }
    return (
        command
    )
}

export default commands




