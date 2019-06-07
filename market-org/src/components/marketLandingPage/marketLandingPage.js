import React, { useState, useEffect, useContext,} from 'react';
import { MarketProfilesContext } from '../context/GlobalContext.js';
import { withStyles, Typography, TextField, Button } from '@material-ui/core';
import MarketProfileCard from "./marketProfileCard";
import styled from 'styled-components';

import axios from '../../axios-instance';

const MarketLandingContainer = styled.div`
    width: 850px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

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
        <MarketLandingContainer> 
        <h1> List of Markets</h1>
        {markets.map(market => {

        return (<MarketProfileCard profile={market} />)

        })}


        </MarketLandingContainer>
        </React.Fragment>
    )
}


export default MarketLandingPage;