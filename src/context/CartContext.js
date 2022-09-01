import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, countCart) => {
    let itemID = { ...item[0], countCart };
    let itemInCart = cart.some((e) => e.id === itemID.id);

    !itemInCart
      ? setCart([...cart, itemID])
      : setCart(
          cart.map((cartItem) =>
            cartItem.id === itemID.id
              ? { ...cartItem, countCart: cartItem.countCart + countCart }
              : cartItem
          )
        );
  };

  const removeItem = (id) => {
    let itemToDelte = cart.find((item) => item.id === id);
    console.log(itemToDelte);

    itemToDelte.countCart > 1
      ? setCart(
          cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, countCart: cartItem.countCart - 1 }
              : cartItem
          )
        )
      : setCart(cart.filter((itemCart) => itemCart.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = () => {};

  const data = { addItem, removeItem, clear, isInCart, cart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
