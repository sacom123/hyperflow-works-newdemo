import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../components/Footer/Footer";
import "./CaseStudy.css";

interface CaseStudyProps {
  isMobile: boolean;
  isTablet: boolean;
}

const CaseStudy = ({ isMobile, isTablet }: CaseStudyProps) => {
  const { t } = useLanguage();

  return (
    <div
      className={`case-study ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      {/* Main Title Section */}
      <section className="case-study-main">
        <div className="case-study-main-container">
          <h1 className="case-study-title">{t.caseStudy.title}</h1>
          <button
            className="case-study-button"
            onClick={() => window.open("https://hyperflow-ai.com/", "_blank")}
          >
            {t.caseStudy.button}
          </button>
        </div>
      </section>

      {/* Case Study Cards Section */}
      <section className="case-study-cards">
        <div className="case-study-cards-container">
          {/* Search Bar */}
          <div className="case-study-search">
            <div className="case-study-search-wrapper">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="case-study-search-icon"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className="case-study-search-input"
                placeholder={t.caseStudy.searchPlaceholder}
              />
            </div>
          </div>

          {/* Case Study Cards Grid */}
          <div className="case-study-grid">
            {t.caseStudy.cards.map((card, index) => (
              <div key={index} className="case-study-card">
                <div className="case-study-card-image-wrapper">
                  <img
                    src={`/casestudy-image-${card.imageName}.avif`}
                    alt={card.title}
                    className="case-study-card-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `/casestudy-image-${card.imageName}.png`;
                      target.onerror = () => {
                        target.style.display = "none";
                      };
                    }}
                  />
                </div>
                <div className="case-study-card-content">
                  <h3 className="case-study-card-title">{card.title}</h3>
                  <button
                    className="case-study-card-button"
                    onClick={() =>
                      window.open(
                        card.link || "https://hyperflow-ai.com/",
                        "_blank"
                      )
                    }
                  >
                    {t.caseStudy.viewButton}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="case-study-card-arrow"
                    >
                      <path
                        d="M1 6H11M11 6L6 1M11 6L6 11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="case-study-footer-cta">
        <div className="case-study-footer-cta-container">
          <h2 className="case-study-footer-cta-title">
            {t.caseStudy.footerCta.title}
          </h2>
          <button
            className="case-study-footer-cta-button"
            onClick={() => window.open("https://hyperflow-ai.com/", "_blank")}
          >
            {t.caseStudy.footerCta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
};

export default CaseStudy;

