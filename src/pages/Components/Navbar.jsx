import React, { useState, useEffect } from 'react';
import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'


const Container = styled.div` 
`

const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    align-items:center;
    justify-content: space-between;
    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
    `
const Language = styled.span`
    cursor: pointer;
`
const Searchcontainer = styled.div`
    width: 20vw;
    border: 4px solid var(--dark);
    display: flex;
    align-items: center;
    margin-left:25px;
`
const Input = styled.input`
    border:none;
    width:20vw;
    font-size: 1rem;
    font-weight: 500;
    height: 30px;
    color: black;
    outline: none;
    

`
const Center = styled.div`
    flex:1;
    text-align:center;

`
const Logo = styled.div`
    font-size:30px;
    font-family: 'Pushster', cursive;
    font-weight:400;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    `
    const Menuitem = styled.div`
    text-transform:uppercase;
    cursor:pointer;
    margin-left:25px;
`



const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible( currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);
  
  const navbarStyles = {
    position: 'fixed',
    height: '60px',
    width: '100%',
    backgroundColor:'var(--light)',
    textAlign: 'center',
    transition: 'top 0.4s',
    zIndex:'12',
    
  }
   
    return (

        <Container style={{ ...navbarStyles, top: visible ? '30px' : '0px' , boxShadow: visible ? 'none': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <Wrapper >
                <Left>
                    <Language>EN</Language>
                    <Searchcontainer>
                        <Input placeholder='  Search for products, brands ....'/> 
                        <Search style={{right:"0", color:"var(--dark)", fontSize:20, background:'white'}}/>
                    </Searchcontainer>
                </Left>
                <Center><Logo>MyBuy.com</Logo></Center>
                <Right>
                    <Menuitem>register</Menuitem>
                    <Menuitem>Sign in</Menuitem>
                    <Menuitem>
                      <Badge badgeContent={10} color='primary'>
                          <ShoppingCartOutlined/>
                      </Badge>
                    </Menuitem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
