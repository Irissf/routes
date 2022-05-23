import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <div>
        {/* Outlet, donde pintamos el contenido de las rutas dentro de otras */}
          <Outlet></Outlet>
        </div>
    </div>
  );
}

export default App;
