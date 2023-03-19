

import { Link } from "react-router-dom";
import { useState } from 'react';
//const {lis} = require('./lis.js');
//const lis = localStorage.getItem('lis');



const Navbar = () => {
  
  
  return (
    <nav className="navbar">
      <h1>Energy Meter</h1>
      <div className="links">
      <Link to="/l">Login</Link>
       
        
      </div>
    </nav>
  );


}
 
export default Navbar;