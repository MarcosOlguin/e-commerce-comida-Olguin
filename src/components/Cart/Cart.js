import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, clear, removeItem } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <div className="background">
        {cart.length !== 0 ? (
          <div className="cart-background flex flex-col justify-between">
            {cart.map((e) => (
              <div className="cart-details" key={e.id}>
                <div className="flex items-start">
                  <img src={e.img} />
                  <div className="flex flex-col gap-3">
                    <p className="text-2xl">{e.title}</p>
                    <button
                      className="self-start"
                      onClick={() => removeItem(e.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <h2>
                  ${e.price} x{e.countCart}
                </h2>

                <p>${e.price * e.countCart}</p>
              </div>
            ))}
            <button className="self-start" onClick={clear}>
              Clear all
            </button>
          </div>
        ) : (
          <div className="cart-background-empty">
            <h2>Your cart is empty!</h2>
            <NavLink to="/">Thousands of products are waiting for you!</NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
