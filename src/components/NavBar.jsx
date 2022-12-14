import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<input type="checkbox" id="active"></input>
			<label htmlFor="active" className="menu-btn">
				<i className="fas fa-bars"></i>
			</label>
			<div className="wrapper">
				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"personal_info"}>Información Personal</Link>
					</li>
					<li>
						<Link to={"citations"}>Citations</Link>
					</li>
					<li>
						<Link to={"academicInfo"}>Informacion Academica</Link>
					</li>
					<li>
						<Link to={"courses"}>Cursos</Link>
					</li>
					<li>
						<Link to={"grades"}>Calificaciones</Link>
					</li>
					<li>
						<Link to={"integration"}>Integración</Link>
					</li>
					<li>
						<Link to={"login"}>Cerrar Sesión</Link>
					</li>
				</ul>
			</div>
			
		</>
	);
};

export default Navbar;
