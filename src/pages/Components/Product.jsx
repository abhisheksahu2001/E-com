import React from 'react'
import Products from "./Products"
import { Productitems } from '../../Data'
import styled from 'styled-components'


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
`

const Product = () => {
    return (
        <Container>
            {Productitems.map((item) =>(<Products item = {item} key = {item.id}/>))}
        </Container>
    )
}

export default Product
