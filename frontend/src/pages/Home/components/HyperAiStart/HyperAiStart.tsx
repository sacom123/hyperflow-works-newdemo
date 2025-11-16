import './HyperAiStart.css';
import { useLanguage } from '../../../../contexts/LanguageContext';

interface HyperAiStartProps {
  isMobile: boolean;
  isTablet: boolean;
}

interface StartCard {
  number: string;
  title: string;
  description: string;
  images: string[];
  iconColor: string;
  backgroundColor: string;
  contentOffset?: { x: number; y: number };
}

const HyperAiStart = ({ isMobile, isTablet }: HyperAiStartProps) => {
  const { t } = useLanguage();
  const startCards: StartCard[] = [
    {
      number: '01',
      title: t.hyperAiStart.steps.dataConnection.title,
      description: t.hyperAiStart.steps.dataConnection.description,
      images: ['start-1-1', 'start-1-2'],
      iconColor: '#0958D9',
      backgroundColor: 'rgba(241, 247, 255, 0.4)',
      contentOffset: { x: 0, y: 0 },
    },
    {
      number: '02',
      title: t.hyperAiStart.steps.workflowDesign.title,
      description: t.hyperAiStart.steps.workflowDesign.description,
      images: ['start-2-1'],
      iconColor: '#0958D9',
      backgroundColor: 'rgba(203, 223, 255, 0.4)',
      contentOffset: { x: 0, y: 0 },
    },
    {
      number: '03',
      title: t.hyperAiStart.steps.deployManage.title,
      description: t.hyperAiStart.steps.deployManage.description,
      images: ['start-3-1', 'start-3-2', 'start-3-3'],
      iconColor: '#0958D9',
      backgroundColor: 'rgba(146, 188, 255, 0.4)',
      contentOffset: { x: 0, y: 0 },
    },
  ];

  return (
    <section className={`hyper-ai-start ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
      <div className="hyper-ai-start-container">
        <div className="hyper-ai-start-header">
          <h2 className="hyper-ai-start-title">{t.hyperAiStart.title}</h2>
          <p className="hyper-ai-start-subtitle">
            {t.hyperAiStart.subtitle}
          </p>
        </div>
        <div className="hyper-ai-start-cards">
          {startCards.map((card, index) => (
            <div
              key={index}
              className="start-card"
              style={index === 2 ? {} : { backgroundColor: card.backgroundColor }}
            >
              <div className="start-card-icon" style={{ backgroundColor: card.iconColor }}>
                <img
                  src={`/icon-start-${index + 1}.svg`}
                  alt={`${card.title} icon`}
                  className="start-card-icon-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="start-card-content">
                <div className="start-card-number">{card.number}</div>
                <h3 className="start-card-title">{card.title}</h3>
                <p className="start-card-description" style={{ whiteSpace: 'pre-line' }}>{card.description}</p>
              </div>
              <div className="start-card-images">
                {card.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={`/${img}.avif`}
                    alt={`${card.title} ${imgIndex + 1}`}
                    className="start-card-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `/${img}.png`;
                      target.onerror = () => {
                        target.style.display = 'none';
                      };
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HyperAiStart;

