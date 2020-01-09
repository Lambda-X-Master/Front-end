import React from 'react'
import { 
    Main,
    Bridge,
    Container
} from "./styles";

import Terminal from '../Terminal' 
import Map from '../Map'

const Game = () => {
    return (
        <Main>
            <Container>
                <Bridge id='bridge' />
                <Terminal id='term' />
                <Map id='map' />
            </Container> 
        </Main>
    )
}

export default Game