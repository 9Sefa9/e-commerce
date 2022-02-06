import "./NavigationbarStylesheet.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {BsHouseDoor} from "react-icons/bs";
import {RiInformationLine} from "react-icons/ri";
import {FaRegUserCircle} from "react-icons/fa";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../logo.svg';
const NavigationBar = () => {
  return (
    <>
      <Navbar className="navigationbar-container" collapseOnSelect expand="md" variant="light" fixed="top">
        <Container>
        <Navbar.Brand className="navigation-logo" href="/"><img src={logo} width={100} height={100}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navigation-container" defaultActiveKey="/home">
            <Nav.Link className="navigation-link" href="/"><BsHouseDoor size={35}/>Home</Nav.Link>
            <Nav.Link className="navigation-link" href="/about"><RiInformationLine size={35} />About</Nav.Link>
            <Nav.Link className="navigation-link" href="/cart"><AiOutlineShoppingCart size={35}/><span className="shopping-cart-count">999999</span></Nav.Link> 
            <NavDropdown title={/* GrCircleInformation */ <FaRegUserCircle size={35}/> } id="collasible-nav-dropdown">
              <NavDropdown.Item className="navigation-item" href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navigation-item" href="/register">Register</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;

/*
import {
 // Nav,
  NavLogo,
  NavLink,
  ImgLink,
  Bars,
  NavMenu,
  NavBtn
} from "./NavigationBarStyledComponent";
//import shoppingCartImage from "./images/shopping-cart.png";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

<Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <ImgLink to="/cart" activeStyle>
            <div className="shopping-cart-container">
              <AiOutlineShoppingCart size={47} color="white" />
              <p className="shopping-cart-count">9999</p>
            </div>
          </ImgLink>
          <NavBtn>
            <FaRegUserCircle size={55} color="white" />
          </NavBtn>
        </NavMenu>
      </Nav>
*/