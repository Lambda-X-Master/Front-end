import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'

import { 
    Main,
    Bridge,
    Container
} from "./styles";

import Terminal from '../Terminal' 
import Map from '../Map'

const Game = () => {
    const [title, setTitle] = useState('')
    return (
        <Main>
            <Grid container spacing={0} >
                <Grid item xs={12} s={12} >
                    <Bridge id='bridge' updateTitle={setTitle} title={title} />
                </Grid>
                <Grid item xs={6} s={6} >
                    <Terminal id='term' updateTitle={setTitle} title={title} />
                </Grid>
                <Grid item xs={6} s={6} >
                    <Map id='map' updateTitle={setTitle} title={title} />
                </Grid>
            </Grid> 
        </Main>
    )
}

export default Game