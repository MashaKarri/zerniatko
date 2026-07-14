import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import CategoriePage from "./pages/СategoriesPage/CategoriesPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>


      <Routes>
        <Route path="/zerniatko" element={<MainPage />} />
        <Route path="/zerniatko/categories" element={<CategoriePage />} />
        <Route path="/zerniatko/products" element={<ProductsPage />} />
        <Route path="/zerniatko/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/zerniatko" replace />} />
      </Routes>

    </>
  );
}

export default App;
