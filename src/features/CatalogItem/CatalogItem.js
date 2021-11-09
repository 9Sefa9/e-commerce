import {Item} from "./CatalogItemStyledComponent.js";
function CatalogItem(props) {

  return (
    <Item>
      <header className="catalog-item-header">{props.item.name}</header>
      <img className="catalog-item-image"src={props.item.img} alt={props.item.altImgText}/>
      <p className="catalog-item-description">{props.item.description}</p>
      <p className="catalog-item-price">{props.item.price}</p>
    </Item>
  );
}

export default CatalogItem;
