import styled from 'styled-components'
import img from '../Images/ship.png'

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-flow: column;
`


export const P = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 46px;
    color: white;
    font-weight: 800;

`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    size: 26px;

`

export const MyButton = styled.div`
   background-color: #D4C7DC;
   color: black
   display:inline-block;
   padding:0.3em 1.2em;
   margin:0 0.1em 0.1em 0;
   border:0.16em solid rgba(255,255,255,0);
   border-radius:2em;
   box-sizing: border-box;
   text-decoration:none;
   font-family:'Roboto',sans-serif;
   font-weight:300;
   text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
   text-align:center;
   transition: all 0.2s;
`

// export const Picture = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 260px;
//     height: 260px;
//     background-image: url(${img});
//     background-position: center; /* Center the image */
//     background-repeat: no-repeat; /* Do not repeat the image */
// `

export const MyImage = styled.img`
  height: 100px;
`