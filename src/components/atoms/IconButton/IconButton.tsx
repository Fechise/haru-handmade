import React from 'react';
import styles from './IconButton.module.scss';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
  'aria-label': string; // Mandatory for accessibility
  children: React.ReactNode;
}

export default function IconButton({ 
  variant = 'primary', 
  size = 'md',
  isActive = false,
  children, 
  className = '',
  ...props 
}: IconButtonProps) {
  const finalClassName = `
    ${styles.iconButton} 
    ${styles[variant]} 
    ${styles[size]} 
    ${isActive ? styles.active : ''} 
    ${className}
  `.trim();

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
