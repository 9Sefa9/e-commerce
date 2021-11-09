import styled from "styled-components";

export const ButtonContainer = styled.div`
    display:flex;
`;

export const Button = styled.button`
border-radius: 4px;
background: transparent;
padding: 10px 20px;
margin-left: 15px;
color: white;
outline: none;
border: 1px solid #fff;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&.active {
  background: white;
  color: black;
  font-size: 1.1rem;
}
&:hover {
  transition: all 0.2s ease-in-out;
  background: white;
  color: black;
  font-size: 1.1rem;
}
`;