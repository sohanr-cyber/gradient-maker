import logo from "./logo.svg";
import "./App.css";
import Main from "./component/Main/Main";
import Navbar from "./component/Navbar/Navbar";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./component/Example/Example";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="example" element={<Example />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
