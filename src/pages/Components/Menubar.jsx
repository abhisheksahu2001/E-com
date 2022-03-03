import React from 'react';
import './index.css';
import shoe from "./menuphotos/shoe.webp"
import bag from "./menuphotos/bag.webp"
import keybord from "./menuphotos/keybord.webp"
import laptop from "./menuphotos/laptop.webp"
import mobile from "./menuphotos/mobile.webp"
import mouse from "./menuphotos/mouse.webp"
import  pants from "./menuphotos/pants.webp"
import shirt from "./menuphotos/tshirt.jpg"
import tv from "./menuphotos/tv.webp"
import { LightModeTwoToneIcon } from '@material-ui/icons'


const Menubar = () => {
    document.addEventListener("click", e =>{
        const isDropdownButton = e.target.matches("[data-dropdown-button]")
        if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
      
        let currentDropdown
        if (isDropdownButton){
            currentDropdown = e.target.closest("[data-dropdown]")
            currentDropdown.classList.toggle("active")
        }
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            if (dropdown === currentDropdown) return
            dropdown.classList.remove("active")
        })
      })
    //   window.onload = function()  {        
    //       document.getElementById("click1").onmouseenter = function() {oneFunction()};
    //       document.getElementById("click1").onmouseleave = function() {oneeFunction()};
    //       function oneeFunction(){
    //           document.getElementById("img1").classList.remove("show");    
    //       }
          
    //       function oneFunction() {
    //           document.getElementById("img1").classList.add("show");
    //         }
    //     document.getElementById("click2").onmouseenter = function() {twoFunction()};
    //     document.getElementById("click2").onmouseleave = function () {twotFunction()};
    
    //     function twotFunction() {
    //         document.getElementById("img2").classList.remove("show");
            
    //     }
    //     function twoFunction() {
    //       document.getElementById("img2").classList.add("show");
          
    //     }
    //     document.getElementById("click3").onmouseenter = function() {threeFunction()};
    //     document.getElementById("click3").onmouseleave = function () {threeeFunction()};
    
    //     function threeFunction() {
    //         document.getElementById("img3").classList.add("show");
            
    //     }
    //     function threeeFunction() {
    //       document.getElementById("img3").classList.remove("show");
          
    //     }
    //     document.getElementById("click4").onmouseenter = function() {fourFunction()};
    //     document.getElementById("click4").onmouseleave = function () {tfourFunction()};
    
    //     function fourFunction() {
    //         document.getElementById("img4").classList.add("show");
            
    //     }
    //     function tfourFunction() {
    //       document.getElementById("img4").classList.remove("show");
          
    //     }
    //     document.getElementById("click5").onmouseenter = function() {fiveFunction()};
    //     document.getElementById("click5").onmouseleave = function () {tfiveFunction()};
    
    //     function fiveFunction() {
    //         document.getElementById("img5").classList.add("show");
            
    //     }
    //     function tfiveFunction() {
    //       document.getElementById("img5").classList.remove("show");
          
    //     }
    //     document.getElementById("click6").onmouseenter = function() {sixFunction()};
    //     document.getElementById("click6").onmouseleave = function () {tsixFunction()};
    
    //     function sixFunction() {
    //         document.getElementById("img6").classList.add("show");
            
    //     }
    //     function tsixFunction() {
    //       document.getElementById("img6").classList.remove("show");
          
    //     }
    //     document.getElementById("click7").onmouseenter = function() {sevenFunction()};
    //     document.getElementById("click7").onmouseleave = function () {tsevenFunction()};
    
    //     function sevenFunction() {
    //         document.getElementById("img7").classList.add("show");
            
    //     }
    //     function tsevenFunction() {
    //       document.getElementById("img7").classList.remove("show");
          
    //     }
    //     document.getElementById("click8").onmouseenter = function() {EightFunction()};
    //     document.getElementById("click8").onmouseleave = function () {tEightFunction()};
    
    //     function EightFunction() {
    //         document.getElementById("img8").classList.add("show");
            
    //     }
    //     function tEightFunction() {
    //       document.getElementById("img8").classList.remove("show");
          
    //     }
    //     document.getElementById("click9").onmouseenter = function() {NineFunction()};
    //     document.getElementById("click9").onmouseleave = function () {tNineFunction()};
    
    //     function NineFunction() {
    //         document.getElementById("img9").classList.add("show");
            
    //     }
    //     function tNineFunction() {
    //       document.getElementById("img9").classList.remove("show");
          
    //     }
    //     document.getElementById("click10").onmouseenter = function() {tenFunction()};
    //     document.getElementById("click10").onmouseleave = function () {ttenFunction()};
    
    //     function tenFunction() {
    //         document.getElementById("img10").classList.add("show");
            
    //     }
    //     function ttenFunction() {
    //       document.getElementById("img10").classList.remove("show");
          
    //     }
    //     document.getElementById("click11").onmouseenter = function() {elevenFunction()};
    //     document.getElementById("click11").onmouseleave = function () {televenFunction()};
    
    //     function elevenFunction() {
    //         document.getElementById("img11").classList.add("show");
            
    //     }
    //     function televenFunction() {
    //       document.getElementById("img11").classList.remove("show");
          
    //     }
    //     document.getElementById("click12").onmouseenter = function() {twelveFunction()};
    //     document.getElementById("click12").onmouseleave = function () {ttwelveFunction()};
    
    //     function twelveFunction() {
    //         document.getElementById("img12").classList.add("show");
            
    //     }
    //     function ttwelveFunction() {
    //       document.getElementById("img12").classList.remove("show");
          
    //     }
        
        

    return(
        <div class="header">
            <div class="dropdown" data-dropdown>
            <button class="headlink" data-dropdown-button>Men</button>
            <div class="dropdown-menu information-grid">
                    <div class="dropdown-heading">
                        <div class="dropdown-link">
                            <a href = "www.google.com" id="click1" class="link">Shirt</a>
                            <a href = "www.google.com" id="click2" class="link">Pants</a>
                            <a href = "www.google.com" id="click3" class="link">Shoes</a>
                        </div>        
                    </div>
                <div class="imgslide">
                    <img class= "img" id="img1" src={shirt} alt=""/>
                    <img class= "img" id="img2" src={pants} alt=""/>
                    <img class= "img" id="img3" src={shoe} alt=""/>
                    
                </div>
            </div>
            </div>
            <div class="dropdown" data-dropdown>
            <button class="headlink" data-dropdown-button>woman</button>
            <div class="dropdown-menu information-grid">
                    <div class="dropdown-heading">
                        <div class="dropdown-link">
                            <a href = "www.google.com" id="click4" class="link">Shirt</a>
                            <a href = "www.google.com" id="click5" class="link">Pants</a>
                            <a href = "www.google.com" id="click6" class="link">Shoes</a>
                        </div>        
                    </div>
                <div class="imgslide">
                    <img class= "img" id="img4" src={shirt} alt=""/>
                    <img class= "img" id="img5" src={pants} alt=""/>
                    <img class= "img" id="img6" src={shoe} alt=""/>
                    
                </div>
            </div>
            </div>
            <div class="dropdown" data-dropdown>
            <button class="headlink" data-dropdown-button>accessories</button>
            <div class="dropdown-menu information-grid">
                    <div class="dropdown-heading">
                        <div class="dropdown-link">
                            <a href = "www.google.com" id="click7" class="link">Mobile</a>
                            <a href = "www.google.com" id="click8" class="link">mouse</a>
                            <a href = "www.google.com" id="click9" class="link">keybord</a>
                            <a href = "www.google.com" id="click10" class="link">bag</a>
                            <a href = "www.google.com" id="click11" class="link">tv</a>
                            <a href = "www.google.com" id="click12" class="link">laptop</a>
                        </div>        
                    </div>
                <div class="imgslide">
                    <img class= "img" id="img7" src={mobile} alt=""/>
                    <img class= "img" id="img8" src={mouse} alt=""/>
                    <img class= "img" id="img9" src={keybord} alt=""/>
                    <img class= "img" id="img10" src={bag} alt=""/>
                    <img class= "img" id="img11" src={tv} alt=""/>
                    <img class= "img" id="img12" src={laptop} alt=""/>
                    
                </div>
            </div>
            </div>
        </div>

        
    )
    
};

export default Menubar;
