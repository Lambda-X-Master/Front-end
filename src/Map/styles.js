import styled from 'styled-components'

const mapObj = axios.get()

export const Map = styled.section`
    display: grid:
    grid-template-rows: repeat(${mapObj.rows}, 100/${mapObj.rows}vh);
    grid-template-columns: repeat(${mapObj.columns}, 100/${mapObj.columns}vw);

    @media (min-width: 768px){
        display:flex;
    }
`

export const Room = styled.div`
    
`