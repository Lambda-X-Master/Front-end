import React, { useEffect } from "react";
import styled from 'styled-components'
import {Route, NavLink, Link, Switch } from 'react-router-dom';
import StallsList from "../stalls/stallsList";
import MarketLandingPage from '../markets/marketProfile';
import Axios from "axios";

const ProfileCard = styled.div`
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: black;
    margin: 3%;
    width: 90%;
    display: flex;
    flex-direction: row; 
`

const ProfileMiniCard = styled.div`
    width: 33%;
`

const firebase_id = null; 

const MarketProfileCard = (props) => {

return (
    <ProfileCard>
    
    <ProfileMiniCard>
    Insert Market Image Here
    </ProfileMiniCard>

    <ProfileMiniCard>
    <div>
    <h2>{props.profile.market_name}</h2>
    </div>

    <div>
    {props.profile.address}
    {props.profile.city}
    {props.profile.state}
    {props.profile.zipcode}
    </div>

    <div>
    {props.profile.contact_first_name}
    {props.profile.contact_last_name}
    
    {props.profile.phone_number}

    {props.profile.firebase_id}

    <Link to={{
      pathname: '/stalls/',
      search: `?firebase_id=${props.profile.firebase_id}`,
      state: { firebase_id: props.profile.firebase_id}
    }}>
    Rent Stalls
    </Link>
    <Link to={{
      pathname: '/markets/marketProfile/',
      search: `?firebase_id=${props.profile.firebase_id}`,
      state: { firebase_id: props.profile.firebase_id}
    }}>
    See Market Profile
    </Link>
    </div>
    </ProfileMiniCard>

    <ProfileMiniCard>
    Insert market description here.     
    </ProfileMiniCard>

    </ProfileCard>
)
}


export default MarketProfileCard;