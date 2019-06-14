import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles/'
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import mainImage from '../../images/jakub-kapusnak-296131-unsplash';
import './landingpage-styles.css';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       // textAlign: 'j',
//       color: theme.palette.text.secondary,
//     },
//   }));


// const styles = theme => ({
//     root: {
//               flexGrow: 1,
//             },
//             paper: {
//             //   padding: theme.spacing(2),
//               // textAlign: 'j',
//             //   color: theme.palette.text.secondary,
//             }
//     card: {
//       maxWidth: 345,
//       borderRadius: '50%',
//       backgroundColor: '#b0b4b969',
//       height: '280px',
//       border: '1px solid red',
//       position: 'relative',
//       bottom: '300px',
//       left: '470px',
//       width: '30%',
//     },
//     media: {
//       // height: 140,
//       height: 240,
//       width: 240,
//       borderRadius: '50%'
//     },
//     textField: {
//       marginLeft: theme.spacing.unit,
//       marginRight: theme.spacing.unit,
  
//     },
//     input: {
      
//         border: 'none',
//         borderRadius: '2rem',
//         backgroundColor: '#b0b4b969',
//         color: 'white',
//         fontSize: '1.2rem',
//         marginBottom: '2rem',
//         paddingLeft: '4rem',
//         height: '60px',
//         width: '40%',
//     }, 
  
//     button: {
//       border: '1px solid white',
//       backgroundColor: 'none', 
//       borderRadius: '2rem',
//       color: 'white',
//       fontSize: '1rem',
//       height: '70px',
//       position: 'relative',
//       bottom: '250px',
//       right: '100px',
//       marginTop: '3rem',
//       width: '50%',
//   }
   
  //});
class LandingPage extends Component {
    constructor (props) {
        super (props)
    }
   
    render () {
    
        // const classes = useStyles();
        // const { classes } = this.props;
        return (
            // <CssBaseline />
      <div className='home'>
          <Typography variant='h1' component='h2' style={{
              color: 'white', 
              fontWeight: 'bold', 
              letterSpacing: '17px'
            }}>
                MARKET ORGANIZER
          </Typography>
          {/* <Grid container Gridspacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>info goes here</Paper>
          
        </Grid> */}
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid> */}
        {/* </Grid>  */}
        {/* <Typography component="div" className='home' 
        style={{ 
            // -webkit-background-size: cover;
            // -moz-background-size: cover;
            // -o-background-size: cover;
            // backgroundSize: 'cover',
            // background: url('../../images/jakub-kapusnak-296131-unsplash.jpg'),
            // backgroundSize: 'cover',
          

            // backgroundColor: '#cfe8fc',
            // height: '100vh' 
        }} /> */}
      </div>
        )
    }
}

// export default (styles)(LandingPage)
export default (LandingPage)