import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { GET_TOKEN } from "../features/auth/auth.mutations";
import '../styles/login.css';

const Login = () => {
  const [getToken, result] = useMutation(GET_TOKEN);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log("Esto es la respuesta", result);

  if(result.data) {
    localStorage.setItem('token', result.data.createAuth.token);
    localStorage.setItem('username', username);
  }

  return (
    <>
      <div className="login-form">
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'></input> 
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' type="password"></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            getToken({ variables: {parameter:{username:username,password:password}} });
          }}
        >Login</button>
        {result.data && <div className="">Este es el token: {result.data.createAuth.token}</div>}
        
      </div>
    </>
  );
};

export default Login;
