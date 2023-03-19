import { Link,useHistory } from "react-router-dom";
import { useState } from 'react';
//const {lis} = require('./lis.js');
const lis = localStorage.getItem('lis');


const Navbar2 = () => {
    const history = useHistory();
    const handleClick = (e) => {
       // e.preventDefault();
        localStorage.setItem('lis',0 );
        console.log("**");
        console.log(lis);
     
     window.location.href="/";}
  return (<div>
    <nav className="navbar">
      <h1>Energy Meter</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/usage">Usage</Link>
        <button onClick={handleClick} className="click">Logout</button>
       
        
        
      </div>
    </nav>
    
    </div>
  );


}
 
export default Navbar2;