import React from "react";
import { Link } from "react-router-dom";
const Layout = () => {
    return (
      <>
        {/* <nav> */}
        <div className="flex gap-[20px] justify-center">
         
              <Link className="" to="/header">HOME</Link>
             

        
              <Link to="/home">JEWELERY</Link>
          
        
            
    
              <Link to="/footer">ELECTRONICS</Link>
           
          
            
          
            <Link to="/footer">MEN'S CLOTHING</Link>
          
          
          
           
          
              <Link to="/footer">WOMEN'S CLOTHING</Link>
          
            
      
        
        </div>
             
        {/* </nav> */}
  
        </>
      
    )
  };
  
  export default Layout;