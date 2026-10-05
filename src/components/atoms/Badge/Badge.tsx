import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'neutral';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
