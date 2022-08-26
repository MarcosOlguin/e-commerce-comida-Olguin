import { useEffect, useState } from "react";
import "../ItemCount/ItemCount.css";

function ItemCount({ stock, init, cart }) {
  const [contador, setContador] = useState((init = 0));
  const [buttonDisabled, setButtonDisabled] = useState(false);

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

  useEffect(() => {
    if (stock === 0) {
      setButtonDisabled(true);
    }
  }, [stock]);

  return (
    <div className="contador">
      <div>
        <button
          className={`outline outline-2 m-2 button-disabled`}
          onClick={() => alert(`Se agregaron ${contador} al carrito`)}
          disabled={buttonDisabled}
        >
          Agregar al carrito
        </button>
      </div>
      {stock ? (
        <div>
          <div className="count-button">
            <h2>Quantity:</h2>
            <button className="rest" onClick={restar}>
              -
            </button>

            <h3>{contador}</h3>
            <button className="sum" onClick={sumar}>
              +
            </button>
          </div>
          <div className="stock">
            <h2>Stock: {stock}</h2>
          </div>
        </div>
      ) : (
        <h2 className="no-stock">No hay Stock</h2>
      )}
    </div>
  );
}

export default ItemCount;
