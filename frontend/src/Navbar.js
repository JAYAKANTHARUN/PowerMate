import { Link } from "react-router-dom";
//const {lis} = require('./lis.js');
//const lis = localStorage.getItem('lis');
const lis = localStorage.getItem('lis');


const Navbar = () => {
 
  if (lis===1)
  {
  return (
    <nav className="navbar">
      <h1>Energy Meter</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/usage">Usage</Link>
        
      </div>
    </nav>
  );
}
else{
  return (
    <nav className="navbar">
      <h1>Energy Meter</h1>
      <div className="links">
      <Link to="/l">Login</Link>
       
        
      </div>
    </nav>
  );
}}
 
export default Navbar;