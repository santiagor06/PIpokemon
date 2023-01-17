import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Home from "./components/Home";
import Detalle from "./components/Detalle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/form" element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemon/:id" element={<Detalle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
