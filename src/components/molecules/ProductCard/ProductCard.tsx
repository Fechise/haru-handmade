import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  price?: number;
}

export default function ProductCard({ id, title, imageUrl, description, price = 10 }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        {description && <p className={styles.description}>{description}</p>}
        
        <div className={styles.footer}>
          <span className={styles.price}>${price}</span>
          <Link to={`/product/${id}`} className={styles.button}>
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}
