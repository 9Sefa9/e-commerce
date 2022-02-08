import "./CatalogItemStylesheet.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
function CatalogItem(props) {

  return (
    <article className="catalog-main-container">
      <img className="catalog-item-image" width={props.item.width} height={props.item.height} src={props.item.img} alt={props.item.altImgText}/>
      <div className="catalog-information-container">
        <header className="catalog-item-header">{props.item.name}</header>
        <p className="catalog-item-description">{props.item.description}</p>
        <p className="catalog-item-price">{props.item.price}</p>
        <button className="catalog-item-cart-button"><AiOutlineShoppingCart size={25}/>Add to cart</button>
      </div>
    </article>
  );
}

export default CatalogItem;
