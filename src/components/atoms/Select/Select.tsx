import { useState, useRef, useEffect, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
  className?: string;
  placeholder?: string;
  label?: string;
  isActive?: boolean;
}

export default function Select({ options, value, onChange, icon, className = '', placeholder, label, isActive = false }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`${styles.wrapper} ${className}`} ref={containerRef}>
      {label && (
        <div className={styles.labelContainer}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <span className={styles.topLabel}>{label}</span>
        </div>
      )}
      <button
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.open : ''} ${isActive ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.triggerText}>
          {selectedOption ? selectedOption.label : placeholder || 'Seleccionar'}
        </span>
        <ChevronDown size={16} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`${styles.option} ${value === option.value ? styles.selected : ''}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
