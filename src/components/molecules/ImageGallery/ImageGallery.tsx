import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ImageGallery.module.scss';
import IconButton from '../../atoms/IconButton/IconButton';

interface ImageGalleryProps {
  images: string[];
  altPrefix?: string;
}

export default function ImageGallery({ images, altPrefix = 'Product image' }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  if (!images || images.length === 0) return null;

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const navigate = (direction: number) => {
    setSelectedIndex(prev => {
      if (prev === null) return null;
      let next = prev + direction;
      if (next < 0) next = images.length - 1;
      if (next >= images.length) next = 0;
      return next;
    });
  };

  // Determine layout class based on image count
  let layoutClass = styles.layout1;
  if (images.length === 2) layoutClass = styles.layout2;
  if (images.length >= 3) layoutClass = styles.layout3;

  return (
    <>
      <div className={`${styles.galleryGrid} ${layoutClass}`}>
        {images.slice(0, 3).map((img, index) => (
          <div 
            key={index} 
            className={styles.imageContainer}
            onClick={() => handleImageClick(index)}
          >
            <img 
              src={img} 
              alt={`${altPrefix} ${index + 1}`} 
              className={styles.image}
            />
            {images.length > 3 && index === 2 && (
              <div className={styles.moreOverlay}>
                <span>+{images.length - 3}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && (
        <div className={styles.modalOverlay} onClick={() => setSelectedIndex(null)}>
          <div className={styles.modalClose}>
            <IconButton 
              aria-label="Cerrar galería" 
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              variant="neutral"
            >
              <X size={24} />
            </IconButton>
          </div>
          
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && (
              <div className={styles.navLeft}>
                <IconButton 
                  aria-label="Imagen anterior" 
                  onClick={() => navigate(-1)}
                  variant="neutral"
                >
                  <ChevronLeft size={32} />
                </IconButton>
              </div>
            )}
            
            <img 
              src={images[selectedIndex]} 
              alt={`${altPrefix} zoom ${selectedIndex + 1}`} 
              className={styles.modalImage} 
            />

            {images.length > 1 && (
              <div className={styles.navRight}>
                <IconButton 
                  aria-label="Siguiente imagen" 
                  onClick={() => navigate(1)}
                  variant="neutral"
                >
                  <ChevronRight size={32} />
                </IconButton>
              </div>
            )}
            
            <div className={styles.imageCounter}>
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
