import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import NavBarItemDetail from "../NavBar/NavBarItemDetail";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  const { id, title, price, img, stock, description } = item[0];
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (stock === 0) {
      setButtonDisabled(true);
    }
  }, [stock]);

  return (
    <>
      <div className="asd">
        <div className="item-container">
          <div className="item-detail-img">
            <img className="img-detail" src={img} />
          </div>

          <div className="detail-container">
            <div className="detail-title">
              <h2>{title}</h2>
            </div>
            <div className="stars"></div>
            <div className="detail-price">
              <h2>${price}</h2>
              <span>Ver medios de pago</span>
            </div>
          </div>
          <div className="add-cart-buy">
            <button
              className="outline outline-2 m-2 button-buy"
              disabled={buttonDisabled}
            >
              Comprar ahora
            </button>
            <ItemCount stock={stock} />
          </div>
        </div>
        <hr />
        <div className="description">
          <h2>Description</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;