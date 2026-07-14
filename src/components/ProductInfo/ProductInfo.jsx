import { useParams } from "react-router-dom";
import style from "./ProductInfo.module.css";

export default function ProductInfo({ products }) {
  const { productId } = useParams();

  const product = products.find(
    item => item.id === Number(productId)
  );

  if (!product) {
    return <h2>Товар не знайдено</h2>;
  }

  return (
    <section className={style.product}>
      <div className={style.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={style.image}
        />
      </div>

      <div className={style.content}>
        <p className={style.breadcrumbs}>
          Всі товари / {product.category}
        </p>

        <h1 className={style.title}>{product.name}</h1>

        <div className={style.rating}>
          <span>★★★★★</span>
          <span className={style.reviews}>
            ({product.reviews} відгуків)
          </span>
        </div>

        <p className={style.price}>{product.price} грн</p>

        <p className={style.description}>
          {product.description}
        </p>

        <div className={style.actions}>
          <button className={style.cartButton}>
            Додати в кошик
          </button>

          <input
            type="number"
            defaultValue={1}
            min={1}
            className={style.quantity}
          />
        </div>

        <button className={style.buyButton}>
          Купити зараз
        </button>

        <p className={style.delivery}>
          Безкоштовна доставка для замовлень від 1600 грн
        </p>
      </div>
    </section>
  );
}