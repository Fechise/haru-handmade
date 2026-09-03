import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral';
  children: React.ReactNode;
  to?: string;
}

export default function Button({ variant = 'primary', children, to, ...props }: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${props.className || ''}`;

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
