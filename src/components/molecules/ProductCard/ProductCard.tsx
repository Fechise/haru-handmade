import React from 'react';
import Typography from '../../atoms/Typography/Typography';
import Image from '../../atoms/Image/Image';
import Button from '../../atoms/Button/Button';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  id: string;
  title: string;
  imageUrl: string;
}

export default function ProductCard({ id, title, imageUrl }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={title} aspectRatio="video" className={styles.image} />
      <div className={styles.content}>
        <Typography variant="h4" className={styles.title}>{title}</Typography>
        <Button to={`/product/${id}`} variant="primary" className={styles.button}>
          Ver detalles
        </Button>
      </div>
    </div>
  );
}
