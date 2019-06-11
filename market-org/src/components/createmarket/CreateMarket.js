import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import axios from '../../axios-instance';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Container, Paper, withStyles, Button } from '@material-ui/core'


const styles = {
    paperContainer: {
        padding: '24px',
        paddingBottom: '50px',
        marginTop: '48px',
        marginBottom: '48px',

    }
};

class CreateMarket extends React.Component {
    state = {
        marketName: '',
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    }

    routeToHome = () => {
        this.props.history.push("/")
    }
    
    initStripeConnection = () => {
        // const newmarket = {
        //     firebase_id: 'DRuaCJxSQUQYRr1iRipl1Ty4OgP2',
        //     newmarket: this.state
        // }
        // console.log('newmarket', newmarket)
        console.log("initstripe")
        axios.get('/stripe/authorize')
             .then(res => {
                window.location.href=res.data
             })
             .catch(err => {
                 console.log(err)
             })
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render() {
        const { classes } = this.props;
        const { marketName, firstName, lastName, address1, address2, city, state, zipCode, country } =  this.state;
        return (

            <React.Fragment>
                <Container style={{ width: '750px' }}>
                    <Paper className={classes.paperContainer}>
                        <Typography variant="h6" gutterBottom style={{ textAlign: 'center', fontSize: '32px' }}>
                            Market Details
                    </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="marketName"
                                    name="marketName"
                                    label="Market Name"
                                    value={marketName}
                                    onChange={this.changeHandler}
                                    fullWidth
                                    autoComplete="fname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={this.changeHandler}
                                    label="First name"
                                    fullWidth
                                    autoComplete="fname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={this.changeHandler}
                                    label="Last name"
                                    fullWidth
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    value={address1}
                                    onChange={this.changeHandler}
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="billing address-line1"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="address2"
                                    name="address2"
                                    value={address2}
                                    onChange={this.changeHandler}
                                    label="Address line 2"
                                    fullWidth
                                    autoComplete="billing address-line2"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    value={city}
                                    onChange={this.changeHandler}
                                    label="City"
                                    fullWidth
                                    autoComplete="billing address-level2"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                     id="state"
                                     value={state}
                                     onChange={this.changeHandler}
                                     name="state"
                                     label="State/Province/Region"
                                     fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zipCode"
                                    value={zipCode}
                                    onChange={this.changeHandler}
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="billing postal-code"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="country"
                                    name="country"
                                    value={country}
                                    onChange={this.changeHandler}
                                    label="Country"
                                    fullWidth
                                    autoComplete="billing country"
                                />
                            </Grid>
                        </Grid>
                        <div style={{display: 'flex', justifyContent:'space-between', marginTop: '40px'}}>
                            <Button variant="contained" color="primary" onClick={this.routeToHome}>
                                Back
                            </Button>
                         
                            <Button variant="contained" color="primary" onClick={this.initStripeConnection}>
                               Submit
                             </Button>
                          
                        </div>
                    </Paper>
                </Container>
            </React.Fragment>
        )
    }

}


export default withRouter(withStyles(styles)(CreateMarket));