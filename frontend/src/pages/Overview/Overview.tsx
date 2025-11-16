import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../components/Footer/Footer";
import "./Overview.css";

interface OverviewProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Overview = ({ isMobile, isTablet }: OverviewProps) => {
  const { t } = useLanguage();

  return (
    <div
      className={`overview ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      {/* Main HyperFlow Section */}
      <section className="overview-main">
        <div className="overview-main-container">
          <h1 className="overview-title">{t.overview.title}</h1>
          <p className="overview-description">{t.overview.description}</p>
          <div className="overview-image-wrapper">
            <img
              src="/overview-main-image-4b0a01.png"
              alt={t.overview.title}
              className="overview-main-image"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* Nodes Section */}
      <section className="overview-nodes">
        <div className="overview-nodes-container">
          <div className="overview-nodes-content">
            <div className="overview-nodes-text-frame">
              <h2 className="overview-nodes-title">{t.overview.nodesTitle}</h2>
              <p className="overview-nodes-description">
                {t.overview.nodesDescription}
              </p>
            </div>
            <div className="overview-cover-wrapper">
              <img
                src="/overview-cover.svg"
                alt="Cover"
                className="overview-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="overview-nodes-group-wrapper">
              <img
                src="/overview-nodes-group.svg"
                alt="Nodes"
                className="overview-nodes-group"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LowContent Section */}
      <section
        className={`overview-low-content ${isMobile ? "mobile" : ""} ${
          isTablet ? "tablet" : ""
        }`}
      >
        <div className="overview-low-content-container">
          <h2 className="overview-low-content-title">{t.lowContent.title}</h2>
          <button
            className="overview-low-content-button"
            onClick={() => window.open("https://hyperflow-ai.com/", "_blank")}
          >
            {t.lowContent.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
};

export default Overview;
