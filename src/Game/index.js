import React from 'react'
import Grid from '@material-ui/core/Grid'

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
            <Grid container spacing={0} >
                <Grid item xs={12} s={12} >
                    <Bridge id='bridge' />
                </Grid>
                <Grid item xs={6} s={6} >
                    <Terminal id='term' />
                </Grid>
                <Grid item xs={6} s={6} >
                    <Map id='map' />
                </Grid>
            </Grid> 
        </Main>
    )
}

export default Game