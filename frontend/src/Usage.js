import Data from "./Data";
import useFetch from "./useFetch";
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import { Link,useHistory } from "react-router-dom";

const Usage = () => {
    const history = useHistory();
 // const { error, isPending, data } = useFetch('http://192.168.43.49:5000/')
  const { error, isPending, data } = useFetch('http://localhost:8000/energies-pulimada')//here ,error, isPending, data acting as hook
  const lis = localStorage.getItem('lis');
  console.log(lis);
  return (<div className="App">
  {lis==0? <div><Navbar/></div>:<div><Navbar2/></div>}
 
    
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <Data data={data} /> }
    </div>
    </div>
  );
}
 
export default Usage;