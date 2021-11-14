import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position:fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:#0d0b0a;
  height: 85px;
  width:100%;
  padding: 0% 2%;
  top:0;
  left:0;
  z-index: 12;
  box-shadow: 0px 1px 15px black;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: yellow;
  font-size: 2.5rem;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: white;
  background-color: #b8621d;
  display: flex;
  align-items: center;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 4px;
  font-size: 1rem;
  padding: 10px 20px;
  margin: auto 1rem;
  height: 100%;
  box-shadow: 0px 1px 5px white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &.active {
    background: #e3904b;
    color: black;
    font-size: 1.1rem;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e3904b;
    color: black;
    font-size: 1.1rem;
  }
`;
export const ImgLink = styled(Link)`
  text-decoration: none;
  text-align:center;
  font-size: 25px;
  color:black;

  height:45px;
  
  
  .shopping-cart-container{
    display: flex;
    flex-direction:row;
    align-items:top;
  }
  .shopping-cart-image{
    color: white;
    background-color: transparent;
    text-decoration: none;
    text-align:center;
    width: 42px;
    height: 42px;
    padding:2%;
    cursor: pointer;
    &.active {
        width: 44px;
        height: 44px;
    }
    &:hover {
        width: 44px;
        height: 44px;
    }
  }
  .shopping-cart-count{
    margin:auto 5%;
    font-size:23px;
    color:white;,
    
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  position:sticky;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 55px;
  padding-right: 65px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background:#b8621d;
  padding: 10px 20px;
  margin-left: 15px;
  color: white;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0px 1px 5px #ffad6b;
  &.active {
    background: #e3904b;
    color: black;
    font-size: 1.1rem;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background:  #e3904b;
    color: black;
    font-size: 1.1rem;
  }
`;
