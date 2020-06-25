import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faDesktop,faCircle } from '@fortawesome/free-solid-svg-icons';

export default({serviceslinks}) => {
 
    return(
       
      
        <section className="page-section" id="services">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row text-center">
            { serviceslinks && serviceslinks.map(({title,text,icon},index)=>
          
          <div className="col-md-4  col-lg-4 sm-12 impr mx-auto">
          <div className="ok">{icon}</div>  
        
          <h4 className="my-3">{title}</h4>
          <p className="text-muted">{text}</p>
           </div>
           
          )
          }
               
                
                
            </div>
        </div>
    </section>
    );
};