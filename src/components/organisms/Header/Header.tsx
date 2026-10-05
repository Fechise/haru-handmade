import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../molecules/Logo/Logo';
import NavItem from '../../molecules/NavItem/NavItem';
import styles from './Header.module.scss';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo />
        
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isMobileMenuOpen && (
          <div className={styles.overlay} onClick={closeMenu} />
        )}

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <div className={styles.navItems} onClick={closeMenu}>
            <NavItem to="/">Inicio</NavItem>
            <NavItem to="/catalog">Catálogo</NavItem>
            <NavItem to="/about">Sobre Nosotros</NavItem>
            <span className={styles.separator}>|</span>
            <NavItem to="/contact">Contacto</NavItem>
          </div>
        </nav>
      </div>
    </header>
  );
}
