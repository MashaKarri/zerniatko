import style from "./PopularCategories.module.css";
import CategoriesList from "../CategoriesList/CategoriesList.jsx";
import { Container } from "../Container/ContainerLayout";
import { Link } from "react-router-dom"; 

export default function PopularCategories() {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.main_info}>
          <h1 className={style.main_text}>Популярні категорії</h1>
          <Link to="/categories" className={style.all_categories_btn}>
            Категорії
          </Link>
        </div>
        <div className={style.categories_container}>
          <CategoriesList limit={3} />
        </div>
      </Container>
    </section>
  );
}
