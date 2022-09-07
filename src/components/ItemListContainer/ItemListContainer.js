import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Item/ItemList";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";
const jsonData = require(`../../api/db.json`);

function ItemListContainer({ greeting }) {
  let { category } = useParams();
  const [items, setItems] = useState([]);
  const [itemsFilter, setItemsFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const task = new Promise((resolve, rejected) => {
      setLoading(true);
      setTimeout(() => {
        resolve(jsonData.data);
      }, 2000);
    });

    task.then((res) => setItems(res)).then(setLoading(false));
  }, []);

  useEffect(() => {
    if (category) {
      let filter = items.filter((e) => e.category === category);
      setItemsFilter(filter);
    }
    console.log(category);
  }, [items, category]);

  console.log(items);
  console.log(itemsFilter);

  return (
    <>
      {loading && <Loading />}
      <div>
        {category ? (
          <h2 className="title">
            {category[0].toUpperCase() + category.substring(1)}
          </h2>
        ) : (
          <h2 className="title">All products</h2>
        )}
        <ItemList items={category ? itemsFilter : items} />
      </div>
    </>
  );
}

export default memo(ItemListContainer);
