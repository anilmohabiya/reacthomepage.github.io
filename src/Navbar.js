import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=>{
    return(
      <>
      
      <div className="text-center mt-3"> 
                <h2 style={{text:"center"}}>Dr Rajput's</h2><br/>
                <h1>Strem Cell</h1><br/>
                <h5>RESEARCH CENTRE</h5> <br/><br/><br/>
                <i class="fa fa-envelope"></i>
                   <p>MAIL US TODAY</p>
                   <p> rajputbhagatsingh@gmail.com </p><br/>
                   <i class="fab fa-whatsapp"></i>
                   <p>WHATSAPP  <br/> 9820458690 </p><br/> <br/>
                   <i class="fas fa-phone"></i>
                   <p>CALL US FOR MORE DETAILS</p><br/>
                   <p>9850214530/9875461230</p>
      
      </div>
      <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-md-10 col-12 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><i class="fa fa-snowflake-o" aria-hidden="true"></i><button>Enquire now</button> 
                  <i class="fa fa-snowflake-o" aria-hidden="true"></i></NavLink>
    <button className="navbar-toggler" type="button"
     data-toggle="collapse" data-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
     
  <li className="nav-item">
          <NavLink 
          exact
           className="nav-link active" aria-current="page" to="/"><i class="fa fa-heart" aria-hidden="true"></i> Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link" to="">
          <i class="fa fa-user" aria-hidden="true"></i> About</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink  className="nav-link" to="">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> REACH US</NavLink>
        </li>
       
      
      </ul>
 
    </div>
  </div>
</nav>
      
      </div>
      </div>
      </div>
      </>
    );
};
export default Navbar;
