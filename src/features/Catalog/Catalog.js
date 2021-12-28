import { useReducer } from "react";
import { Section, Header, Article } from "./CatalogStyledComponents.js";
import CatalogItem from "../CatalogItem/CatalogItem.js";
import "./CatalogStylesheet.css";

import catalogSidebarSlice, {
  toggle,
} from "../CatalogSidebar/CatalogSidebarSlice.js";

const CatalogList = [
  {
    name: "Karo Shirt",
    price: "10€",
    description: "This is a Karo shirt made with 80% Polyester",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    width: "350px",
    height: "500px",
    altImgText: "Ein Karo Shirt Bild",
  },
  {
    name: "BlackShirt",
    price: "10€",
    description: "This is a Black Orange Shirt",
    img: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    width: "350px",
    height: "500px",
    altImgText: "Ein Black Shirt Bild",
  },
  {
    name: "Blaues Hemd",
    price: "10€",
    description: "This is a Blaues Hemd",
    img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80",
    width: "370px",
    height: "500px",
    altImgText: "Ein Blaues Hemd ",
  },
];
function Catalog() {
  const [state, dispatch] = useReducer(catalogSidebarSlice, {
    toggleSidebar: null,
  });

  return (
    <div className="catalog-main-container">
     
      <Header>
        <u>Shirts</u>
      </Header>
      <Section>
        {CatalogList.map((element, index) => {
          return (
            <Article key={index + Math.random() * 1234}>
              <CatalogItem key={index + Math.random() * 1234} item={element} />
            </Article>
          );
        })}
      </Section>
    </div>
  );
}
export default Catalog;
