import Item from "./Item";
import "./Item.css";

function ItemList({ items, ItemCount }) {
  return (
    <div className="flex-center">
      <div className="item-list">
        {items && items.map((item, i) => <Item item={item} key={i} />)}
      </div>
    </div>
  );
}

export default ItemList;
