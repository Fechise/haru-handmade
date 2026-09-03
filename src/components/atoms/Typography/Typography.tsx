import React from 'react';
import styles from './Typography.module.scss';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'alt-h1' | 'alt-h2' | 'alt-h3' | 'alt-h4';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Typography({ variant = 'body', children, className = '', style }: TypographyProps) {
  // If variant contains 'alt-', we render the equivalent heading tag (e.g., 'alt-h1' -> 'h1')
  const tagType = variant.startsWith('alt-') ? variant.replace('alt-', '') : variant;
  const Component = tagType.startsWith('h') ? tagType as keyof JSX.IntrinsicElements : 'p';
  
  return (
    <Component className={`${styles.typography} ${styles[variant]} ${className}`} style={style}>
      {children}
    </Component>
  );
}
