import { ChevronLeft, ChevronRight } from 'lucide-react';
import IconButton from '../../atoms/IconButton/IconButton';
import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.pagination} aria-label="Navegación de páginas">
      <IconButton 
        variant="outline"
        size="md"
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft size={20} />
      </IconButton>

      {pages.map((page) => (
        <IconButton
          key={page}
          variant="outline"
          size="md"
          isActive={page === currentPage}
          onClick={() => onPageChange(page)}
          aria-label={`Ir a la página ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </IconButton>
      ))}

      <IconButton 
        variant="outline"
        size="md"
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
      >
        <ChevronRight size={20} />
      </IconButton>
    </nav>
  );
}
