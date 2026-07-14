import { useState } from "react";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { Container } from "../../components/Container/ContainerLayout.jsx";
import style from "./CategoriesList.module.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function CategoriePage() {
  const totalItems = 12;
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (<>
  <Header />
  <main className={style.categorie}>
      
      <Container>
        <h2 className={style.categorie__title}>Категорії</h2>

      
        <CategoriesList limit={visibleCount} />

        <div className={style.categorie__div}>
        
          {visibleCount < totalItems && (
            <button className={style.categorie__btn} onClick={handleLoadMore}>
              Показати більше
            </button>
          )}
        </div>
      </Container>
    </main>
  <Footer/>
  </>
 
    
  );
}
