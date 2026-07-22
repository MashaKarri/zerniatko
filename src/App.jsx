import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import CategoriePage from "./pages/СategoriesPage/CategoriesPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CabinetPage from "./pages/CabinetPage/CabinetPage";
function App() {
  return (
    <>
      {/* <MainPage />
      <CategoriePage />
      <ProductsPage />
      <RegisterPage /> */}
      <CabinetPage />
    </>
  );
}

export default App;
