import "./CatalogItemStylesheet.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {RiPriceTag3Line} from "react-icons/ri";
import {MdOutlineLocalShipping} from "react-icons/md";
import {GiReturnArrow,GiRolledCloth,GiClothes} from "react-icons/gi";
import {BiBarcode} from "react-icons/bi";
import {CgColorBucket} from "react-icons/cg";
import { InputGroup, ListGroup, Badge, DropdownButton, Dropdown } from "react-bootstrap";
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
          <Badge pill bg="light" className="catalog-item-price"><RiPriceTag3Line size={25}/>{props.item.price} VAT included</Badge>

        </div>
        <div>
          <ListGroup>
            <ListGroup.Item> 
              <InputGroup>
              <DropdownButton variant="outline-secondary" title={<div><CgColorBucket size={25}/>Colors</div>} id="input-group-dropdown-1">
                <Dropdown.Item>S</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>M</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>L</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item >XL</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item >XXL</Dropdown.Item>
                <Dropdown.Divider />
              </DropdownButton>
              </InputGroup>
            </ListGroup.Item>
            <ListGroup.Item><BiBarcode size={25}/>Productcode: 114955662</ListGroup.Item>
            <ListGroup.Item><GiClothes size={25}/>Cloth: Made of fine, elastic mesh fabric which is soft and transparent</ListGroup.Item>
            <ListGroup.Item><GiRolledCloth size={25}/>Main: 95% Polyester, 5% Elastan.</ListGroup.Item>
            <ListGroup.Item><MdOutlineLocalShipping  size={25}/>Free Delivery</ListGroup.Item>
            <ListGroup.Item><GiReturnArrow size={25}/>Free Returns</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </article>
  );
}

export default CatalogItem;
