import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Citations from "./pages/Citations";
import Login from "./pages/Login";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache: new InMemoryCache(),
});

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="citations" element={<Citations />} />
			<Route path="login" element={<Login />} />
			{/* ... etc. */}
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ApolloProvider client={client}>
		<RouterProvider router={router} />
	</ApolloProvider>
);
