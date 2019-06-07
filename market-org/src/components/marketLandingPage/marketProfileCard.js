import React from "react";
import styled from 'styled-components'

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
    </div>
    </ProfileMiniCard>

    <ProfileMiniCard>
    Insert market description here.     
    </ProfileMiniCard>

    </ProfileCard>
)
}


export default MarketProfileCard;