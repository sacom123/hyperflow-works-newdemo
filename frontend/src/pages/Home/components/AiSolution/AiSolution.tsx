import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './AiSolution.css';
import { useLanguage } from '../../../../contexts/LanguageContext';

interface AiSolutionProps {
  isMobile: boolean;
  isTablet: boolean;
}

interface SolutionCard {
  title: string;
  description: string;
  features: string[];
  iconColor: string;
}

const AiSolution = ({ isMobile, isTablet }: AiSolutionProps) => {
  const { t } = useLanguage();
  const solutions: SolutionCard[] = [
    {
      title: t.aiSolution.solutions.customerService.title,
      description: t.aiSolution.solutions.customerService.description,
      features: t.aiSolution.solutions.customerService.features,
      iconColor: '#0958D9',
    },
    {
      title: t.aiSolution.solutions.recommendation.title,
      description: t.aiSolution.solutions.recommendation.description,
      features: t.aiSolution.solutions.recommendation.features,
      iconColor: '#0958D9',
    },
    {
      title: t.aiSolution.solutions.contentGeneration.title,
      description: t.aiSolution.solutions.contentGeneration.description,
      features: t.aiSolution.solutions.contentGeneration.features,
      iconColor: '#0958D9',
    },
    {
      title: t.aiSolution.solutions.documentSearch.title,
      description: t.aiSolution.solutions.documentSearch.description,
      features: t.aiSolution.solutions.documentSearch.features,
      iconColor: '#0958D9',
    },
  ];

  return (
    <section className={`ai-solution ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
      <div className="ai-solution-container">
        <div className="ai-solution-header">
          <h2 className="ai-solution-title">{t.aiSolution.title}</h2>
          <p className="ai-solution-subtitle">
            {t.aiSolution.subtitle}
          </p>
        </div>
        <div className="ai-solution-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="ai-solution-card">
              <div className="ai-solution-card-icon" style={{ backgroundColor: solution.iconColor }}>
                <div className="ai-solution-card-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <h3 className="ai-solution-card-title">{solution.title}</h3>
              <p className="ai-solution-card-description">{solution.description}</p>
              <div className="ai-solution-card-features">
                <p className="features-label">{t.aiSolution.featuresLabel}</p>
                <ul className="features-list">
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Button className="ai-solution-card-button" type="default">
                {t.aiSolution.viewTemplate}
                <RightOutlined />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiSolution;

