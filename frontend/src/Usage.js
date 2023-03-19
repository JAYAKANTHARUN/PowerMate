import Data from "./Data";
import useFetch from "./useFetch";
const Usage = () => {
    
 // const { error, isPending, data } = useFetch('http://192.168.43.49:5000/')
  const { error, isPending, data } = useFetch('http://localhost:8000/energies-pulimada')//here ,error, isPending, data acting as hook
  console.log("hi");
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <Data data={data} /> }
    </div>
  );
}
 
export default Usage;