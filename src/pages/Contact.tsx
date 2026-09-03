
import Typography from '../components/atoms/Typography/Typography';
import Image from '../components/atoms/Image/Image';
import { contactContent } from '../data/contactContent';

export default function Contact() {
  return (
    <div className="grid" style={{ padding: '40px 0', alignItems: 'flex-start' }}>
      
      {/* Left Column: Image */}
      <div className="col-6">
        <Image 
          src={contactContent.imageUrl} 
          alt="Contacto Haru Handmade" 
          aspectRatio="portrait"
          style={{ 
            border: '2px solid var(--color-hh-primary-300)', 
            borderRadius: '16px' 
          }}
        />
      </div>

      {/* Right Column: Content */}
      <div className="col-6" style={{ display: 'flex', flexDirection: 'column', gap: '48px', paddingLeft: '24px', paddingTop: '24px' }}>
        
        {/* Title */}
        <Typography 
          variant="h1" 
          style={{ fontStyle: 'italic', fontSize: '4rem', lineHeight: 1 }}
        >
          {contactContent.title}
        </Typography>

        {/* Social Icons Grid */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {contactContent.socials.map((social) => (
            <a 
              key={social.id}
              href={social.url}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                border: '1px solid var(--color-hh-primary-500)',
                borderRadius: '12px',
                backgroundColor: 'var(--color-hh-primary-300)',
                color: 'var(--color-hh-neutral-100)',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontFamily: 'var(--typography-font-family-body)',
                fontSize: '1.2rem',
                transition: 'transform 0.2s ease, background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.backgroundColor = 'var(--color-hh-primary-500)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'var(--color-hh-primary-300)';
              }}
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Quote / Highlight Text */}
        <Typography 
          variant="h4" 
          style={{ 
            color: 'var(--color-hh-secondary-700)', 
            lineHeight: '1.6',
            fontWeight: 600
          }}
        >
          {contactContent.quote}
        </Typography>

        {/* Description Text */}
        <Typography 
          variant="body" 
          style={{ 
            lineHeight: '1.6',
            fontWeight: 600,
            color: 'var(--color-hh-neutral-900)'
          }}
        >
          {contactContent.description}
        </Typography>

      </div>

    </div>
  );
}
