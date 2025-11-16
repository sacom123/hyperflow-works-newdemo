import './Strengths.css';
import { useLanguage } from '../../../../contexts/LanguageContext';

interface StrengthsProps {
  isMobile: boolean;
  isTablet: boolean;
}

interface StrengthItem {
  number: string;
  title: string;
  description: string;
  imageRef: string;
  imagePosition: 'left' | 'right';
}

const Strengths = ({ isMobile, isTablet }: StrengthsProps) => {
  const { t } = useLanguage();
  const strengths: StrengthItem[] = [
    {
      number: '01',
      title: t.strengths.items.circularFlow.title,
      description: t.strengths.items.circularFlow.description,
      imageRef: 'bd4118a7ffff8690171c7b38b27a10685c865194',
      imagePosition: 'left',
    },
    {
      number: '02',
      title: t.strengths.items.superNode.title,
      description: t.strengths.items.superNode.description,
      imageRef: '5fe9db2dd92a186cb700c9ed3794b18305703dbf',
      imagePosition: 'right',
    },
    {
      number: '03',
      title: t.strengths.items.integration.title,
      description: t.strengths.items.integration.description,
      imageRef: '3aae7065b2c628553f4e5e548ef85def2de27046',
      imagePosition: 'left',
    },
    {
      number: '04',
      title: t.strengths.items.dualEngine.title,
      description: t.strengths.items.dualEngine.description,
      imageRef: 'cdc44b180b8c49abbd39c14cf648524a8a36f94c',
      imagePosition: 'right',
    },
    {
      number: '05',
      title: t.strengths.items.assetStore.title,
      description: t.strengths.items.assetStore.description,
      imageRef: '3e914e57c662522abb42d3cd1a12dce68019252e',
      imagePosition: 'left',
    },
  ];

  return (
    <section className={`strengths ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
      <div className="strengths-container">
        <h2 className="strengths-title">
          {t.strengths.title}
        </h2>
        <div className="strengths-list">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className={`strength-item ${strength.imagePosition === 'right' ? 'reverse' : ''}`}
            >
              <div className="strength-image-wrapper">
                <img
                  src={`/strength-${index + 1}.avif`}
                  alt={strength.title}
                  className="strength-image"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'strength-image-placeholder';
                    placeholder.textContent = strength.number;
                    img.parentElement?.appendChild(placeholder);
                  }}
                />
              </div>
              <div className="strength-content">
                <h3 className="strength-title">
                  {strength.number} {strength.title}
                </h3>
                <p className="strength-description">{strength.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;

