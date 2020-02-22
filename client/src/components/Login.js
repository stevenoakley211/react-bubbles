import React,{useState} from "react";
import { axiosWithAuth } from "../axiosWithAuth";
const Login = (props) => {
  const [credentials, setCredentials] =useState({})
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", credentials)
      
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("invalid login: ", err);
        console.log(credentials)
      });
  };
  
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    }) 
}

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
  );
};

export default Login;
