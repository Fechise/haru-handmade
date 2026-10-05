import Typography from '../components/atoms/Typography/Typography';
import Image from '../components/atoms/Image/Image';
import { aboutContent } from '../data/aboutContent';
import styles from './About.module.scss';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      
      <div className={`grid ${styles.gridContainer}`}>
        
        {/* Left Side: Image */}
        <div className={`col-6 ${styles.imageColumn}`}>
          <Image 
            src={aboutContent.imageUrl} 
            alt="Sobre Haru Handmade" 
            aspectRatio="landscape"
            className={styles.aboutImage}
          />
        </div>

        {/* Right Side: Text */}
        <div className={`col-6 ${styles.contentColumn}`}>
            <Typography 
              variant="h1" 
              className={styles.pageTitle}
            >
              <Heart color="var(--color-hh-primary-500)" className={styles.titleIcon} />
              {aboutContent.title}
            </Typography>

            <div className={styles.paragraphContainer}>
              {aboutContent.description.split('\n\n').map((paragraph, index) => (
                <Typography key={index} variant="body" className={styles.paragraphText}>
                  {paragraph}
                </Typography>
              ))}
            </div>
        </div>

      </div>
      
    </div>
  );
}
