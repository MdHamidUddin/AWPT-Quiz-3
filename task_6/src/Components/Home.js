import React from "react";
import Nav from './Nav';
import Student from './Student';
import Contact from './Contact';
import logo from '../assets/logo/cis.png';






function Home()
{
    return(
        <div> 
            
    <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">
    <h2>Welcome to Coding is Love</h2>
    <img src={logo}  alt="" width="15%" height="100%"/><br/>
    
    
      <a href="#about" class="btn-get-started scrollto">Get Started</a>

    </div>
  </section>
     
        </div>
       
    )
}
export default Home;
