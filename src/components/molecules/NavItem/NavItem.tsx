import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.scss';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export default function NavItem({ to, children }: NavItemProps) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
    >
      {children}
    </NavLink>
  );
}
