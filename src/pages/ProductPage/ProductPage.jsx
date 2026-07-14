import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductInfo from "../../components/ProductInfo/ProductInfo.jsx";
import Reviews from "../../components/Reviews/Reviews";
import { Container } from "../../components/Container/ContainerLayout";

import style from "./ProductPage.module.css";

export default function ProductPage() {
  return (
    <>
      <Header />

      <main className={style.page}>
        <Container>
          <ProductInfo />
          <Reviews />
        </Container>
      </main>

      <Footer />
    </>
  );
}
