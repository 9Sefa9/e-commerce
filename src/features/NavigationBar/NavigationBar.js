import {
  Nav,
  NavLogo,
  NavLink,
  ImgLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavigationBarElements";
import shoppingCartImage from "./images/shopping-cart.png";
const NavigationBar = () => {
  return (
    <>
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
              <img
                className="shopping-cart-image"
                src={shoppingCartImage}
                alt="Shopping Cart Icon"
              />
              <p className="shopping-cart-count">9999</p>
            </div>
          </ImgLink>

          <NavBtn>
            <NavBtnLink to="/sign-in" activeStyle>
              Sign In
            </NavBtnLink>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default NavigationBar;
