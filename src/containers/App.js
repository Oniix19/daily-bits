import { StyleD } from "../styles/StyleD";
import Login from "../components/Login";
import Home from "../components/Home";
import Estadisticas from "../components/Estadisticas";
import Questionario from "../components/Questionario";
import Formulario from "../components/Formulario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Perfil from "../components/Perfil";

function App() {
  return (
    <StyleD>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/formulario' element={<Formulario/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/estadisticas' element={<Estadisticas />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/questionario' element={<Questionario />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StyleD> 
  );
}

export default App;
