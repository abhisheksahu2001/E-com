import React, {useState} from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { categories } from '../../Data'

const Container = styled.div`
    border-radius: 5px;
    width:98%;
    position:relative; 
    overflow:hidden;
    background-color: white;
    margin: 20px;
    box-shadow: 0 0 2px 3px #E0E2E5;
    z-index: 0;
    margin-top:90px;
`;
const Head = styled.div`
    height: 40px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 2px solid #E0E2E5  ;
    `
const Tag = styled.h2`
    font-weight: 600;
    font-size: 30px;
    background-color: white;
    margin-left: 20px;
    justify-content: space-between;
    

`

// `
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"}; 
    right: ${props => props.direction === "right" && "10px"}; 
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
    transition: 0.3s;
    &:hover{
        background-color: black;
        color: white;
    }

`;
const Wrapper = styled.div`
    background-color: white;
    display:flex;
    width: 170vw;
    transition:all 0.5s ease;
    transform:translateX(${props=>props.slideIndex * -30.00}vw);
`;
const Slide = styled.div`
    flex:1;
    background-color: white;
    margin: 10px;
    transition: 0.2s;
    
    &:hover {
        box-shadow: 0 0 2px 3px #E0E2E5;
    }&:hover img{
        transform: scale(0.98);

    }

   
`;


const Image = styled.img`
    cursor: pointer;
    width: 100%;
    height: 41vh;
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
    /* margin-top: px; */
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


const Slider3 = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex >0 ? slideIndex - 1 : 3);
        }
        else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }}
        
        
        
    return (    
        
        <Container>
        <Head><Tag>Deal of the Day</Tag></Head>
            <Arrow direction ="left" onClick={() =>handleClick("left")  }>
                <ArrowLeftOutlined/>
            </Arrow>   
            <Wrapper slideIndex ={slideIndex}>
                {categories.map((item)  =>(

                <Slide >
                
                    <Image src = {item.img} />
                    <Info>
                        <Title>{item.title}</Title>
                        <Button>Check now</Button>
                    </Info>
                    <Proinfo>
                        <P>{item.brands}</P>
                        <P2>{item.offers}</P2>
                    </Proinfo>
                
                </Slide>
                
                ))}
            </Wrapper>
            <Arrow  direction ="right" onClick={() =>handleClick("right")} >
                <ArrowRightOutlined />
            </Arrow>   
        </Container>
    )
}

export default Slider3;

