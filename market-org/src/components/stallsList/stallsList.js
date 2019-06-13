import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import stall from "./stallsList";

const ListOfStalls = (props) => {

    // const [marketProfiles] = useContext(MarketProfilesContext);
    const [stalls, setStalls] = useState([]);

    // useEffect(() => {
    //     console.log("Error");
    //     axios.get(`/stalls/${props.market_id}`)
    //     .then(res => {
    //         console.log(res.data)
    //         let stalls = res.data;
    //         setMarkets(res.data)
    //     })
    //         .catch(err => {
    //             console.log(err.message)
    //     })
    // }, []);

    console.log("Rendering");

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default ListOfStalls;