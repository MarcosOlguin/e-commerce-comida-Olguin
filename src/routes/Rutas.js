import { Route, Routes } from "react-router-dom";
import ItemDetailCointainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/NavBar/NavBar";
import { UseModal } from "../hooks/useModal";
import Category from "../pages/Category";
import Home from "../pages/Home";

function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="item/:id" element={<ItemDetailCointainer />} />
      </Routes>
    </>
  );
}

export default Rutas;
