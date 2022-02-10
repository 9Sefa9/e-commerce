import "./CatalogItemStylesheet.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {RiPriceTag3Line} from "react-icons/ri";
import { Badge } from "react-bootstrap";
function CatalogItem(props) {

  return (
    <article className="catalog-main-container">
      <img className="catalog-item-image" width={props.item.width} height={props.item.height} src={props.item.img} alt={props.item.altImgText}/>
      <div>
        <div className="catalog-information-container">
          <header className="catalog-item-header">{props.item.name}</header>
          <p className="catalog-item-description">{props.item.description}</p>
          
          {/** use data-item-id as attribute and adjust the REST-API later? **/}
        </div>
        <div className="catalog-button-container">
          <button className="catalog-item-cart-button"><AiOutlineShoppingCart size={25}/>Add to cart</button>
          <Badge pill bg="light" className="catalog-item-price"><RiPriceTag3Line size={25}/>{props.item.price}</Badge>
        </div>
      </div>
    </article>
  );
}

export default CatalogItem;
