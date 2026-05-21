

import Header from "../../components/Header";
import GallerySection from "./components/GallerySection";
import WhatweDo from "./components/WhatweDo";
import Work from "./components/Work";
import ProjectFilter from "./components/ProjectFilter";
import Cta from "./components/Cta";
function App() {
  return (
    <>
      <Header />
      <Work />
      <GallerySection />
      <WhatweDo />
      <ProjectFilter/>
      <Cta.jsx/>

    </>
  );
}

export default App;