import { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";
const jsonData = require(`../../api/db.json`);

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(jsonData.data);
      }, 2000);
    });

    task.then((res) => setItems(res));
  }, []);

  //console.log(items);

  return (
    <>
      <h2 className="title">{greeting}</h2>
      <div style={{ paddingTop: "5%" }}>
        <ItemList items={items} />
      </div>
    </>
  );
}

export default ItemListContainer;
