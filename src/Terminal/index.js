import React from 'react'
import Terminal from 'terminal-in-react'
import { commands } from './commands'

const index = () => {
    return (
      <div>
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
            initialize: () => commands.initialize()
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='Welcome to the Adventure.. Press help to see the command pallete'
        />
      </div>
    )
  }
  
export default index