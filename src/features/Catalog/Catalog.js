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
  }
];
function Catalog() {
  return (
    <div>
      <Header><u>T-Shirts</u></Header>
      <Section>
        {CatalogList.map((element, index) => {
          return (
            <Article key = {index + Math.random()*1234}>
              <CatalogItem key = {index + Math.random()*1234} item={element} />
            </Article>
          );
        })}
      </Section>
    </div>
  );
}
export default Catalog;
