import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  margin-top: 1%;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: transparent;
  padding: 15px 20px;
  color: black;
  font-size: 1.1rem;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0px 1px 5px black;
  &.active {
    background: white;
    color: black;
    font-size: 1.3rem;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
    font-size: 1.3rem;
  }
`;

export const SidebarContainer = styled.div`
  position:fixed;
  height:auto;
  top:0;
  left:0%;
  width: 20%;
  z-index: 1;
  padding-top: 20px;
  display: flex;
  flex-direction:row;
  background-color: yellow;
  height:100%;
  animation-name: ${props => props.on ? "out-animation" : "in-animation"};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes out-animation{
    from{
      left: 0%;
    }
    to{
      left: -20%;
    }
   }
   @keyframes in-animation{
    from{
      left: -20%;
    }
    to{
      left: 0%;
    }
   }
`;
