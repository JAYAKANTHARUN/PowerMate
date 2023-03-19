
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
      <h1>What is PowerMate ?</h1><br />
      <ul>
        <li> A electronic device with face detector to track the energy consumed by each individual in a organization</li><br />
        <li> Controls the energy consumption by an individual</li><br />
        <li> Efficient utilization of energy</li><br />
        <li> Reduces the total expense of an individual</li><br />
      </ul>
      <img src={process.env.PUBLIC_URL + '/robo.png'} alt="My Image" style={{ float: 'right' }} />
    </div>
    </div>
  );
}

export default Home;
