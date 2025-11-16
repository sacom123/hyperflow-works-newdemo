import { Button } from 'antd';
import { useLanguage } from '../../contexts/LanguageContext';
import './Pricing.css';

interface PricingProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Pricing = ({ isMobile, isTablet }: PricingProps) => {
  const { t } = useLanguage();
  
  // Pricing 페이지가 로드되었는지 확인
  console.log("Pricing page loaded");
  console.log("Pricing translations:", t.pricing);
  
  return (
    <div className={`pricing-page ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
      <div className="pricing-header-section">
        <h1 className="pricing-title">
          {t.pricing?.title || '합리적인 가격 정책'}
        </h1>
        <div className="pricing-background"></div>
      </div>
      
      <div className="pricing-content">
        <p className="pricing-subtitle">
          {t.pricing?.subtitle || '사용 목적과 편의에 따라 가장 적합한 가격 플랜을 선택하세요.'}
        </p>
        
        <div className="pricing-enterprise-section">
          <p className="pricing-enterprise-question">
            {t.pricing?.enterpriseQuestion || '맞춤형 엔터프라이즈 솔루션이 필요하신가요?'}
          </p>
          <Button type="primary" className="pricing-contact-button">
            {t.pricing?.contactButton || '영업팀 문의'}
          </Button>
        </div>
        
        <div className="pricing-cards-container">
          <div className="pricing-card">
            {/* 가격 카드 내용은 나중에 추가 가능 */}
          </div>
          <div className="pricing-card">
            {/* 가격 카드 내용은 나중에 추가 가능 */}
          </div>
          <div className="pricing-card pricing-card-featured">
            {/* 가격 카드 내용은 나중에 추가 가능 */}
          </div>
          <div className="pricing-card">
            {/* 가격 카드 내용은 나중에 추가 가능 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

