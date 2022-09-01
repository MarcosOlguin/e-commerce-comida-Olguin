import Cart from "../components/Cart/Cart";
import NavBarItemDetail from "../components/NavBar/NavBarItemDetail";

function CartPage() {
  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2 " }}>
        <NavBarItemDetail />
        <Cart />
      </div>
    </>
  );
}

export default CartPage;
