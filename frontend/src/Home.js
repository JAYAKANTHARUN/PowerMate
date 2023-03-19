
//const {lis} = require('./lis.js');
import { Link,useHistory } from "react-router-dom";
import {  useState} from 'react';

import Navbar from './Navbar';
import Navbar2 from './Navbar2';

const Home = () => {
  const history = useHistory();
  
 
  const lis=localStorage.getItem('lis');
  console.log(lis);


    // This function will be called every time the location changes
    
  
  return (
    <div className="App">
  {lis==0 ? <div><Navbar/></div>:<div><Navbar2/></div>}
  

    
    <div className="home">
      <h1>HOME PAGE</h1>
    </div>
    </div>
    
  );
}
 
export default Home;