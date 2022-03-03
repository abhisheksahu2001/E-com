import React from 'react'
import Navbar from './Components/Navbar';
import Notice from './Components/Notice';
import Product from './Components/Product';
import Slider2 from './Components/Slider2';
import Slider3 from './Components/Slider3';
import Footer from './Components/Footer';
import Menubar from  './Components/Menubar';

const Home = () => {
    return (
        <div>
            <Notice/>
            <Navbar/>
            <Menubar/>
            <Slider3/>
            <Product/>
            <Footer/>
        </div>
    )
}

export default Home;
