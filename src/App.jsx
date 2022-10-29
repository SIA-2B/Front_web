import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/navbar.css";
import { useSelect,SelectProvider } from "./context/SelectContext";




function App() {
	useEffect(() => {
		document.title = "Home";
	}, []);

	return (
		<SelectProvider>
		<div>
			<Navbar />
			{/* <div className="">
				<h1>Bienvenidos al SIA</h1>
				<div className="cub-title">Sistema de Informacion Academica</div>
			</div> */}
			<Outlet />
		</div>
		</SelectProvider>
	);
}

export default App;
