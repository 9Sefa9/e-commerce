import {
  Nav,
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
const NavigationBar = () => {
  return (
    <div>
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
              <p  data-testid="shopping-cart-count-testid" className="shopping-cart-count">9999</p>
            </div>
          </ImgLink>
          {/*<ImgLink to="/cart" activeStyle>
            <div className="shopping-cart-container">
              <img
                className="shopping-cart-image"
                src={shoppingCartImage}
                alt="Shopping Cart Icon"
              />
              <p className="shopping-cart-count">9999</p>
            </div>
          </ImgLink>*/}

          <NavBtn>
            {/*<NavBtnLink to="/sign-in" activeStyle>
                  Sign In
                </NavBtnLink>
              <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>*/}
            <FaRegUserCircle size={55} color="white" />
          </NavBtn>
        </NavMenu>
      </Nav>
    </div>
  );
};
export default NavigationBar;
