import React, { useState, useEffect } from "react";
import { useMutation  } from "@apollo/client";
import { GET_TOKEN } from "../features/auth/auth.mutations";

const Login = () => {
	const { loading, error, data } = useMutation (GET_TOKEN, {
		
	});

	// const [example, setExample] = useState(null);

	// useEffect(() => {
	// 	document.title = `${example}`;
	//   }, [example]);

	console.log("Esto es la respuesta",data);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error {error}</div>;

	return (
		<>
			<div>
				<input onChange={(e) => setExample(e.target.value)}></input>
				<div className="title">Login</div>
				{data.createAuth.map((item) => (
					<div key={item.token} className='token-row'>
						<span>{item.token}</span>
					</div>
				))}
			</div>
		</>
	);
};

export default Login;