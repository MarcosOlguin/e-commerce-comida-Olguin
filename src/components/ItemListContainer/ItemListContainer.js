import { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";
import ItemCount from "../ItemCount/ItemCount";

const data = [
  {
    id: 1,
    title: "Shelf",
    price: 2000,
    img: "https://placeimg.com/400/400/arch",
  },
  {
    id: 2,
    title: "Chair",
    price: 4000,
    img: "https://placeimg.com/400/400/animals",
  },
  {
    id: 3,
    title: "Table",
    price: 5000,
    img: "https://placeimg.com/400/400/nature",
  },
  {
    id: 4,
    title: "Desk",
    price: 6000,
    img: "https://placeimg.com/400/400/people",
  },
  {
    id: 5,
    title: "Closet",
    price: 2000,
    img: "https://placeimg.com/400/400/tech",
  },
  {
    id: 6,
    title: "Bed",
    price: 3000,
    img: "https://placeimg.com/400/400/grayscale",
  },
];

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const task = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    task.then((res) => setItems(res));
  }, []);

  const onAdd = (contador) => {
    alert(`Se agregaron ${contador} productos al carrito`);
  };

  console.log(items);

  return (
    <div style={{ paddingTop: "5%" }}>
      <h2>{greeting}</h2>
      <ItemCount stock={10} init={0} onAdd={onAdd} />
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
