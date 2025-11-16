import "./HyperAiReview.css";
import { useLanguage } from '../../../../contexts/LanguageContext';
import { handleImageErrorWithFallback } from '../../../../utils/imageUtils';

interface HyperAiReviewProps {
  isMobile: boolean;
  isTablet: boolean;
}

interface ReviewCard {
  name: string;
  position: string;
  review: string;
  rating: number;
  imageName: string;
}

/**
 * HyperAiReview Component / 하이퍼AI 리뷰 컴포넌트
 * Displays customer review cards with ratings and testimonials
 * 평점과 추천사가 포함된 고객 리뷰 카드를 표시
 */
const HyperAiReview = ({ isMobile, isTablet }: HyperAiReviewProps) => {
  const { t } = useLanguage();
  // Review data / 리뷰 데이터
  const reviews: ReviewCard[] = [
    {
      name: "김하은",
      position: t.review.position,
      review: t.review.reviewText,
      rating: 5,
      imageName: "review-1",
    },
    {
      name: "김하은",
      position: t.review.position,
      review: t.review.reviewText,
      rating: 5,
      imageName: "review-2",
    },
    {
      name: "김하은",
      position: t.review.position,
      review: t.review.reviewText,
      rating: 5,
      imageName: "review-3",
    },
  ];

  return (
    <section
      className={`hyper-ai-review ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      <div className="hyper-ai-review-container">
        <h2 className="hyper-ai-review-title">
          {t.review.title}
        </h2>
        {/* Review cards container / 리뷰 카드 컨테이너 */}
        <div className="hyper-ai-review-cards">
          {reviews.map((review, index) => (
            <div key={index} className="hyper-ai-review-card">
              {/* User profile image / 사용자 프로필 이미지 */}
              <div className="review-profile">
                <img
                  src={`/${review.imageName}.avif`}
                  alt={review.name}
                  className="review-profile-image"
                  onError={(e) =>
                    handleImageErrorWithFallback(
                      e,
                      `/${review.imageName}.png`
                    )
                  }
                />
              </div>
              {/* Star rating / 별점 */}
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2L22.09 12.26L33 13.27L25 20.14L27.18 31.02L18 25.77L8.82 31.02L11 20.14L3 13.27L13.91 12.26L18 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                ))}
              </div>
              {/* Review text / 리뷰 텍스트 */}
              <p className="review-text">{review.review}</p>
              {/* Author information / 작성자 정보 */}
              <div className="review-author">
                <span className="review-name">{review.name}</span>
                <span className="review-position">{review.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HyperAiReview;

