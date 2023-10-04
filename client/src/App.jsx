import NavBar from "./components/NavBar"
import AppRoutes from "./components/AppRoutes"
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='app'>
        <h1>React on Rails</h1>
        <p>List of posts</p>
        <>test</>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
