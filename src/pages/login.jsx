import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { GET_TOKEN } from "../features/auth/auth.mutations";

const Login = () => {
  const [getToken, result] = useMutation(GET_TOKEN);

  // const [example, setExample] = useState(null);

  // useEffect(() => {
  // 	document.title = `${example}`;
  //   }, [example]);

  console.log("Esto es la respuesta", result);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error {error}</div>;

  return (
    <>
      <div>
        {/* <input onChange={(e) => setExample(e.target.value)}></input> */}
        <button
          onClick={(e) => {
            e.preventDefault();
            getToken({ variables: {parameter:{username:"developer",password:"developer"}} });
          }}
        >Login</button>
        <div className="title"></div>
        
      </div>
    </>
  );
};

export default Login;
