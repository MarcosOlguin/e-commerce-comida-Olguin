import "./Item.css";
import "./Heart.css";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const [active, setActive] = useState(false);
  const { title, price, img, id } = item;
  let navigate = useNavigate();

  const likeClick = () => {
    active ? setActive(false) : setActive(true);
  };

  const detailsClick = (e) => {
    console.log(e);
    navigate(`/item/${id}`);
  };

  //console.log(active);
  return (
    <div className="item px-10">
      <div onClick={detailsClick} className="div-img">
        <img className="img-item" src={img} alt="img" />
      </div>

      <h2 className="pt-3 pb-3 pl-3 text-xl font-bold">{title}</h2>
      <div className="div-flex ">
        <p className="pl-3 text-xl font-bold">
          ${price.toLocaleString("en-US")}
        </p>
        <span onClick={likeClick} className={`heart-${active}`}></span>
      </div>
      <button onClick={detailsClick} id={id} className="details mb-40 mt-3">
        Details
      </button>
    </div>
  );
}

export default Item;
