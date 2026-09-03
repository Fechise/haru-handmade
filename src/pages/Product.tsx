
import { useParams, Link } from 'react-router-dom';
import Typography from '../components/atoms/Typography/Typography';
import Image from '../components/atoms/Image/Image';
import Button from '../components/atoms/Button/Button';
import { catalogContent } from '../data/catalogContent';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = catalogContent.find(p => p.id === id);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <Typography variant="h2" className="mb-4">Producto no encontrado</Typography>
        <Button to="/catalog" variant="secondary">Volver al catálogo</Button>
      </div>
    );
  }

  const handleBuyClick = () => {
    alert(`Añadido al carrito: ${product.title}`);
  };

  return (
    <div className="grid" style={{ padding: '40px 0', alignItems: 'flex-start' }}>
      
      {/* Left Column: Image */}
      <div className="col-6">
        <Image 
          src={product.imageUrl} 
          alt={product.title} 
          aspectRatio="portrait"
          style={{ 
            border: '2px solid var(--color-hh-primary-300)', 
            borderRadius: '16px' 
          }}
        />
      </div>

      {/* Right Column: Content */}
      <div className="col-6" style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingLeft: '24px' }}>
        
        {/* Back Button */}
        <div>
          <Link 
            to="/catalog" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              textDecoration: 'none',
              color: 'var(--color-hh-neutral-700)',
              fontWeight: 500
            }}
          >
            <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>&larr;</span>
            <span>Volver al catálogo</span>
          </Link>
        </div>

        {/* Title */}
        <Typography variant="h1">{product.title}</Typography>

        {/* Quote */}
        <Typography 
          variant="alt-h3" 
          style={{ 
            color: 'var(--color-hh-primary-500)', 
            fontStyle: 'italic',
            textAlign: 'center'
          }}
        >
          {product.quote}
        </Typography>

        {/* Description */}
        <Typography variant="body" style={{ lineHeight: '1.8' }}>
          {product.description}
        </Typography>

        {/* Buy Button */}
        <Button 
          variant="primary" 
          onClick={handleBuyClick}
          style={{ marginTop: 'auto', padding: '16px', fontSize: '1.125rem' }}
        >
          Comprar Ahora
        </Button>
      </div>

    </div>
  );
}
