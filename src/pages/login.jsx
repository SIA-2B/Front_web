import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { GET_TOKEN } from "../features/auth/auth.mutations";
import '../styles/login.css';

const Login = () => {
  const [getToken, result] = useMutation(GET_TOKEN);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log("Esto es la respuesta", result);


  return (
    <>
      <div className="login-form">
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'></input> 
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña'></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            getToken({ variables: {parameter:{username:username,password:password}} });
          }}
        >Login</button>
        <div className="title"></div>
        
      </div>
    </>
  );
};

export default Login;
