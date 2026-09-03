import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../../atoms/Typography/Typography';
import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  to: string;
}

export default function CategoryCard({ title, imageUrl, to }: CategoryCardProps) {
  return (
    <Link to={to} className={styles.cardBase}>
      {/* Background Image */}
      <img src={imageUrl} alt={title} className={styles.image} />

      {/* Title Box (Pink floating frame) */}
      <div className={styles.titleBox}>
        <Typography variant="h3" className={styles.titleText}>{title}</Typography>
      </div>
    </Link>
  );
}
