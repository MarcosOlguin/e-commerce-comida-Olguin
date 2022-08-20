import { useState } from "react";
import "../ItemCount/ItemCount.css";

function ItemCount({ stock, init, onAdd, cart }) {
  const [contador, setContador] = useState(init);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleAdd = () => {
    if (stock !== 0) {
      onAdd(contador);
    }
  };

  return (
    <div className="contador">
      <div>
        <button className="rest" onClick={restar}>
          -
        </button>
        <button className="outline outline-2 m-2" onClick={handleAdd}>
          Agregar al carrito
        </button>
        <button className="sum" onClick={sumar}>
          +
        </button>
      </div>
      <h3>{contador}</h3>
    </div>
  );
}

export default ItemCount;
