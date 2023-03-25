
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
  {lis==0? <div><Navbar/></div>:<div><Navbar2/></div>}
    <div className="home">
      <br /><br /><br /><br /><br />
      <h1>Track your Energy usage through PowerMate</h1>
      <img src={process.env.PUBLIC_URL + '/robo.png'} alt="My Image" style={{ float: 'right' }} />
    </div>
    </div>
  );
}

export default Home;
