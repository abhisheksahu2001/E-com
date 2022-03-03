import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from './Components/Navbar';
import Notice from './Components/Notice';
import shirt from './Components/menuphotos/shirt.webp'
import Footer from './Components/Footer'
import { Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { AddOutlined, ContactSupportOutlined, Favorite, FavoriteBorderOutlined, RemoveOutlined, ScatterPlot, Star,WhatsApp ,Share ,MailOutline,Instagram } from '@material-ui/icons';
import './Product.css'
import Carousel from 'react-material-ui-carousel';
import { Productitems } from '../Data';
import { makeStyles } from '@material-ui/core';
import { getElementError } from '@testing-library/react';

const StyledRating = styled(Rating)({
 
});
const useStyle = makeStyles({
  carousel:{
    "border-radius": "2%",
    'box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    
  },
  imgdiv: {
    '&:hover' : {
     "border-radius": "2%",
     'transform ':'Scale(0.99)',
     'trnasition ': 0.5,
   
    }},
    icon:{
    '&:hover' : {
      'color':'red',
    }
    },

  

})
const Container = styled.div`


`

const NavContainer = styled.div`
`
const Wrapper = styled.div`
display:flex;
justify-content: center;
padding: 100px;
`
const ImgContainer = styled.span`
    margin-left: 36%;
    position: sticky;
    top: 5em;
    display: flex;
    `
const ImgDiv = styled.div`
flex: 1;
position: relative;
background-color:var(--light);
padding-top: 10px;
`
const InfoContainer = styled.span`

flex: 1;
background-color:var(--light);
padding-left: 40px;
display: table-cell;
padding-top: 10px;
padding-right: 20px;
padding-bottom: 50px;
/* max-width:700px; */
`
const Img = styled.img`
height: 500px;
`
const Title = styled.h2`
font-weight: 400;
`
const Desc = styled.p`
margin:20px 0px;
font-size:20px;
height: 160px;
transition: 1s ease-in ;
width: 500px;

position:relative; `
const Price = styled.span`
font-weight:100;
font-size:40px;
` 
const FilterContainer = styled.div``
const Filter = styled.div`
align-items: center;
display:flex;`
const FilterTitle = styled.div`
font-size:20px;
margin:5px;`
const FilterColor = styled.div`

width:50px;
height:50px;
border-radius: 15%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;
transition: 0.2s;
&:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`
const FilterSize = styled.div`
display:flex;
margin:10px;
`

const FilterSizeOption = styled.div`
cursor: pointer;
border-radius: 5px;
align-items: center;
transition: 0.2s;
display: flex;
margin: 20px;
justify-content: center;
width: 50px;
border: 2px solid  #FF8AAD;
height: 50px;
&:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`
const DiscToggle = styled.span`
display: flex;
align-items: center;
justify-content: space-between;

`
const InfoDiv = styled.div`
position: relative;
margin-top:20px;
transition: 0.3s ease-in ;
&::after{
  content: '';
  position: absolute;
    display: block;
    border-top: 3px solid red;
    width: 100%;
    margin-top: 10px;
}
`
const BuyDiv = styled.span`
display: flex;
align-items: center;
`
const ButtonBag  = styled.button`
flex:1;
height: 100%;
font-size: 2rem;
font-family: var(--heading);
text-transform: uppercase;
background:#FF2E63;
color:white;
border: none;
border-radius: 5px;
padding: 5px;

`
const Dropdown = styled.div`
display:flex;
flex-direction: column;
margin: 0 0 10px 0;
`
const Imgslide  = styled.div`
display:flex;
flex-direction: column;
margin:10px ;
height: 100%;
` 
const ShareSection = styled.div`
display:flex;
align-items:center;
margin-top: 10px;
height: 40px;
&:hover {
  color: 'red';
}
`
const Iconinfo = styled.a``
export const Product = () => {
  const classes = useStyle();
  const [switchToggled , setSwitchToggled] = useState(false);
  const [switchToggledtwo , setSwitchToggledtwo] = useState(false);
  const [zoomToggle , setzoomToggle] = useState(false);

  const handleZoom = () =>{
    zoomToggle ? setzoomToggle(false) : setzoomToggle(true); 
  }
  const handleClick = () =>{
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    
  }
  const handleClicktwo = () =>{
    switchToggledtwo ? setSwitchToggledtwo(false):setSwitchToggledtwo(true)
  }
  

  const responsive ={
    desktop :{
      breakpoint: {max:3000 , min:1024},
      item:5
    },
    table:{
      breakpoint:{ max:1024 , min:464},
    },
    mobile : {
      breakpoint:{max:464 , min: 0},
    },
  };

return (
  <Container>
      <NavContainer>
        <Notice/>
        <Navbar />
      </NavContainer>
      <Wrapper >
        <ImgDiv>
        <ImgContainer  id='Imgsection'  >
         <Imgslide  >
         <Carousel   className={classes.carousel} stopAutoPlayOnHover ={true} 
             responsive={responsive} 
             autoPlaySpeed= {4000} 
             infinite = {true}
             keyBoardControl = {true}
             customTransition  ='all .5'
             transitionDuration = {500}
             animation='slide'
             indicators={false}>
            {
                Productitems.map( (item) => <Img className = {classes.imgdiv }  id = {zoomToggle ? 'imgzoom' : 'imgNozoom' } src ={item.img}></Img> )
              }
        </Carousel>
         </Imgslide>
         </ImgContainer>
        </ImgDiv>
        <InfoContainer>
          <Title>cloth</Title>
          <StyledRating defaultValue = {4.5} precision={0.5}
          icon={<Star />}
          readOnly
          style={{color:'black',margin:'10px',marginLeft:"0px"}}>
           
          </StyledRating>
          <FilterContainer>
          <Price>$20</Price>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color ='black'/>
              <FilterColor color ='darkblue'/>
              <FilterColor color ='gray'/>
            </Filter>
            <Filter>
                <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <BuyDiv>
            <FavoriteBorderOutlined style = {{fontSize:'2rem', 
                                              color:'#FF2E63',
                                              background:'white',
                                              width:'60', 
                                              height:"60", 
                                              border:"2px solid #FF8AAD",
                                              marginRight:'40',
                                              padding:'10',
                                              borderRadius:'5%'}}/>
            <ButtonBag>Add to Bag</ButtonBag>

          </BuyDiv>
          <ShareSection>
            <Share onClick = {handleZoom} style = {{ padding:'0', marginRight:'10px', fontSize :'30px', color: 'var(--dark)'}}/>
            <Iconinfo className={zoomToggle ? 'displayicon': 'Nodisplayicon'}>
            <WhatsApp   className = {classes.icon} style = {{ padding:'0', marginRight:'10px', fontSize :'30px', color: 'var(--dark)' }}/>
            <Instagram   style = {{ padding:'0', marginRight:'10px', fontSize :'30px', color: 'var(--dark)'}}/>
            <MailOutline   style = {{ padding:'0', marginRight:'10px', fontSize :'30px', color: 'var(--dark)'}}/>
            </Iconinfo>
          </ShareSection>
          <Dropdown>
          <InfoDiv>
          <DiscToggle onClick={handleClick}>
            Description<AddOutlined className = {switchToggled ? 'noinfo1' : 'info1'} style={{cursor:'pointer'}} onClick={handleClick}/><RemoveOutlined  className = {switchToggled ? 'noinfo2' : 'info2'} style={{cursor:'pointer'}} onClick={handleClick}></RemoveOutlined>
          </DiscToggle>
            <Desc className = {switchToggled ? 'info': 'noinfo' }>lorem24Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially uncha
            </Desc>
          </InfoDiv>
          <InfoDiv>
          <DiscToggle onClick={handleClicktwo}>
            Description<AddOutlined className = {switchToggledtwo ? 'noinfo1' : 'info1'} style={{cursor:'pointer'}} onClick={handleClicktwo}/><RemoveOutlined  className = {switchToggledtwo ? 'noinfo2' : 'info2'} style={{cursor:'pointer'}} onClick={handleClicktwo}></RemoveOutlined>
          </DiscToggle>
            <Desc className = {switchToggledtwo ? 'info': 'noinfo' }>lorem24Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially uncha
            </Desc>
          </InfoDiv>

          
          </Dropdown>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  );
};
