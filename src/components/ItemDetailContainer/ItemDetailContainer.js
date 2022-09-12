import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../../firebase/firebase";
import Loading from "../Loading/Loading";
import NavBarItemDetail from "../NavBar/NavBarItemDetail";
import ItemDetail from "./ItemDetail";
const jsonData = require(`../../api/db.json`);

function ItemDetailCointainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    // const task = new Promise((resolve, rejected) => {
    //   setTimeout(() => {
    //     resolve(jsonData.data);
    //   }, 2000);
    // });

    // task.then((res) => {
    //   setItem(res.filter((e) => e.id == id));
    // });
    setLoading(true);
    const asyncItem = async () => {
      const res = await getItemDetail(id);
      setLoading(false);
      setItem(res);
      console.log(res);
    };
    asyncItem();
  }, [id]);

  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2 " }}>
        <NavBarItemDetail />
        {loading && <Loading />}
        {item && <ItemDetail item={item} />}
      </div>
    </>
  );
}

export default ItemDetailCointainer;
