import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { GET_TOKEN } from "../features/auth/auth.mutations";

const Login = () => {
  const [getToken, result] = useMutation(GET_TOKEN);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  console.log("Esto es la respuesta", result);


  return (
    <>
      <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)}></input> 
        <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
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
