import React, { useState, useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import axios from '../../axios-instance';
import queryString from 'query-string';

import { AuthContext } from '../authContext/authState';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Container, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core'




const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: '25%',
        maxHeight: '100vh',
        overflowY: 'auto',
        top: '40%',
        left: '35%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
    paperContainer: {
        padding: '24px',
        paddingBottom: '50px',
        marginTop: '48px',
        marginBottom: '48px',

    },

}));

const CreateMarket = (props) => {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const [quantity, setQuantity] = useState('')

    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')
    const [available, setAvailable] = useState(true)

    const [open, setOpen] = useState(false);

    const [market_name, setMarketName] = useState('')
    const [contact_first_name, setFirstName] = useState('')
    const [contact_last_name, setLastName] = useState('')
    const [address, setAddres] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipCode] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    // const [stalls, setStalls] = useState([])



    const routeToHome = () => {
        props.history.push("/")
    }

    const initStripeConnection = () => {

        const market = {
            market_name,
            contact_first_name,
            contact_last_name,
            address,
            city,
            state,
            zipcode,
            phone_number

        }
        console.log("initstripe")
        axios({
            method: "get",
            url: "stripe/authorize",
            params: {
                ...market
            }
        })
            .then(res => {
                console.log('createmarket res data:', res.data)
                window.location.href = res.data
                addMarket()
            })
            .catch(err => {
                console.log(err)
            })


    }

    const addMarket = () => {

        const market = {
            market_name,
            contact_first_name,
            contact_last_name,
            address,
            city,
            state,
            zipcode,
            phone_number

        }
        console.log(currentUser.uid)
        axios.post(`/markets/${currentUser.uid}/add-market`, market)
            .then(res => {
                console.log('ADD MARKET', res.data)
                addStall()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const addStall = () => {

        const stall = {
            size,
            price,
            available
        }
        for(let i = 0; i < quantity; i++) {
            console.log(currentUser)
            axios.post(`/stalls/market/${currentUser.uid}`, stall)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            }) 
        }
       
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const addMore = () => {
    //     console.log(stalls)
    //     setStalls([...stalls, stalls])
    // }

    // const createUi = () => {
    //     return stalls.map((el, i) => {
    //         console.log("el", el)
    //         return (
    //             <div key={i} style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
    //                 <TextField
    //                     style={{ width: '20%' }}
    //                     id="outlined-number"
    //                     label="quantity"
    //                     value={el || ''}
    //                     onChange={event => handleChange(i, event)}
    //                     type="number"
    //                     className={classes.textField}
    //                     InputLabelProps={{
    //                         shrink: true,
    //                     }}
    //                     margin="normal"
    //                     variant="outlined"
    //                 />
    //                 <TextField
    //                     style={{ width: '20%' }}
    //                     id="outlined-bare"
    //                     label="size(ft)"
    //                     value={el || ''}
    //                     defaultValue="10x10"
    //                     className={classes.textField}
    //                     onChange={event => handleChange(i, event)}
    //                     margin="normal"
    //                     variant="outlined"
    //                     inputProps={{ 'aria-label': 'bare' }}
    //                 />
    //                 <TextField
    //                     id="outlined-adornment-amount"
    //                     style={{ width: '20%' }}
    //                     className={classes.textField}
    //                     variant="outlined"
    //                     margin="normal"
    //                     label="price"
    //                     value={el || ''}
    //                     onChange={event => handleChange(i, event)}
    //                     InputProps={{
    //                         startAdornment: <InputAdornment position="start">$</InputAdornment>,
    //                     }}
    //                 />
    //             </div>
    //         )
    //     }
    //     )
    // }

    // const handleChange = (i, event) => {
    //     let values = [...stalls]
    //     values[i] = event.target.value;
    //     setStalls({ values })
    // }


    return (

        <React.Fragment>
            <Container style={{ width: '50%' }}>
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
                                value={market_name}
                                onChange={(e) => setMarketName(e.target.value)}
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                value={contact_first_name}
                                onChange={(e) => setFirstName(e.target.value)}
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
                                value={contact_last_name}
                                onChange={(e) => setLastName(e.target.value)}
                                label="Last name"
                                fullWidth
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddres(e.target.value)}
                                label="Address line 1"
                                fullWidth
                                autoComplete="billing address-line1"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                label="City"
                                fullWidth
                                autoComplete="billing address-level2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                name="state"
                                label="State/Province/Region"
                                fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zipCode"
                                value={zipcode}
                                onChange={(e) => setZipCode(e.target.value)}
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="billing postal-code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="phone_number"
                                name="phone_number"
                                value={phone_number}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                label="Telephone / Contact"
                                fullWidth
                                autoComplete="billing phone_number"
                            />
                        </Grid>
                        <div style={{ width: '100%', marginTop: '25px' }}>
                            <Typography variant="h6" gutterBottom style={{ textAlign: 'center', fontSize: '16px' }}>
                                Available Stalls
                        </Typography>
                        </div>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                            <TextField
                                style={{ width: '20%' }}
                                id="outlined-number"
                                label="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                style={{ width: '20%' }}
                                id="outlined-bare"
                                label="size(ft)"
                                value={size}
                                defaultValue="10x10"
                                className={classes.textField}
                                onChange={e => setSize(e.target.value)}
                                margin="normal"
                                variant="outlined"
                                inputProps={{ 'aria-label': 'bare' }}
                            />
                            <TextField
                                id="outlined-adornment-amount"
                                style={{ width: '20%' }}
                                className={classes.textField}
                                variant="outlined"
                                margin="normal"
                                label="price"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />
                        </div>
                        {/* {createUi()} */}
                        <div>
                            <Button onClick={addStall}>Add More</Button>
                        </div>
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                        <Button variant="contained" color="primary" onClick={routeToHome}>
                            Back
                        </Button>

                        <Button variant="contained" color="primary" onClick={handleOpen}>
                            Submit
                        </Button>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Use Stripe service?"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    We use Stripe to make sure you get paid on time and to keep your personal bank and details secure. Do you wish to proceed?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button onClick={handleClose} color="primary" style={{ backgroundColor: 'lightGrey', width: '100px' }}>
                                    Back
                                 </Button>
                                <Button onClick={handleClose} color="primary" style={{ backgroundColor: 'lightGrey', width: '100px' }} onClick={initStripeConnection} autoFocus>
                                    Continue
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Paper>
            </Container>
        </React.Fragment>
    )
}


export default withRouter(CreateMarket);