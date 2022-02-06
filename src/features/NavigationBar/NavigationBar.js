import "./NavigationbarStylesheet.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="navigation-container" collapseOnSelect expand="md" variant="light" fixed="top">
        <Container>
        <Navbar.Brand className="navigation-logo"href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="/home">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <div className="shopping-cart-container">
              <Nav.Link href="/cart"><AiOutlineShoppingCart size={35} color="black" /><span className="shopping-cart-count">999999</span></Nav.Link>  
            </div>  
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
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