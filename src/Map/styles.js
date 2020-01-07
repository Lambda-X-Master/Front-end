import styled from 'styled-components'

export const Map = styled.section`
    display: grid:
    grid-template-rows: repeat(8, 12.5vh);
    grid-template-colums: repeat(8, 12.5vh);

    @media (min-width: 768px){
        display:flex;
    }
`