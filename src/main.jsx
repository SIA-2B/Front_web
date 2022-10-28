import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Citations from "./pages/Citations";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import AcedemicInfo from "./pages/Academic_info";
import PersonalInfo from "./pages/PersonalInfo";
import Grades from "./pages/Grades"
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";

const client = new ApolloClient({
	uri: "http://4ce7-200-118-61-100.ngrok.io/graphql",
	
	cache: new InMemoryCache(),
});



const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="citations" element={<Citations />} />
			<Route path="courses" element={<Courses />} />
			<Route path="login" element={<Login />} />
			<Route path="academicInfo" element={<AcedemicInfo />} />
			<Route path="personal_info" element={<PersonalInfo />} />
			<Route path="grades" element={<Grades/>} /> 
			{/* ... etc. */}
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ApolloProvider client={client}>
		<RouterProvider router={router} />
	</ApolloProvider>
);
