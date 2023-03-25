import Data from "./Data";
import useFetch from "./useFetch";
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import { Link,useHistory } from "react-router-dom";
import React from 'react'
import PieChart from './Piechart';


const Usage = () => {
//     const history = useHistory();
// const { error, isPending, data } = useFetch('http://192.168.43.49:5000/')
  const { error, isPending, data } = useFetch('http://localhost:8000/energies-pulimada')//here ,error, isPending, data acting as hook
 const lis = localStorage.getItem('lis');
 let labels=[];
 let d=[]
 if(data!=null)
 {
 data.map(user=> {(labels.push(user.name));d.push(user.energy)});
 console.log(labels);
 console.log(d);
}
const dat = {
  labels: labels,
  datasets: [
    {
      data:d,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c'],
      hoverOffset: 30
    },
  ],
};
//   console.log(lis);
  return (
    <div className="App">
  {lis==1? <div><Navbar2/></div>:<div><Navbar/></div>}
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', width: '100%' }}>
    <PieChart dat={dat} />
    </div>
   { <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <Data data={data} /> }
    </div>}
     

    </div>
  );
}
 
export default Usage;