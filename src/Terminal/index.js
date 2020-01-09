import React, { useState, useContext} from 'react'
import Terminal from 'terminal-in-react'
// import commands  from './commands'
import { Container } from "./styles";

import RoomContext from '../Contexts/roomContext'
import axios from 'axios'           


const registeredUser = `{"username":"CapKirk", "password1":"asswerd1", "password2":"asswerd1"}`
const loginUser = `{"username":"CapKirk", "password":"asswerd1"}`
const url = `https://lambda-beastmode.herokuapp.com`

const Term = props => {
  const {title, setTitle} = useContext(RoomContext)
  // const command = commands()
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
                setTitle(room.title)
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
                setTitle(room.title)
            })
        } catch (err) {
            console.log(err.stack)
        }
    },
    // say, 
}

    return (
      <Container id="term" >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ 
            fontWeight: "bold", 
            fontSize: "1em",
            width:"49vw" 
          }}
          watchConsoleLogging
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: () => "What's really hood",
            // popup: () => alert('Terminal in React'),
            register: () => command.register(),
            login: () => command.login(),
            initialize: () => {
              command.initialize()
              setTitle(localStorage.getItem('title'))
              console.log(title)
            },
            move: (args) => {
              command.move(args)
              setTitle(localStorage.getItem('title'))
              console.log(title)
            }
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            // alert: 'alert', popup: 'alert',
            initialize: 'starts the game',
            move: 'change rooms'
          }}
          msg='Welcome to the Adventure.. Press help to see the command pallete'
        />
      </Container>
    )
  }
  
export default Term