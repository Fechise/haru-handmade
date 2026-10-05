import { Search, ListFilter, Tag, ArrowUpDown, RotateCcw } from 'lucide-react';
import Typography from '../../atoms/Typography/Typography';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import Button from '../../atoms/Button/Button';
import styles from './FilterSidebar.module.scss';

interface FilterSidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (cat: string) => void;
  availability: string;
  setAvailability: (avail: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  hasFilters: boolean;
  clearFilters: () => void;
}

export default function FilterSidebar({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  availability,
  setAvailability,
  sortBy,
  setSortBy,
  hasFilters,
  clearFilters,
}: FilterSidebarProps) {

  const categoryOptions = [
    { value: 'all', label: 'Todas' },
    { value: 'cosmetiqueras', label: 'Cosmetiqueras' },
    { value: 'monederos', label: 'Monederos' },
    { value: 'estuches', label: 'Estuches' }
  ];

  const availabilityOptions = [
    { value: 'all', label: 'Cualquiera' },
    { value: 'available', label: 'En stock' },
    { value: 'order', label: 'Bajo pedido' }
  ];

  const sortPriceOptions = [
    { value: 'newest', label: 'Sin orden (Recientes)' },
    { value: 'price-asc', label: 'Menor a mayor' },
    { value: 'price-desc', label: 'Mayor a menor' }
  ];

  const sortAlphaOptions = [
    { value: 'newest', label: 'Sin orden (Recientes)' },
    { value: 'alpha-asc', label: 'A - Z' },
    { value: 'alpha-desc', label: 'Z - A' }
  ];

  return (
    <aside className={`col-3 ${styles.sidebarWrapper} ${styles.animateSidebar}`}>
      <div className={styles.sidebarSticky}>
        <Typography variant="h4" className={styles.panelTitle}>
          Filtros
        </Typography>

        <div className={styles.filtersColumn}>
          <Input 
            placeholder="Buscar productos..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search size={20} />}
          />
          
          <hr className={styles.divider} />

          <Select 
            label="Categoría"
            value={category} 
            onChange={setCategory} 
            options={categoryOptions}
            icon={<Tag size={18} />}
            isActive={category !== 'all'}
          />
          <Select 
            label="Disponibilidad"
            value={availability} 
            onChange={setAvailability} 
            options={availabilityOptions}
            icon={<ListFilter size={18} />}
            isActive={availability !== 'all'}
          />
          <Select 
            label="Ordenar por Precio"
            value={['price-asc', 'price-desc'].includes(sortBy) ? sortBy : 'newest'}
            onChange={setSortBy} 
            options={sortPriceOptions}
            icon={<ArrowUpDown size={18} />}
            isActive={['price-asc', 'price-desc'].includes(sortBy)}
          />
          <Select 
            label="Orden Alfabético"
            value={['alpha-asc', 'alpha-desc'].includes(sortBy) ? sortBy : 'newest'}
            onChange={setSortBy} 
            options={sortAlphaOptions}
            icon={<ArrowUpDown size={18} />}
            isActive={['alpha-asc', 'alpha-desc'].includes(sortBy)}
          />

          <div className={styles.filterActions}>
            <Button 
              variant="secondary" 
              onClick={clearFilters}
              disabled={!hasFilters}
              className={styles.fullWidthButton}
            >
              <RotateCcw size={18} /> Limpiar
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
