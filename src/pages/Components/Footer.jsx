import React from 'react'
import styled from 'styled-components'
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
// import {FacebookIcon} from '@material-ui/icons';

  const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #181818;
  color: white;
  height: 700px;
  z-index: 12;


`;




const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 70px;
  height: 70px;
  
  border-radius: 20%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:hover{
    color: gold;
    background-color: #3d3d3b7c;
  }

`;

const Center = styled.div`
  padding: 20px;
  letter-spacing: 1px;
  &::after{
    content: '';
    position: absolute;
    display: block;
    border-top: 3px solid white;
    width: 90%;
    left: 5%;
    
  }
  
`;




const List = styled.ul`
  margin-left: 150px;
  padding: 50px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  
  `;
const List2 = styled.ul`
  margin: 0;
  padding: 90px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: larger;
  
  `;
const ListItem = styled.li`
  
  width: 50%;
  margin-top: 40px;
  font-size: larger;
  cursor: pointer; 
  &:hover{color:gold}
`;

const Right = styled.div`
  margin: 0;
  padding: 50px;
  letter-spacing: 1px;
  
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
`;
const Payment = styled.img`
    width: 50%;
    `;

const Input = styled.input`
      color: white;
      letter-spacing: 1px;
      height: 40px;
      width: 250px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom:1px solid gold ;
      font-size: 15px;
      outline: none;
      background-color: #181818;
      
      
    `
    const Button = styled.button`
    height:40px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    border:none ;
    width: 100px;
    background-color: gold;
    
    `
const Form = styled.form`
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  
`
const Social = styled.div`
width: 130%;
  margin-left: 25%;
  display: flex;
  justify-content: space-between;
  
  
 
`
const Footer = () => {
  return (
    <Container>
      {/* <Left>
        <Logo>Mybuy</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
      </Left> */}
      <Center>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <List2>
            <ContactItem>
              <Room style={{marginRight:"10px", color:"gold"}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
              <Phone style={{marginRight:"10px", color:"gold"}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
              <MailOutline style={{marginRight:"10px",  color:"gold"}} /> contact@lama.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </List2>
      </Right>
      <Social>
        <SocialContainer color ='#181818'>
          <SocialIcon >
            <Facebook style={{fontSize: 35}}/>
          </SocialIcon>
          <SocialIcon >
            <Instagram style={{fontSize: 35}}/>
          </SocialIcon>
          <SocialIcon >
            <Twitter style={{fontSize: 35}}/>
          </SocialIcon>
          <SocialIcon >
            <Pinterest style={{fontSize: 35}}/>
          </SocialIcon>
        </SocialContainer>
        <Form>
          <Input type ='email'   placeholder='Enter Email..'  required/>
          <Button type = 'submit' >Subscribe</Button>
        </Form>  
      </Social>
    </Container>
  );
};

export default Footer;

