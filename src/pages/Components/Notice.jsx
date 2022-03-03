import React from 'react'
import styled from 'styled-components'
import Mode from './Mode'

const Container = styled.div`
   font-family: var(--heading);
    height:30px;
    background-color: var(--white);
    color:var(--heading);
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration-line:underline ;
    font-size:25px;
    font-weight:700;
`

const Notice = () => {


    return (
        <Container>
            NEW YEAR SELL
        
        </Container>
    )

}

export default Notice