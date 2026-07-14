import { useRef } from "react";
import style from "./PopularCategories.module.css";
import CategoriesList from "../CategoriesList/CategoriesList.jsx";
import { Container } from "../Container/ContainerLayout";
import { Link } from "react-router-dom"; 

export default function PopularCategories() {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className={style.section}>
      <Container>
        <div className={style.main_info}>
          <h1 className={style.main_text}>Популярні категорії</h1>
          <Link to="/zerniatko/categories" className={style.all_categories_btn}>
            Категорії
          </Link>
        </div>

        <div className={style.slider_wrapper}>
          <button className={`${style.arrow_btn} ${style.arrow_left}`} onClick={scrollLeft} aria-label="Назад">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

         
          <div className={style.categories_container} ref={listRef}>
            <CategoriesList limit={12} />
          </div>

          <button className={`${style.arrow_btn} ${style.arrow_right}`} onClick={scrollRight} aria-label="Вперед">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
