import Catalog from "../Catalog/Catalog.js";
import BackgroundSlideView from "../BackgroundSlideView/BackgroundSlideView.js";
function Home() {
  return (
    <>
      <BackgroundSlideView />
      {/**<CatalogSidebar /> **/}
      <Catalog />

      <footer>I am a Footer!</footer>
    </>
  );
}

export default Home;
