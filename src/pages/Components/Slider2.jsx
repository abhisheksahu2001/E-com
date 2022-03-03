import React, {useState} from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { slideItem } from '../../Data'

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
const Button = styled.button`
    margin-right: 10px;
    width: 100px;
    border-radius: 3px;
    margin-bottom: 5px;
    border:none ;
    background-color: #2874F0;
    font-size: 16px;
    color:white;
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
    box-shadow: 3px 3px #e5e4e0;



`
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
`;
const Wrapper = styled.div`
    display:flex;
    transition:all 0.5s ease;
    transform:translateX(${props=>props.slideIndex * -98.97}vw);
`;
const Slide = styled.div`
    width:99vw;
    display:flex;
    align-items:center;
`;
const Imgcontainer = styled.div`
    flex:1;
`;
const Infocontent = styled.div`
    flex:1;
`;

const Image = styled.img`
    height:52%;
    width: 50vw;
`;

const Slider2 = () => {

        const [slideIndex, setSlideIndex] = useState(0);
        const handleClick = (direction) => {
            if (direction === "left") {
                setSlideIndex(slideIndex >0 ? slideIndex - 1 : 2);
            } else {
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
            }}
    return (    
        
        <Container>
        <Head><Tag>Deal of the Day</Tag><Button>See now</Button></Head>
            <Arrow direction ="left" onClick={() =>handleClick("left") }>
                <ArrowLeftOutlined/>
            </Arrow>   
            <Wrapper slideIndex ={slideIndex}>
                {slideItem.map((item)=>(

                <Slide >
                <Imgcontainer>
                    <Image src = {item.img} />
                </Imgcontainer>
                <Infocontent>
                    
                </Infocontent>
                </Slide>
                
                ))}
            </Wrapper>
            <Arrow  direction ="right" onClick={() =>handleClick("right") }>
                <ArrowRightOutlined/>
            </Arrow>   
        </Container>
    )
}

export default Slider2;

