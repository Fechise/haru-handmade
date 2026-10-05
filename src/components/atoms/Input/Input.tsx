import React, { type ReactNode } from 'react';
import styles from './Input.module.scss';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'icon'> {
  className?: string;
  icon?: ReactNode;
}

export default function Input({ className = '', icon, ...props }: InputProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <input className={`${styles.input} ${icon ? styles.withIcon : ''}`} {...props} />
    </div>
  );
}
