import React from 'react';
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'

import Navbar from '../navbar/Navbar';
import Searchbar from '../navbar/Searchbar';

import fruit from '../../images/fruit-stand.jpg'
import market from '../../images/market-stand.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paperImageOne: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${fruit})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%'

    },
    paperImageTwo: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${market})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%'
    }
}))

const Homepage = (props) => {

    const classes = useStyles();

    return(
        <React.Fragment>
            <Container maxWidth="lg">
                <Navbar />
                <Grid container style={{ height: '500px' }}>
                    <Grid item xs={6}>
                        <Paper className={classes.paperImageOne}>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paperImageTwo}>
                        </Paper>
                    </Grid>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Searchbar />
                </div>
            </Container>
      </React.Fragment>
    )
}

export default Homepage;