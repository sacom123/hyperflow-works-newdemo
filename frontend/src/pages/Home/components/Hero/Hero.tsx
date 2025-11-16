import { Button } from 'antd';
import { useLanguage } from '../../../../contexts/LanguageContext';
import './Hero.css';

interface HeroProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Hero = ({ isMobile, isTablet }: HeroProps) => {
  const { t } = useLanguage();
  
  return (
    <section className={`hero ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title" style={{ whiteSpace: 'pre-line' }}>
            {t.hero.title}
          </h1>
          <p className="hero-description" style={{ whiteSpace: 'pre-line' }}>
            {t.hero.description}
          </p>
          <Button type="primary" size="large" className="hero-button">
            {t.hero.button}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

