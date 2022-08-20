import "./Item.css";
import "./Heart.css";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

function Item({ item }) {
  const [active, setActive] = useState(false);
  const { title, price, img } = item;
  const onAdd = (contador) => {
    alert(`Se agregaron ${contador} productos al carrito`);
  };

  const likeClick = () => {
    active ? setActive(false) : setActive(true);
  };

  console.log(active);
  return (
    <div className="item px-10">
      <img className="img-item" src={img} alt="img" />
      <h2 className="pt-3 pb-3 pl-3 text-2xl">{title}</h2>
      <div className="div-flex ">
        <p className="pl-3">${price}</p>
        <span onClick={likeClick} className={`heart-${active}`}></span>
      </div>
      <button className="details mb-40 mt-3">Details</button>
    </div>
  );
}

export default Item;
