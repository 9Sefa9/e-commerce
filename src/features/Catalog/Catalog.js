import CatalogItem from "../CatalogItem/CatalogItem.js";
import "./CatalogStylesheet.css";

//Will be fetched from Database/REST soon
const CatalogList = [
  {
    name: "Men's Black Suit",
    price: "97,99€",
    description: "A suit or lounge suit is a set of clothes comprising a suit jacket and trousers of identical textiles worn with a collared dress shirt, necktie, and dress shoes. It is considered informal wear in Western dress codes. The lounge suit originated in 19th-century Britain as a more casual alternative for sportswear and British country clothing. After replacing the black frock coat in the early 20th century as regular daywear, a sober one-colored suit became known as a lounge suit. A black lounge suit for professional occasions became known as a business suit and belongs to the day dress of the semi-formal wear dress code.Suits are offered in different designs and constructions. Cut and cloth, whether two- or three-piece, single- or double-breasted, vary, in addition to various accessories. A two-piece suit has a jacket and trousers; a three-piece suit adds a waistcoat. Hats were almost always worn outdoors (and sometimes indoors) with all men's clothes until the counterculture of the 1960s in Western culture. Informal suits have been traditionally worn with a fedora, a trilby, or a flat cap. ",
    img: "https://i.pinimg.com/736x/95/6c/3b/956c3b6ec51c16f6dcb135e4d8d04cd8.jpg",
    width: "650px",
    height: "985px",
    altImgText: "Posing men wearing a black suit",
  },
  {
    name: "Suit in Black - Shelby Edition",
    price: "149,99€",
    description: "Thomas Michael Shelby OBE DCM MM MP is a fictional character and the main protagonist in the British period crime drama Peaky Blinders. He is played by Irish actor Cillian Murphy, who has won an Irish Film & Television Award and National Television Award for his portrayal of Shelby. The character has received critical acclaim from critics.Director Steven Knight cast Murphy for the role of Tommy Shelby. The character is a World War I veteran from a diddicoy family based in Birmingham. In 1919, we are introduced to Shelby and the story largely revolves around his romance with Grace and his conflict with Inspector Campbell. Shelby's relationship with Alfie Solomons is a key element of many of the storylines in Peaky Blinders.",
    img: "https://i.pinimg.com/564x/49/f0/33/49f033c1a0675fc7bdf9c3c2b5e92651.jpg",
    width: "508px",
    height: "903px",
    altImgText: "Cillian Murphy looking outside a window while having a cigarette"
  },
  {
    name: "Dons Prep Style Suit ",
    price: "119,98€",
    description: "Suiting up for the season, Wouter Peelen wears a three-piece suit by Scapa.",
    img: "https://i.pinimg.com/564x/27/4f/f3/274ff3eb1c82d0aea7ce81d5a9bd38b8.jpg",
    width: "508px",
    height: "762px",
    altImgText: "A man waring a Dons Prep Suit holding a hat",
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
  {
    name: "Blaues Hemd",
    price: "10€",
    description: "This is a Blaues Hemd",
    img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80",
    width: "370px",
    height: "500px",
    altImgText: "Ein Blaues Hemd ",
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
  {
    name: "Blaues Hemd",
    price: "10€",
    description: "This is a Blaues Hemd",
    img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80",
    width: "370px",
    height: "500px",
    altImgText: "Ein Blaues Hemd ",
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
  return (
    <>
      <div className="catalog-title">
        Discover
      </div>
      <section className="catalog-section">
        {CatalogList.map((element, index) => {
          return (
              <CatalogItem key={index + Math.random() * 121315} item={element} />
          );
        })}
      </section>
    </>
  );
}
export default Catalog;
