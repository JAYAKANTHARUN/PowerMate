//import { Link } from 'react-router-dom';


let te=0;
const Data = ({ data }) => {
  te=0;
  data.map(user=> (te+=user.energy));
  
  return (

    <div className="blog-list">
      {data.map(user=> (
        <div className="blog-preview"  >
          
            <h2>{ user.name }</h2>
            <p>energy : {user.energy }</p>
            <p>%used : {user.energy/te *100}</p>
           
          
        </div>
      ))}
    </div>
  );
}
 
export default Data;