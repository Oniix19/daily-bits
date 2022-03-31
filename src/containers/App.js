import { StyleD } from "../styles/StyleD";
import Login from "./Login";
import Home from "../components/Home";
import Estadisticas from "../components/Estadisticas";
import Perfil from "../components/Perfil";
import Navbar from "../components/Navbar";
import AppRoutes from "../routes/AppRoutes";
import Questionario from "./Questionario";

function App() {
  return (
    <StyleD>
      <div className="body">
        <Login />
        {/* <Home/> */}
        {/* <Estadisticas/> */}
        {/* <Perfil/> */}
        {/* <Navbar /> */}
        {/* <Questionario/> */}

        {/* <AppRoutes/> */}
      </div>
    </StyleD>

  );
}

export default App;
