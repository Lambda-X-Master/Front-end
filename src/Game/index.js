import React from 'react'
import { 
    Main,
} from "./styles";

import Terminal from '../Terminal' 
import Map from '../Map'

const Game = () => {
    return (
        <Main>
            <Terminal />
            <Map /> 
        </Main>
    )
}

export default Game