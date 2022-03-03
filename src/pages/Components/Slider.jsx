import {useState} from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled, { keyframes } from 'styled-components'
import { slideItem } from '../../Data'


// const Container = styled.div`
//     // height:100vh;
//     width:100%;
//     display:flex;
//     position:relative; 
//     overflow:hidden;
// `;
// const Arrow = styled.div`
//     width:50px;
//     height:50px;
//     background-color:white;
//     border-radius:50px;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     position:absolute;
//     top:0;
//     bottom:0;
//     left: ${props => props.direction === "left" && "10px"}; 
//     right: ${props => props.direction === "right" && "10px"}; 
//     margin:auto;
//     cursor:pointer;
//     opacity:0.5;
//     z-index:2;
// `;
// const Wrapper = styled.div`
//     // height:100%;
//     display:flex;
//     transition:all 0.5s ease;
//     transform:translateX(${props=>props.slideIndex * -98.97}vw);
// `;
// const Slide = styled.div`
//     width:99vw;
//     display:flex;
//     align-items:center;
// `;
// const Imgcontainer = styled.div`
//     flex:1;
// `;
// const Infocontent = styled.div`
//     flex:1;
// `;

// const Image = styled.img`
//     height:52%;
// `

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
const Slider = () => {

        const [slideIndex, setSlideIndex] = useState(0);
        const handleClick = (direction) => {
            if (direction === "left") {
                setSlideIndex(slideIndex >0 ? slideIndex - 1 : 2);
            } else {
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
            }}
    return (    
        <Container>
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

export default Slider;
