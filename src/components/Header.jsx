import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
      
        <div className="flex gap-[20px] justify-center">
         
              <Link className="" to="/">HOME</Link>
             

        
              <Link to="/jewelery">JEWELERY</Link>
          
        
            
    
              <Link to="/electronics">ELECTRONICS</Link>
           
          
            
          
             <Link to="/mensclothing">MEN'S CLOTHING</Link>
          
          
          
           
          
              <Link to="/womensclothing">WOMEN'S CLOTHING</Link>
          
            
      
        
        </div>
             
        
  
        </>
      
    )
  };
  
  export default Layout;