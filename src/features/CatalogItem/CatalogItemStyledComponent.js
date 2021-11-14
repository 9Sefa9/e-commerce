import styled from "styled-components";

export const Item = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    border: 1px solid black;
    background-color:white;
    width:100%;
    box-shadow: 0px 0px 10px white;
    border-radius: 10px;
    
    .catalog-item-image{
        box-shadow: 0px 5px 10px black;
    }
    .catalog-item-header, .catalog-item-description, .catalog-item-price, .catalog-item-header{
        font-size:20px;
        color:black;
    }
    .catalog-item-description{
        padding-left:5px;
        padding-right:5px;
    }
`;



