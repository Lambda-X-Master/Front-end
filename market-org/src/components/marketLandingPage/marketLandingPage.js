import React, { useState, useEffect, useContext,} from 'react';
import { MarketProfilesContext } from '../context/GlobalContext.js';
import { withStyles, Typography, TextField, Button } from '@material-ui/core';
import MarketProfileCard from "./marketProfileCard";

import axios from '../../axios-instance';

const MarketLandingPage = (props) => {

    const [markets, setMarkets] = useState([]);
    const [marketProfiles] = useContext(MarketProfilesContext);
    console.log("check marketProfiles:", marketProfiles);

    useEffect(() => {
        console.log("Error");
        axios.get('/markets')
        .then(res => {
            console.log(res.data)
            let markets = res.data;
            setMarkets(res.data)
        })
            .catch(err => {
                console.log(err.message)
        })
    }, []);

    console.log("Rendering");

    return (
        <React.Fragment>
        <div className="marketLandingPage"> 
        Test
        {markets.map(market => {

        return (<MarketProfileCard profile={market} />)

        })}

        </div>
        </React.Fragment>
    )
}

export default MarketLandingPage;