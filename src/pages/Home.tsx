import CategoryCard from '../components/molecules/CategoryCard/CategoryCard';
import Typography from '../components/atoms/Typography/Typography';
import { homeContent } from '../data/homeContent';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      
      {/* Hero Section */}
      <section className={`grid ${styles.heroContent} ${styles.heroSection}`}>
        <div className={`col-6 ${styles.heroTextColumn}`}>
          <Typography variant="h1" className={styles.heroTitle}>
            {homeContent.hero.title}
          </Typography>
          <Typography variant="body">
            {homeContent.hero.paragraph1}
          </Typography>
          <Typography variant="body">
            {homeContent.hero.paragraph2}
          </Typography>
        </div>
      </section>

      {/* Categories Section */}
      <section className={`grid ${styles.categoriesSection}`}>
        {homeContent.categories.map((category) => (
          <div className={`col-4 ${styles.categoryItem}`} key={category.id}>
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
