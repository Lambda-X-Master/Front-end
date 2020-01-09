import styled from 'styled-components'

import starship from '../Images/Starship.png'

// const mapObj = {
//     rows: 10,
//     columns: 10,
// }

// display: grid:
// grid-template-rows: repeat(${mapObj.rows}, 100/${mapObj.rows}vh);
// grid-template-columns: repeat(${mapObj.columns}, 100/${mapObj.columns}vw);


export const Map = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;

    background-image: url(${starship});
    // background-color: #D4C7DC; /* Used if the image is unavailable */
    height: 1200px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: contain; /* Resize the background image to cover the entire container */

    // @media (min-width: 768px){
    //     display:flex;
    // }
`

export const Room = styled.div`
    
`