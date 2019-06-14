import React, { useEffect, useState} from 'react'
import axios from '../../axios-instance';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StripeCheckout from "react-stripe-checkout";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '2rem',
    marginBottom: '4rem'
  },
  cartItems: {
    display: 'flex',
    // marginTop: '3rem',
    justifyContent: 'center'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    padding: '2rem'
  },

  headers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '75%',
    margin: '0 auto'

  },
  priceHeader: {
      marginRight: '20rem',
      fontSize: '1.3rem',
  },
  qtyHeader: {
    marginRight: '7rem',
    fontSize: '1.3rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-around',
    // textAlign: 'justify',
    // color: theme.palette.text.secondary,
    color: 'black',
  },
  subtotal: {
      fontSize: '2rem',
      textAlign: 'right',
      marginRight: '10rem',
      marginTop: '3rem',
  },
  checkout: {
      
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3rem',
    // '&:hover': {
    //     backgroundColor: "#F5885F",
    //     textDecoration: 'underline'
    //  },
  },
  checkoutButton: {
    backgroundColor: '#F5885F',
    color: 'white',
     '&:hover': {
        backgroundColor: "lightgreen",
        color: 'white',
        border: '1px solid #F5885F'
     },
  }
}));

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [stripeId, setStripeId] = useState('')

    useEffect(() => {
        let firebase_id = localStorage.getItem('firebaseId')
        console.log(firebase_id)
        axios.get(`/cart/${firebase_id}`)
            .then(res => {
                console.log(res.data)
                let cartData = res.data[0]
                let total = res.data[1]
                console.log('Total', total)
                console.log('cart data', cartData)
                setCartItems(cartData)
                setTotal(total)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const  handleChange = (event)  => {
        setQuantity(oldQuantity => ({
          ...oldQuantity,
          [event.target.name]: event.target.value,
        }));
      }
    // console.log(cartItems.length, 'cart item type')
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Shopping Cart</Typography>
            <div className={classes.headers}>
                <Typography className={classes.priceHeader}>Price</Typography>
                <Typography className={classes.qtyHeader}>Quantity</Typography>
           </div>
           
            {Object.keys(cartItems).map((item, i) => (
            <div  key={i}>
                {/* {setCartItems(cartItems.stripeAccountId)} */}
                {/* {console.log(cartItems.stripeId, 'stripe')} */}
             <Grid container spacing={6} className={classes.cartItems}>
                <Grid item xs={10}>
                
                    <Paper className={classes.paper}>
                        <Typography variant="h6" component="h5">
                            Stall Dimensions: Length: {cartItems[item].size.len} ft. X  Width: {cartItems[item].size.width} ft.
                        </Typography>
                        <Typography variant="h6" component="h5">
                        
                            Stall Price: ${cartItems[item].price} 
                        </Typography>
                        <FormControl variant="outlined" className={classes.formControl}>
                            {/* <InputLabel  htmlFor="outlined-age-simple">
                            Quantity
                            </InputLabel> */}
                            <Select
                                value={quantity}
                                onChange={handleChange}
                                placeholder='Quantity'
                                input={<OutlinedInput  name="quantity" id="outlined-age-simple" />}
                            >
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={3}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    ))
} 
         <Typography className={classes.subtotal}>Subtotal({cartItems.length} items): ${total}</Typography>
         {/* <StripeCheckout
        stripeKey="pk_test_R4kvaWNKnku78DL2dwXpLiTq00R1MdFKhb"
        token={handleToken}
        amount={total}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      /> */}
         <div className={classes.checkout}>
         <Button variant="outlined" size="large" color="primary" className={classes.checkoutButton}>
             <Typography>Proceed to checkout</Typography>
         </Button>
         </div>
        </div>

    )
}

export default Cart;