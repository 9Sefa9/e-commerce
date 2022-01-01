import styled from "styled-components";

export const BackgroundVideoMainContainer = styled.div`

z-index:-999999999;

position:absolute;
left:0;
top:0;
&>video{
    margin: 0 auto;
    width:100%;

}

`;

export const VideoTitle = styled.h1`
color:white;
font-size: 6em;
position:absolute;
left:20%;
top:35%;
text-shadow: -1px 0 black, 0 5px black, 1px 0 black, 0 -1px black;
`;
