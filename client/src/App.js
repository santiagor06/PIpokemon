import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Home from "./components/Home";
import Detalle from "./components/Detalle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Inicio} />

        <Route path="/form" component={Form} />
        <Route path="/home" component={Home} />
        <Route path="/pokemon/:id" component={Detalle} />
      </div>
    </BrowserRouter>
  );
}

export default App;
