import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Allproducts from "./Components/Allproducts.js";
import Votp from "./Components/Votp.js";
import Landing from "./Pages/Landing.js";
import Intro from "./Components/Intro.js";
import Items from "./Components/Items.js";

const App = () => {
  return (
    <div className="App bg-gray">
      <Routes>
        <Route exact path="/" element={<Landing />}>
          <Route index element={<Intro />} />
          <Route path="/products/:category" element={<Allproducts />} />
          <Route path="/item" element={<Items />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyotp" element={<Votp />} />
      </Routes>
    </div>
  );
};

export default App;
