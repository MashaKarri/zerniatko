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
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<CategoriePage />} />
    
      </Routes>
            <ProductsPage />
      <RegisterPage />
    </>
  );
}

export default App;
