import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CategoriePage from "./pages/СategoriesPage/CategoriesPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Routes>
      <Route path="/zerniatko" element={<MainPage />} />
      <Route path="/zerniatko/categories" element={<CategoriePage />} />
      <Route path="/zerniatko/products" element={<ProductsPage />} />
      <Route path="/zerniatko/register" element={<RegisterPage />} />
    </Routes>
    </>
  );
}

export default App;
