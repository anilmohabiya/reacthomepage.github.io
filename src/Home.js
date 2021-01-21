import React from 'react';

import Footer from './Footer';
import Services from './Services';
import Bio from './Bio';

import foot1 from './images/anil2.jpg';

import Material from './Material';

const Home =()=>{
    return(
        <>
      {/* main header */}
    <div class="container-fluid main_header">
      <div class="row">
       <div class="col-md-10 col-12 mx-auto">

        <div class="row">
          
         {/*right side div */} 
        {/*right side div */} 
        <div class="col-md-6 col-12 main_header_right">

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={foot1} class=" w-100" alt="..."/>
    </div>
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>
          { /*left side div*/}
          <div class="col-md-6 col-12 main_header_left mt-2 ">
         <h2>VIEW OUR FACILITY</h2><br/>
             <h3 >HUMAN SAFTEY OUR PROMISE</h3>
         
             <p>EVERY Treatment facility Avilable</p>
     
            
            
          </div>
          <div className="text-center bg-blue">
              <h5>Take the world's best<br/> quality Treatment</h5><br/>
              <p>we provide the best services for our patients and<br/>
              try to achieve their trust and satisfaction</p> 
              <button type="button" class="btn btn-secondary">read more</button>  <button type="button" class="btn btn-secondary">register Now</button>
          </div>
          {/* our services*/ }
              <Services/>
     {/* OUR TEAM */}
         <Material/>
         <Bio/>
    {/* contact form */}

    <section className="Contact us">
        <div className="container text-center">
           
               
      </div>
      </section>
     
    
        </div>   
      </div>
      <Footer/>
    </div>
</div>



        </>
    )
}

export default Home;
