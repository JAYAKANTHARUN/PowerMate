
//const {lis} = require('./lis.js');


const Home = () => {
  const lis = localStorage.getItem('lis');
  console.log(lis);
  return (
    <div className="home">
      <h1>HOME PAGE</h1>
    </div>
  );
}
 
export default Home;