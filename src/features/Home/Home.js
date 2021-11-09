
import {
  Main,
  Header,
  Nav,
  Footer,
} from "./HomeStyledComponents.js";
import Catalog from "../Catalog/Catalog.js";
import CatalogSidebar from "../CatalogSidebar/CatalogSidebar.js";
function Home() {
  return (
    <div>
      <Header><p>Order now and get 10 % for your next purchase!  - - - Order now and get 10 % for your next purchase!</p></Header>
      <Nav><CatalogSidebar /></Nav>
      <Main>
        <Catalog />
      </Main>
     
      <Footer>
        I am a Footer!
      </Footer>
    </div>
  );
}

export default Home;
