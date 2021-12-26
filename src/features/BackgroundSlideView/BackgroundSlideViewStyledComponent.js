import styled from "styled-components";

export const BackgroundVideoMainContainer = styled.div`

z-index:-999999999;
width:100%;
hright:100%;
position:absolute;
left:0;
top:2;
&>video{
    margin: 0 auto;
    width:100%;

}

`;

export const VideoTitle = styled.h1`
color:white;
font-size: 6em;
width:100%;
position:absolute;
left:20%;
top:10%;
text-shadow: -1px 0 black, 0 5px black, 1px 0 black, 0 -1px black;
`;