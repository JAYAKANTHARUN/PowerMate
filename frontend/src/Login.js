import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

//const {lis} = require('./lis.js');
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username,password};
        console.log(user);
        fetch('http://192.168.43.49:5000/login', {
          
        method: 'POST',
        body: JSON.stringify({
          username:username,
          password:password,
      
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      
  
  

  

        }) .then(res => {
            return res.json();// format:staus:0 or 1
          })
          .then(data => {
            console.log(data.status)
            localStorage.setItem('lis',data.status );
            localStorage.setItem('username',username );
            if(data.status )
            {
            history.push('/usage')
            }else{
              history.push('/l')
            }
          //continue applying logic from here***
          })
          .catch(err => {
            console.log(err)
          })
    }
        
       

  return (
    
    <div>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username}  onChange={(e) => setUsername(e.target.value)}></input>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}></input>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  );
}
 
export default Login;