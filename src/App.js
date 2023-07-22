import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Demo from "./Components/Demo.js";
import Votp from "./Components/Votp.js";
import Landing from "./Pages/Landing.js";
import Intro from "./Components/Intro.js";
import Items from "./Components/Items.js";

function App() {
  return (
    <div className="App overscroll-none">
      <Routes>
        <Route exact path="/" element={<Landing />}>
          <Route index element={<Intro />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/item" element={<Items />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyotp" element={<Votp />} />
        {/* <Route path="/demo" element={<Demo />} /> */}
      </Routes>
    </div>
  );
}

export default App;
