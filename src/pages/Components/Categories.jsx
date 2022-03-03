import { categories } from '../../Data';
import CategoriesItem from './CategoriesItem';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding-bottom: 20px; 
    width: 65vw;
`

const Categories = () => {
    return (
        <Container>
        {categories.map(item=>(<CategoriesItem item = {item} key= {item.id}/>))}            
        </Container>
    )
}

export default Categories
