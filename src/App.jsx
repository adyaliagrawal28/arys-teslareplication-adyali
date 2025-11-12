import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cars from "./pages/Cars"
import Customize from "./pages/Customize"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
