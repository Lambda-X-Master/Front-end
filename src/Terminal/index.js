import React, { useState } from 'react'
import Terminal from 'terminal-in-react'
import { commands } from './commands'

import { Container } from "./styles";

const index = () => {

    return (
      <Container id="term" >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          watchConsoleLogging
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: () => "What's really hood",
            popup: () => alert('Terminal in React'),
            register: () => commands.register(),
            login: () => commands.login(),
            initialize: () => commands.initialize(),
            move: (args) => commands.move(args)
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='Welcome to the Adventure.. Press help to see the command pallete'
        />
      </Container>
    )
  }
  
export default index