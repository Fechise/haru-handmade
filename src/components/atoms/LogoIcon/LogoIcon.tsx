import React from 'react';
import styles from './LogoIcon.module.scss';

export default function LogoIcon() {
  return (
    <span className={styles.icon} role="img" aria-label="Rabbit Logo">
      🐇
    </span>
  );
}
