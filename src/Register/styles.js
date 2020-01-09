import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-flow: column;
    background-color: #D4C7DC;
    padding: 1em;
    border-radius:2em;

`
export const MyButton = styled.button`
   background-color: white;
   color: black
   display:inline-block;
   padding:0.5em 1.2em;
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

export const Info = styled.p`
    margin: 0 0;
    font-weight: 700;
    font-size: 1.5rem;
`

export const InfoTwo = styled.p`
    margin: .5rem 0;
    font-weight: 500;
    font-size: 1rem;
`
