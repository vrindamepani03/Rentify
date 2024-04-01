import AboutUs from "./Screen/AboutUs";
import Filter from "./Screen/Filter";
import Home from "./Screen/Home";
import LogIn from "./Screen/LogIn";
import Mycart from "./Screen/Mycart";
import Property from "./Screen/Property";
import Property2 from "./Screen/Property2";
import Refer from "./Screen/Refer";
import Refer2 from "./Screen/Refer2";
import SignUp from "./Screen/SignUp"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/listpro" element={<Property />} />
          <Route path="/" element={<Home />} />
          <Route path='/signup'element={<SignUp />} />
          <Route path='/refer'element={<Refer/>}/>
          <Route path="/login" element={<LogIn />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/pro2" element={< Property2/>} />
          <Route path="/myc" element={< Mycart/>} />
          <Route path="/refer2" element={< Refer2/>} />
          <Route path="/aboutus" element={< AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
