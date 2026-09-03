import CategoryCard from '../components/molecules/CategoryCard/CategoryCard';
import Typography from '../components/atoms/Typography/Typography';
import Image from '../components/atoms/Image/Image';
import { homeContent } from '../data/homeContent';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
      
      {/* Hero Section */}
      <section className="grid" style={{ alignItems: 'center' }}>
        <div className="col-7" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Typography variant="h1" style={{ lineHeight: '1.2' }}>
            {homeContent.hero.title}
          </Typography>
          <Typography variant="body">
            {homeContent.hero.paragraph1}
          </Typography>
          <Typography variant="body">
            {homeContent.hero.paragraph2}
          </Typography>
        </div>
        <div className="col-5">
          <Image 
            src={homeContent.hero.image} 
            alt={homeContent.hero.imageAlt} 
            aspectRatio="square" 
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="grid">
        {homeContent.categories.map((category) => (
          <div className="col-4" key={category.id}>
            <CategoryCard 
              title={category.title} 
              imageUrl={category.imageUrl} 
              to={category.to} 
            />
          </div>
        ))}
      </section>
      
    </div>
  );
}
