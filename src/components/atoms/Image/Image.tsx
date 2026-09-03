import React from 'react';
import styles from './Image.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}

export default function Image({ aspectRatio = 'square', className = '', ...props }: ImageProps) {
  return (
    <div className={`${styles.wrapper} ${styles[aspectRatio]} ${className}`}>
      <img className={styles.img} {...props} />
    </div>
  );
}
