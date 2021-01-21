import React from 'react';
import Contact from './Contact';


const Footer =()=>{
    return(
      <>
         <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>GET in Touch</h3>
                        <ul>
                            <li>8779838452</li>
                           
                            <li>Gorakhpur,(u.p) pinCode-274401</li>
                            <li>anilmohabiya1053@gmail.com</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>Policies</h3>
                        <ul>
                           <li>About</li>
                           <li>Security</li>
                           <li>Term & Condition</li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>Special Categories</h3>
                      
                        <ul>
                        <li>FAQ</li>
                        <li>Sitemap</li>
                        <li>Policy</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>Quick Links</h3>
                        <ul>
                        <li>Hospitals</li>
                        </ul>
                    </div>
                   
                </div>
                
            </div>
        </footer>
    </div>
    <Contact/>
      </>
    )
}

export default Footer;
