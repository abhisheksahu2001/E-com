import  styled  from 'styled-components'
import React from 'react'

const Container = styled.div`
    height: 50vh;
    width: 20%;
    flex:1;
    background-color: white;
    margin: 10px;
    transition: 0.2s;
    &::after{
        content: "";
        height: 100px;
        display: block;
        position: relative;
        left: 0;
        margin: auto;
        bottom: 97.1%;
        height: 100%;
    }
    &:hover {
        box-shadow: 0 0 2px 3px #E0E2E5;
    }&:hover img{
        transform: scale(0.98);

    }

`

const Image = styled.img`
    cursor: pointer;
    width: 100%;
    height: 80%;
    z-index: 100;
    transition: 0.3s;
    
`
const Info = styled.div`
display: flex;
justify-content: space-between;
padding:15px;
background-color: white;
    
`
const Title = styled.h1`
    background-color: white;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 25px;
`
const Button = styled.button`
    margin-right: 10px;
    width: 100px;
    border-radius: 3px;
    border:none ;
    background-color: #2874F0;
    font-size: 16px;
    color:white;
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
    box-shadow: 3px 3px #e5e4e0;
    height: 40px;
    z-index: 10;

`
const Proinfo = styled.div`
    display: block;
    background-color: white;
`
const P = styled.p`
    display: block;
    background-color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 20px;
    margin-left: 15px;
    padding-bottom: 5px;
`
const P2 = styled.p`
    display: block;
    background-color: white;
    text-transform: lowercase;
    letter-spacing: 1px;
    font-weight: 300;
    color: green;
    font-size: 20px;
    margin-left: 15px;
    font-weight: 700;
    cursor: pointer;
    

` 
const CategoriesItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Check now</Button>
            </Info>
            <Proinfo>
            <P>{item.brands}</P>
            <P2>{item.offers}</P2>
            </Proinfo>
        </Container>
    )
}

export default CategoriesItem
