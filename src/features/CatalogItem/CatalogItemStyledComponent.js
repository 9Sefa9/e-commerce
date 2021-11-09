import styled from "styled-components";

export const Item = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    border: 1px solid black;
    background-color: #F2F3F4;
    width:110%;
    box-shadow: 0px 5px 10px black;
    .catalog-item-image{
        box-shadow: 0px 5px 10px black;
        width:304px;
        height:506px;
    }
    .catalog-item-header, .catalog-item-description, .catalog-item-price, .catalog-item-header{
        font-size:20px;

    }
    .catalog-item-description{
        padding-left:10px;
        padding-right:10px;
    }
`;



