import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Typography from '../components/atoms/Typography/Typography';
import Badge from '../components/atoms/Badge/Badge';
import ProductCard from '../components/molecules/ProductCard/ProductCard';
import Pagination from '../components/molecules/Pagination/Pagination';
import FilterSidebar from '../components/organisms/FilterSidebar/FilterSidebar';
import { catalogContent } from '../data/catalogContent';
import styles from './Catalog.module.scss';

const ITEMS_PER_PAGE = 6;

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [category, setCategory] = useState(initialCategory);
  const [availability, setAvailability] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = [...catalogContent];

    if (searchTerm) {
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== 'all') {
      result = result.filter(product => product.category === category);
    }

    if (availability !== 'all') {
      const isAvailable = availability === 'available';
      result = result.filter(product => product.available === isAvailable);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'alpha-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'alpha-desc') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [searchTerm, sortBy, category, availability]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, category, availability]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const clearFilters = () => {
    setSearchTerm('');
    setCategory('all');
    setAvailability('all');
    setSortBy('newest');
  };

  const hasFilters = searchTerm !== '' || category !== 'all' || availability !== 'all' || sortBy !== 'newest';

  return (
    <div className={styles.catalogWrapper}>
      
      {/* Mobile Title */}
      <div className={`${styles.mobileTitleWrapper} ${styles.animateHeader}`}>
        <Typography variant="h1" className={styles.pageTitle}>
          Catálogo de Productos
        </Typography>
      </div>

      <div className="grid">
        
        <FilterSidebar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          availability={availability}
          setAvailability={setAvailability}
          sortBy={sortBy}
          setSortBy={setSortBy}
          hasFilters={hasFilters}
          clearFilters={clearFilters}
        />

        <main className="col-9">
          
          {/* Desktop Header */}
          <div className={`${styles.headerRow} ${styles.animateHeader} ${styles.desktopHeader}`}>
            <Typography variant="h1" className={styles.pageTitle}>
              Catálogo de Productos
            </Typography>
            <Badge className={styles.badgeVerticalAlign}>{filteredProducts.length} productos</Badge>
          </div>

          {/* Mobile Badge */}
          <div className={styles.mobileBadgeWrapper}>
            <Badge className={styles.badgeVerticalAlign}>{filteredProducts.length} productos</Badge>
          </div>
          
          <div 
            className={`grid ${styles.filterGrid}`} 
            key={`${searchTerm}-${category}-${availability}-${sortBy}-${currentPage}`}
          >
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div className={`col-4 ${styles.productItem}`} key={product.id}>
                  <ProductCard 
                    id={product.id}
                    title={product.title}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    price={product.price}
                  />
                </div>
              ))
            ) : (
              <div className={`col-12 ${styles.emptyState}`}>
                <Typography variant="body">No se encontraron productos con esos filtros.</Typography>
              </div>
            )}
          </div>

          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        </main>

      </div>
    </div>
  );
}
