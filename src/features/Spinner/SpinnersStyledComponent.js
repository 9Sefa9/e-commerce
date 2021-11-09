import styled from "styled-components";

export const SpinnerAnimation = styled.div`
  width: 80px;
  height: 80px;
  margin: 25% auto;

   
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #2F4F4F;
    border-color: #DC143C transparent #DC143C transparent;
    animation: lds-dual-ring 0.5s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
