import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gall from "./Components/Gall/Gall";
import Header from "./Components/Header/Header";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route index element={<Gall title="jibon" />}></Route>
            <Route path="jibon" element={<Gall title="jibon" />}></Route>
            <Route path="sojib" element={<Gall title="sojib" />}></Route>
            <Route path="redio" element={<Gall title="redio" />}></Route>
            <Route path="rakib" element={<Gall title="rakib" />}></Route>
            <Route path="miloon" element={<Gall title="miloon" />}></Route>
          </Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop/:slug" element={<SingleProduct />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
