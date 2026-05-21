

import Header from "../../components/Header";
import GallerySection from "./components/GallerySection";
import WhatweDo from "./components/WhatweDo";
import Work from "./components/Work";
import ProjectFilter from "./components/ProjectFilter";
import Contact from "./components/Contact";
import Footer from "../../components/Footer";
function App() {
  return (
    <>
      <Header />
      <Work />
      <GallerySection />
      <WhatweDo />
      <ProjectFilter/>
      <Contact/>
      <Footer/>


    </>
  );
}

export default App;