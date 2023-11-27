import React from "react";
import { Link } from "react-router-dom";
const Layout = () => {
    return (
      <>
        {/* <nav> */}
        <div className="text-red-500 flex">
         
              <Link className="text-red-500" to="/header">HOME</Link>
             

        
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