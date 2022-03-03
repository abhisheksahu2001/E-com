import React from 'react';
import styled from 'styled-components';
import Navbar from "./Components/Navbar";
import Notice from "./Components/Notice";
import Product from "./Components/Product";
import Footer from "./Components/Footer";

const Container = styled.div`
`
const FilterContainer = styled.div`
  display: flex;
  justify-content:space-between;
text-decoration: underline;
`

const Title = styled.h1`
margin-top: 70px;
margin-bottom: 20px;
margin-left: 30px;
`
const Filter = styled.div`
margin:30px;`
const Fonttext = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
` 
const Select = styled.select`
outline: none;
margin-left: 10px;
border:none;
color: var(--dark);
font-size: 19px;
font-weight: 700;


`
const Option = styled.option`
`


const ProductList = () => {
    return (
        <Container>
        <Notice/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter><Fonttext>Filter Products:</Fonttext>
          <Select><Option disabled selected>Color</Option>
          <Option>White</Option>
          <Option>Red</Option>
          <Option>Blur</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
          </Select>
          <Select><Option disabled selected>Size</Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
          </Select>
          </Filter>        
          <Filter><Fonttext>Sort Product:</Fonttext>
          <Select><Option selected>Newest</Option>
          <Option>Price Low To High</Option>
          <Option>price Hight To Low</Option>
          </Select>
          </Filter>        
        </FilterContainer>
        <Product/>
        <Footer/>
        </Container>
    );
};

export default ProductList;