import { Routes, Route } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/home";
import ProductsPage from "./pages/ProductsPage";
import SalePages from "./pages/Sale";
import ContactPages from "./pages/Contact";
import LayoutAdmin from "./layout/LayoutAdmin";
import Dashboard from "./pages/admin/Dashboard";
import ProductList from "./pages/admin/ProductList";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
  
function App (){
  return (
    <>
      <Routes>
      <Route path="Signin" element={<Signin />} />
      <Route path="Signup" element={<Signup />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} /> 
          <Route path="product" element={<ProductsPage />} />
          <Route path="sale" element={<SalePages />} />
          <Route path="contact" element={<ContactPages />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/add" element={<ProductAdd />} />
            <Route path="products/:id/edit" element={<ProductEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
