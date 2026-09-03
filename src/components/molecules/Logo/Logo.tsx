import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import logoImg from '../../../assets/HaruHandmade_SinFondo_Recortada.png';

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logoImg} alt="Haru Handmade Logo" className={styles.logoImage} />
    </Link>
  );
}
