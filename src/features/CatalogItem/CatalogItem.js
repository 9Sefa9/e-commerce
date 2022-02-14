import "./CatalogItemStylesheet.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {RiPriceTag3Line} from "react-icons/ri";
import {MdOutlineLocalShipping} from "react-icons/md";
import {GiReturnArrow,GiRolledCloth,GiClothes} from "react-icons/gi";
import {BiBarcode} from "react-icons/bi";
import {CgColorBucket} from "react-icons/cg";
import {IoIosResize} from "react-icons/io";
import {FaRegDotCircle} from "react-icons/fa";
import { InputGroup, ListGroup, Badge, DropdownButton, Dropdown, Carousel } from "react-bootstrap";
function CatalogItem(props) {

  return (
    <article className="catalog-main-container">
      <div className="catalog-item-1">
        <Carousel className="catalog-carousel" wrap variant="light">
          <Carousel.Item>
            <img className="catalog-item-image" width={props.item.width} height={props.item.height} src={props.item.img} alt={props.item.altImgText}/>
            {/**<Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>**/}
          </Carousel.Item>  
          <Carousel.Item>
            <img className="catalog-item-image d-block" width={props.item.width} height={props.item.height} src={props.item.img} alt={props.item.altImgText}/>
            
          </Carousel.Item>  
          <Carousel.Item>
            <img className="catalog-item-image" width={props.item.width} height={props.item.height} src={props.item.img} alt={props.item.altImgText}/>
           
          </Carousel.Item>  
        </Carousel>
      </div>
      <div className="catalog-item-2">
        <div className="catalog-information-container">
          <header className="catalog-item-header">{props.item.name}</header>
          <p className="catalog-item-description">{props.item.description}</p>
          
          {/** use data-item-id as attribute and adjust the REST-API later? **/}
        </div>
        <div className="catalog-button-container">
          <button className="catalog-item-cart-button"><AiOutlineShoppingCart size={25}/>Add to cart</button>
          <Badge pill bg="light" className="catalog-item-price"><RiPriceTag3Line size={25}/>{props.item.price} VAT included</Badge>

        </div>
        <div className="catalog-list-group-container">
          <ListGroup>
            <ListGroup.Item> 
              <InputGroup>
              <div className="dropdown-button-container">
                <DropdownButton variant="outline-dark" title={<div> <IoIosResize size={25}/>Sizes</div>}>
                  {/** add Badge for marking "that" product as selected OR:   **/}
                  <Dropdown.Item >S</Dropdown.Item>
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
                <DropdownButton variant="outline-dark" title={<div> <CgColorBucket size={25}/>Colors</div>}>
                  {/** add Badge for marking "that" product as selected OR:   **/}
                  <Dropdown.Item >S</Dropdown.Item>
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
              </div>
              </InputGroup>
            </ListGroup.Item>
            <ListGroup.Item>Availability: <FaRegDotCircle size={25} color="green"/></ListGroup.Item>
            <ListGroup.Item>Selected: <Badge pill bg="dark">XL</Badge></ListGroup.Item>
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
