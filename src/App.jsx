import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/navbar.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
