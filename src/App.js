import { useEffect } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <div className="App">
      <Rutas />
    </div>
  );
}

export default App;
