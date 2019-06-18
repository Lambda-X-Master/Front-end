import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "../../axios-instance";
import Stall from "./stall.js";

// {
//     // "id": 0,
//     // "size": {
//     // },
//     // "market_id": "",
//     // "available": false,
//     // "qty": 0
// }

const StallsContainer = styled.div` 
    width: 850px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StallsList = (props) => {

    const [stalls, setStalls] = useState([]);
    const [market, setMarket] = useState({})
    // const [hasAStallChanged, setStallChangeStatus] = useState(false);

    // useEffect(() => {
    //     axios.get(`/stalls/market/${props.location.state.firebase_id}`)
    //     .then(res => {
    //         console.log("Stalls : ", res.data)
    //         let stallItems = res.data.stallData;
    //         // stalls = stalls.map(stall => JSON.parse(stall));
    //        setStalls(stallItems);
    //         console.log("stalls", stalls);
    //        setStallChangeStatus(false);
    //     }).catch(err => {
    //             console.log(err.message);
    //     })


    // }, [hasAStallChanged]);

    useEffect(() => {
        axios.get(`/stalls/market/${props.location.state.firebase_id}`)
        .then(res => {
            console.log("Stalls : ", res.data)
            let stallItems = res.data.stallData;
            const market = res.data.marketData
            setMarket(market)
            // stalls = stalls.map(stall => JSON.parse(stall));
            console.log("stalls",typeof stalls);
           setStalls(stallItems);
            
        //    setStallChangeStatus(false);
        }).catch(err => {
                console.log(err.message);
        })


    }, []);

    const addToCart = (stalls_id) => {
        const cart_id = localStorage.getItem('firebaseId')
        console.log(cart_id, 'vendor firebase id')
        axios.post(`cart/add-stall-to-cart/${cart_id}`, {stalls_id})
    }

 
    // const cart_id = localStorage.getItem('firebaseId')
    console.log("Getting stalls ", stalls);
    return(
        <StallsContainer>
            <h2>Market Name: {market.market_name}</h2>
            <h2>Market street: {market.address}</h2>
            <h2>Market city: {market.city}</h2>
            <h2>Market state: {market.state}</h2>
            <h2>Market phone number: {market.phone_number}</h2>
            {Object.keys(stalls).map((stall, index) => (
                
                <div key ={index}>
                    {console.log(stalls[stall].id, 'stall id')}
                    <h2>Size: length: {stalls[stall].size.length} X width: {stalls[stall].size.width}</h2>
                    <h2>Price: ${stalls[stall].price}</h2>
                    <button onClick={() => addToCart(stalls[stall].id)}>Add To Cart</button>
                </div>
            ))}
            {/* <h2> List of available stalls for {props.location.state.market_name}</h2>
            {stalls.map(stall_item => {
                console.log(stall_item, 'stall item')
                return (
                    <div>
                        {stall_item}
                    </div>
                )
                // return (<Stall stall={stall_item} setStallChangedStatus={setStallChangeStatus}/>)
            })} */}
        </StallsContainer>
    )
}

export default StallsList;
