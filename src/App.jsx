import { Routes, Route } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/home";
import ProductsPage from "./pages/ProductsPage";
import SalePages from "./pages/Sale";
import ContactPages from "./pages/Contact";
import LayoutAdmin from "./layout/LayoutAdmin";
import HomeAdmin from "./pages/HomeAdmin";
import ProductList from "./pages/ProductList";
import ProductAdd from "./pages/ProductAdd";
  
function App (){
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} /> 
          <Route path="product" element={<ProductsPage />} />
          <Route path="sale" element={<SalePages />} />
          <Route path="contact" element={<ContactPages />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="/admin/productlist" element={<ProductList />} />
            <Route path="/admin/productlist/add" element={<ProductAdd />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
