import { Section, Header, Article } from "./CatalogStyledComponents.js";
import CatalogItem from "../CatalogItem/CatalogItem.js";
const CatalogList = [
  {
    name: "BlackShirt",
    price: "10€",
    description: "This is a Black shirt made with 80% Polyester",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    altImgText: "Ein Black Shirt Bild",
  },
  {
    name: "BlackShirt",
    price: "10€",
    description: "This is a Black shirster",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    altImgText: "Ein Black Shirt Bild",
  },
  {
    name: "BlackShirt",
    price: "10€",
    description: "This is a Brt made with 80% Polyester",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    altImgText: "Ein Black Shirt Bild",
  },
  {
    name: "BlackShirt",
    price: "10€",
    description: "This is a Black shirt made with 80% Polyestejhklhjklhjklhjklrsssssssssssss",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    altImgText: "Ein Black Shirt Bild",
  },
  {
    name: "BlackShirt",
    price: "10€",
    description: "This is a Black shirt made with 80% Polyesterhjklhjkl",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    altImgText: "Ein Black Shirt Bild",
  },
  {
    name: "BlackShirt",
    price: "10€",
    description: "This is a olyester",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    altImgText: "Ein Black Shirt Bild",
  },
  {
    name: "BlackShirt",
    price: "10€",
    description: "This is a Black shirt made with  Polyester",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    altImgText: "Ein Black Shirt Bild",
  },
  {
    name: "BlackShirt",
    price: "10€",
    description: "This is a Black shirt made with 80% Polhjklhjklhjklyester",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    altImgText: "Ein Black Shirt Bild",
  },
  {
    name: "WhiteShirt",
    price: "16€",
    description: "This is a White hjklhjklhjlkshirt",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    altImgText: "Ein White Shirt Bild",
  },
];
function Catalog() {
  return (
    <div>
      <Header><u>T-Shirts</u></Header>
      <Section>
        {CatalogList.map((element) => {
          return (
            <Article>
              <CatalogItem item={element} />
            </Article>
          );
        })}
      </Section>
    </div>
  );
}
export default Catalog;
