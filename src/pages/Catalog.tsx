import React, { useState } from 'react';
import Typography from '../components/atoms/Typography/Typography';
import Input from '../components/atoms/Input/Input';
import ProductCard from '../components/molecules/ProductCard/ProductCard';
import { catalogContent } from '../data/catalogContent';

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = catalogContent.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      
      <div className="grid">
        <div className="col-12" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Typography variant="h1">Nuestro Catálogo</Typography>
          <Input 
            placeholder="Buscar productos..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-4" key={product.id}>
              <ProductCard 
                id={product.id}
                title={product.title}
                imageUrl={product.imageUrl}
              />
            </div>
          ))
        ) : (
          <div className="col-12">
            <Typography variant="body">No se encontraron productos con esa búsqueda.</Typography>
          </div>
        )}
      </div>

    </div>
  );
}
