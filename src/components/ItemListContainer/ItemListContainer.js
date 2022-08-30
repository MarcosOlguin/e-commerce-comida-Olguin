import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Item/ItemList";
const jsonData = require(`../../api/db.json`);

function ItemListContainer({ greeting }) {
  let { category } = useParams();
  const [items, setItems] = useState([]);
  const [itemsFilter, setItemsFilter] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(jsonData.data);
      }, 2000);
    });

    task.then((res) => setItems(res));
  }, []);

  useEffect(() => {
    if (category) {
      let filter = items.filter((e) => e.category == category);
      setItemsFilter(filter);
    }
    console.log(category);
  }, [items, category]);

  console.log(items);
  console.log(itemsFilter);

  return (
    <>
      <h2 className="title">{greeting}</h2>
      <div style={{ paddingTop: "5%" }}>
        <ItemList items={category ? itemsFilter : items} />
      </div>
    </>
  );
}

export default ItemListContainer;
