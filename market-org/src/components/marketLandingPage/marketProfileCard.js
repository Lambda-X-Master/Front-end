import React from "react";
import styled from 'styled-components'
import { BrowserRouter as Route, NavLink, Switch } from 'react-router-dom';
import StallsList from "../stalls/stallsList";
import MarketLandingPage from "./marketLandingPage.js";

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

    <NavLink to={`/stalls/${props.profile.firebase_id}`} key={props.profile.firebase_id}>Rent Stalls/</NavLink>
    <Switch>
    <Route exact path="/markets" component={MarketLandingPage} />
    <Route path="/stalls/:id" 
    render={props =><StallsList {...props} 
    market_id={props.profile.firebase_id}/>}
    />  
    </Switch>
    </div>
    </ProfileMiniCard>

    <ProfileMiniCard>
    Insert market description here.     
    </ProfileMiniCard>

    </ProfileCard>
)
}


export default MarketProfileCard;