import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/NavBar/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"All products"} />
    </div>
  );
}

export default Home;
