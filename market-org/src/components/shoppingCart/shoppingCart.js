// import React, { useState, useEffect, useContext,} from 'react';
// import { shoppingCartContext } from '../context/GlobalContext.js';
// import { withStyles, Typography, TextField, Button } from '@material-ui/core';
// import MarketProfileCard from "./marketProfileCard";
// import styled from 'styled-components';

// import axios from '../../axios-instance';

// const shoppingCart = (props) => {

//     const [shoppingCart, setShoppingCart] = useState([]);
//     const [marketProfiles] = useContext(shoppingCartContext);
//     console.log("check shoppingCartContext", marketProfiles);

//     useEffect(() => {
//         console.log("Error");
//         axios.get(`/cart_items/:${cart_id}`)
//         .then(res => {
//             console.log(res.data)
//             let markets = res.data;
//             setCartItems(res.data)
//         })
//             .catch(err => {
//                 console.log(err.message)
//         })
//     }, []);

//     console.log("Rendering");

//     return (
//         <React.Fragment>

//         // list of cart cart_items
//         {this.state.shoppingCart => {
//             cart_item => 
//         }



//         </React.Fragment>
//     )
// }


// export default MarketLandingPage;