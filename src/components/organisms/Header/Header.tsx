
import Logo from '../../molecules/Logo/Logo';
import NavItem from '../../molecules/NavItem/NavItem';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo />
        <nav className={styles.nav}>
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/catalog">Catálogo</NavItem>
          <NavItem to="/about">Sobre Nosotros</NavItem>
          <span className={styles.separator}>|</span>
          <NavItem to="/contact">Contacto</NavItem>
        </nav>
      </div>
    </header>
  );
}
