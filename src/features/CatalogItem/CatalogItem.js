import "./CatalogItemStylesheet.css";
function CatalogItem(props) {

  return (
    <div className="item-main-container">
      <header className="catalog-item-header">{props.item.name}</header>
      <img className="catalog-item-image" width={props.item.width} height={props.item.height} src={props.item.img} alt={props.item.altImgText}/>
      <p className="catalog-item-description">{props.item.description}</p>
      <p className="catalog-item-price">{props.item.price}</p>
      <button className="catalog-item-cart-button">Add to cart</button>
    </div>
  );
}

export default CatalogItem;
