import "./Auto.css";
import { useLanguage } from '../../../../contexts/LanguageContext';

interface AutoProps {
  isMobile: boolean;
  isTablet: boolean;
}

interface AutoCard {
  title: string;
  description: string;
  iconName: string;
  gradientType: "blue" | "light";
}

const Auto = ({ isMobile, isTablet }: AutoProps) => {
  const { t } = useLanguage();
  const cards: AutoCard[] = [
    {
      title: t.auto.cards.dragDrop.title,
      description: t.auto.cards.dragDrop.description,
      iconName: "NodeIndex",
      gradientType: "light",
    },
    {
      title: t.auto.cards.ragChatbot.title,
      description: t.auto.cards.ragChatbot.description,
      iconName: "Partition",
      gradientType: "blue",
    },
    {
      title: t.auto.cards.multimodal.title,
      description: t.auto.cards.multimodal.description,
      iconName: "Fullscreen",
      gradientType: "blue",
    },
    {
      title: t.auto.cards.oneClickDeploy.title,
      description: t.auto.cards.oneClickDeploy.description,
      iconName: "ShareAlt",
      gradientType: "light",
    },
    {
      title: t.auto.cards.extensible.title,
      description: t.auto.cards.extensible.description,
      iconName: "Tool",
      gradientType: "light",
    },
    {
      title: t.auto.cards.security.title,
      description: t.auto.cards.security.description,
      iconName: "Safety",
      gradientType: "blue",
    },
  ];

  return (
    <section
      className={`auto ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`}
    >
      <div className="auto-container">
        <div className="auto-header">
          <h2 className="auto-title">
            {t.auto.title}
          </h2>
          <p className="auto-subtitle">
            {t.auto.subtitle}
          </p>
        </div>
        <div className="auto-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`auto-card auto-card-${card.gradientType}`}
            >
              <div className="auto-card-icon">
                <img
                  src={`/icon-${card.iconName.toLowerCase()}.svg`}
                  alt={card.title}
                  className="auto-card-icon-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="auto-card-content">
                <h3 className="auto-card-title">{card.title}</h3>
                <p className="auto-card-description">{card.description}</p>
                <div className="auto-card-actions">
                  <button className="auto-card-button"></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Auto;
