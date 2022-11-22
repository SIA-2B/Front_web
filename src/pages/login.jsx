import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { GET_TOKEN } from "../features/auth/auth.mutations";
import "../styles/login.css";

const Login = () => {
	const [getToken, result] = useMutation(GET_TOKEN);

  useEffect(() => {
		localStorage.clear();
	}, []);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	if (result.data) {
		localStorage.setItem("token", result.data.createAuth.token);
		localStorage.setItem("username", username);
	}

	return (
		<>
			<div className="login-form">
				<input
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
					placeholder="Username"
				></input>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Contraseña"
					type="password"
				></input>
				<button
					onClick={(e) => {
						e.preventDefault();
            localStorage.clear();
						getToken({
							variables: {
								parameter: { username: username, password: password },
							},
						});
					}}
				>
					Login
				</button>
				{result.data && (
					<Navigate to="/personal_info" replace={false} />
				)}
        {result.error && (<div className="white-text">El usuario o Contraseña es incorrecto</div>)}
			</div>
		</>
	);
};

export default Login;
