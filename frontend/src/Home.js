


const Home = () => {
  const lis = localStorage.getItem('lis');
  
  console.log(lis);

  return (
    
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
    
  );
}

export default Home;
