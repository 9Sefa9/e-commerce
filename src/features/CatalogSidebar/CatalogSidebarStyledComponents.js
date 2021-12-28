import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: 10%;
  padding:1%;
  background-color:rgba(0,0,0,0.5);
  box-shadow: 10px 1px 20px black;
`;

export const ButtonToggle = styled.button`
  border-radius: 4px;
  background: #574240;
  padding: 15px 20px;
  color: white;
  font-size: 1.1rem;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0px 1px 5px black;
  &.active {

    color: black;
    font-size: 1.3rem;
  }
  &:hover {
    transition: all 0.2s ease-in-out;

    color: black;
    font-size: 1.3rem;
  }
`;
export const NavButton= styled.button`
  border-radius: 4px;
  background: #f8bd66;
  padding:  10px 20px;
  margin-left:2%;
  color: black;
  font-size: 1.1rem;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0px 1px 5px white;
  &.active {

    color: black;
    background-color: #717fff;
    font-size: 1.3rem;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #717fff;
    color: black;
    font-size: 1.3rem;
  }
`;
export const SidebarContainer = styled.div`
  position:fixed;
  height:auto;
  top:0;
  left: -25%;
  width: 25%; 
  z-index: 1; 
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-evenly;
  background-color: #353854;
  box-shadow: 0px 1px 5px black;
  height:100%;
  animation-name: ${props => props.sidebarStatus === null ? "null-animation" : props.sidebarStatus === true ? "out-animation" : "in-animation"};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes out-animation{
    from{
      left: -25%;
    }
    to{
      left: 0%;
    }
   }
   @keyframes in-animation{
    from{
      left: 0%;
    }
    to{
      left: -25%;
    }
   }
   @keyframes null-animation{
    from{
      left: -25%;
    }
    to{
      left: -25%;
    }
   }
`;
