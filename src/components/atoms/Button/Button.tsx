import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
  children: React.ReactNode;
  to?: string;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md',
  isActive = false,
  children, 
  to, 
  className: customClassName = '',
  ...props 
}: ButtonProps) {
  const className = `
    ${styles.button} 
    ${styles[variant]} 
    ${styles[size]} 
    ${isActive ? styles.active : ''} 
    ${customClassName}
  `.trim();

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
