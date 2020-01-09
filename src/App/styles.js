import styled from 'styled-components'
import img from '../Images/jeremy-thomas-4dpAqfTbvKA-unsplash.jpg'
// adding comment
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  main {
    width: 99%
    height: 99%
  }
  
  
  // flex-flow: column;
  background-image: url(${img});
  background-color: #D4C7DC; /* Used if the image is unavailable */
  height: -webkit-fill-available; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`

