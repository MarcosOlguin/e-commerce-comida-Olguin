import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Item/ItemList";
const jsonData = require(`../../api/db.json`);

function ItemListContainerCategory() {
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
    if (items) {
      let filter = items.filter((e) => e.category == category);
      setItemsFilter(filter);
    }
  }, [itemsFilter]);
  console.log(itemsFilter);

  //console.log(items);

  return (
    <>
      <div style={{ paddingTop: "5%" }}>
        <ItemList items={itemsFilter} />
      </div>
    </>
  );
}

export default ItemListContainerCategory;
