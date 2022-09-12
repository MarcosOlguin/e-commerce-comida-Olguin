import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Form from "../Form/Form";
import "./Cart.css";

function Cart() {
  const { cart, clear, removeItem, addItem, setCart, total, sum, rest } =
    useContext(CartContext);

  return (
    <>
      <div className="background flex  items-center">
        {cart.length !== 0 ? (
          <div className="cart-background flex flex-col justify-">
            <p className="mt-9 text-4xl">Cart</p>
            <div className="asddd">
              {cart.map((e) => (
                <div className="cart-border" key={e.id}>
                  <div className="cart-details">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center justify- h-full text-orange-500 ">
                        <button onClick={() => removeItem(e.id)}>X</button>
                      </div>
                      <div className="flex items-center gap-3 w-52">
                        <img src={e.img} />
                        <p className="text-2xl font-medium">{e.title}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex border-solid border">
                        <div className="px-2 py-1 text-xl">
                          <button
                            className="text-orange-500"
                            onClick={() => {
                              rest(e);
                            }}
                          >
                            -
                          </button>
                        </div>

                        <div className="px-4 py-2">
                          <h2>{e.countCart}</h2>
                        </div>
                        <div className="px-2 py-1">
                          <button
                            className="text-orange-500 text-xl"
                            onClick={() => sum(e)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-400">{e.stock} available</p>
                    </div>
                    <div className="w-14 text-lg ">
                      <p>${(e.price * e.countCart).toLocaleString("en-US")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={clear}>Clear all</button>
            <div className="flex justify-between px-32 mt-10 text-3xl">
              <span>Total</span>
              <div>
                <span>${total.toLocaleString("en-US")}</span>
              </div>
            </div>
            <div className="checkout self-end">
              <button>Proceed to checkout</button>
            </div>
          </div>
        ) : (
          <div className="cart-background-empty text-2xl">
            <h2>Your cart is empty</h2>
            <NavLink className="cart-empty" to="/">
              Thousands of products are waiting for you!
            </NavLink>
          </div>
        )}
        <div>
          <Form total={total} items={cart} />
        </div>
      </div>
    </>
  );
}

export default Cart;
