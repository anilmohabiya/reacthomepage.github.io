import React from 'react';
import anil8 from './images/anil8.jpg';



const Services=()=>{
    return(
        <>
         <div className="head text-center mt-2 ourteam">  
       </div>

   
            <div class="row">
          
          {/*right side div */} 
           <div class="col-md-6 col-12 main_header_right mt-4 align-items-center ">
           <div class="card bg-dark text-white mt-1">
  <img class="card-img" src={anil8} alt="Card "/>
  <div class="card-img-overlay">
    <h5 class="card-title text-center mt-2">Bone cancer</h5>
    <p class="card-text text-center mt-2">highly dieases.</p>   
<div class="container">
  <div class="row">
    <div class="col text-center">
    
    </div>
  </div>
</div>
 
  </div>
</div>


<div class="card bg-dark text-white mt-3">

<img class="card-img" src={anil8} alt="Card "/>
  <div class="card-img-overlay">
    <h5 class="card-title text-center mt-2">Medicine</h5>
    <p class="card-text text-center mt-2">Medicine available .</p>   
<div class="container">
  <div class="row">
    <div class="col text-center">

    
    <a href="https://www.aiims.edu/en.html" class="btn btn-info" role="button">Check Treatment</a>
    </div>
  </div>
</div>
 
  </div>
</div>
 
           </div>
           { /*left side div*/}
           <div class="col-md-6 col-12 main_header_right mt-4 align-items-center ">
           <div class="card bg-dark text-white mt-1">
  <img class="card-img" src={anil8} alt="Card "/>
  <div class="card-img-overlay">
    <h5 class="card-title text-center mt-2">plazma theropy</h5>
    <p class="card-text text-center mt-2">we take care  .</p>   
<div class="container">
  <div class="row">
    <div class="col text-center">
    <a href="https://www.aiims.edu/en.html" class="btn btn-info" role="button">Check Treatment</a>

    </div>
  </div>
</div>
 
  </div>
</div>
      <div class="card bg-dark text-white mt-3">
  <img class="card-img" src={anil8} alt="Card "/>
  <div class="card-img-overlay">
    <h5 class="card-title text-center mt-2">Skin care</h5>
    <p class="card-text text-center mt-2">we Take care off .</p>   
<div class="container">
  <div class="row">
    <div class="col text-center">
    <a href="https://www.aiims.edu/en.html" class="btn btn-info" role="button">Check Treatment</a>

    
    </div>
  </div>
</div>
 
  </div>
</div>


           </div>
           </div>
          
     
        </>

    );
};

export default Services;