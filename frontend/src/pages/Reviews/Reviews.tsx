import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../components/Footer/Footer";
import { handleImageErrorWithFallback } from "../../utils/imageUtils";
import "./Reviews.css";

interface ReviewsProps {
  isMobile: boolean;
  isTablet: boolean;
}

/**
 * Reviews Page Component / 리뷰 페이지 컴포넌트
 * Displays partner and user reviews with CTA section
 * 파트너 및 사용자 리뷰와 CTA 섹션을 표시
 */
const Reviews = ({ isMobile, isTablet }: ReviewsProps) => {
  const { t } = useLanguage();

  return (
    <div
      className={`reviews ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      {/* Main Title Section / 메인 제목 섹션 */}
      <section className="reviews-main">
        <div className="reviews-main-container">
          <h1 className="reviews-title">{t.customerReviews.mainTitle}</h1>
        </div>
      </section>

      {/* Partner Review Section / 파트너 리뷰 섹션 */}
      <section className="reviews-partner">
        <div className="reviews-partner-container">
          <div className="reviews-partner-title-section">
            <img
              src="/logo.avif"
              alt="HyperFlow AI"
              className="reviews-partner-logo"
              onError={(e) =>
                handleImageErrorWithFallback(e, "/logo.png")
              }
            />
            <h2 className="reviews-partner-title">
              {t.customerReviews.partnerReview.title}
            </h2>
          </div>
          <div className="reviews-partner-content">
            <img
              src="/partner-review-content.svg"
              alt="Partner Reviews"
              className="reviews-partner-image"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* User Review Section / 사용자 리뷰 섹션 */}
      <section className="reviews-user">
        <div className="reviews-user-container">
          <div className="reviews-user-title-section">
            <img
              src="/logo.avif"
              alt="HyperFlow AI"
              className="reviews-user-logo"
              onError={(e) =>
                handleImageErrorWithFallback(e, "/logo.png")
              }
            />
            <h2 className="reviews-user-title">
              {t.customerReviews.userReview.title}
            </h2>
          </div>
        </div>
      </section>

      {/* Footer CTA Section / 푸터 CTA 섹션 */}
      <section className="reviews-footer-cta">
        <div className="reviews-footer-cta-container">
          <h2 className="reviews-footer-cta-title">
            {t.customerReviews.footerCta.title}
          </h2>
          <button
            className="reviews-footer-cta-button"
            onClick={() => window.open("https://hyperflow-ai.com/", "_blank")}
          >
            {t.customerReviews.footerCta.button}
          </button>
        </div>
      </section>

      {/* Footer / 푸터 */}
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
};

export default Reviews;

