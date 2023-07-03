import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Navbar from "./Components/Navbar.js";
import Demo from "./Components/Demo.js";
import Votp from "./Components/Votp.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyotp" element={<Votp />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
