import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarItemDetail from "../NavBar/NavBarItemDetail";
import ItemDetail from "./ItemDetail";
const jsonData = require(`../../api/db.json`);

function ItemDetailCointainer() {
  const [item, setItem] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    const task = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(jsonData.data);
      }, 2000);
    });

    task.then((res) => {
      setItem(res.filter((e) => e.id == id));
    });
  }, [id]);

  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2 " }}>
        <NavBarItemDetail />
        {item && <ItemDetail item={item} />}
      </div>
    </>
  );
}

export default ItemDetailCointainer;
