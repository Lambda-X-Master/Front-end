import React, { useEffect, useState } from "react";
import styled from 'styled-components';


const ProfileCard = styled.div`
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: black;
    margin: 3%;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Stall = (props) => {
    return(
        <ProfileCard>
            <div>
            <h3>Quantity</h3>
            {props.stall.qty}
            </div>

            <div>
                <h3> Size </h3>
                <ul>
                <li><b>Length:</b>{props.stall.size.width}</li>
                <li><b>Width:</b> {props.stall.size.height}</li>
                </ul>
            </div>

            <div>
                <button>
                    Rent
                </button>

            </div>
        </ProfileCard>
    )
}

export default Stall;