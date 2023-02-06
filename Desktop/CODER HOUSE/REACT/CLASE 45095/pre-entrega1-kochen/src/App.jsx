import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";
import Destacados from "./components/Destacados";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <ItemListContainer greeting={"No se encontraron productos!"}/>
      <Destacados/>
      <Footer/>

    </div>
  );
}

export default App;
