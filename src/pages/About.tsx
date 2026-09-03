import React from 'react';
import Typography from '../components/atoms/Typography/Typography';
import Image from '../components/atoms/Image/Image';
import { aboutContent } from '../data/aboutContent';

export default function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', padding: '24px 0' }}>
      
      {/* Top Banner Image */}
      <div className="grid">
        <div className="col-12">
          <Image 
            src={aboutContent.imageUrl} 
            alt="Sobre Haru Handmade" 
            aspectRatio="landscape"
            style={{ 
              borderRadius: '16px',
              border: '1px solid var(--color-hh-primary-300)',
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="grid" style={{ alignItems: 'flex-start' }}>
        
        {/* Left Side: Title */}
        <div className="col-5">
          <Typography 
            variant="h1" 
            style={{ 
              fontStyle: 'italic', 
              fontSize: '4rem',
              lineHeight: '1.1'
            }}
          >
            {aboutContent.title}
          </Typography>
        </div>

        {/* Right Side: Description */}
        <div className="col-7">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {aboutContent.description.split('\n\n').map((paragraph, index) => (
              <Typography key={index} variant="body" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                {paragraph}
              </Typography>
            ))}
          </div>
        </div>

      </div>
      
    </div>
  );
}
