import React from 'react';
import foot1 from './images/web2.jpg';
const Material =()=>{
    return(
        <>
           
{/*Our Team */}
    <section className="ourteam">
        <div className="container text-center ">
            <div className='row'>
            <div class="col-md-6 col-12 main_header_right">

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active mt-3 mx-auto ">
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
         <h2>Steam Cell Therpy <br/> in Delhi, Mumbai,india</h2><br/>
             
         
             <p>Dr.rajput is a consultant orthopaedics and steam<br/>
              cell transplant surgeon practicipating for thr last <br/>
               35 years.</p>
     
            
            
          </div>
 
            </div>

            

        <div class="row">
          
          {/*right side div */} 
           <div class="col-md-6 col-6 main_header_right mt-3">
           <button type="button" class="btn btn-warning ">arthriti<br/>knee</button><br/><br/>
           <button type="button" class="btn btn-warning ">spinal cord injury</button><br/><br/>
           <button type="button" class="btn btn-warning ">DMD/ LGMD</button><br/><br/>
           <button type="button" class="btn btn-warning ">Cerebral palsy</button><br/><br/>
           <button type="button" class="btn btn-warning ">lung fibrosis</button><br/><br/>
           <button type="button" class="btn btn-warning ">Down syndrome</button><br/><br/>
           
           <button type="button" class="btn btn-warning ">Cerebeller ataxia</button><br/><br/>
           <button type="button" class="btn btn-warning ">osteognesis</button><br/><br/>
           <button type="button" class="btn btn-warning ">stemcell therapy</button><br/><br/>

 
           </div>
           { /*left side div*/}
           <div class="col-md-6 col-6 main_header_right mt-3 ">
       
           <button type="button" class="btn btn-warning ">BoneCancer</button><br/><br/>
           <button type="button" class="btn btn-warning mr-5">Autism</button><br/><br/>
           
           <button type="button" class="btn btn-warning ">Als/ MND</button><br/><br/>
           </div>
           </div>
        </div>
        <h5>Consulation AT</h5>
       <p> Dr.Rajput's Stem Cell Research Center</p>
       <p>Call:<br/> 9820850187 </p> 
       <p>Add: Main Gulmohar Rd,<br/>
       juhu, Andheri(w), Mumbai</p>
       <p>Criticare Hospital</p><br/>
       <p>Call: 912267756600 </p>
       <p>Add: Main Gulmohar Rd, juhu,Andheri(w),Mumbai</p>
    </section>

        </>
    );
};
export default Material;
