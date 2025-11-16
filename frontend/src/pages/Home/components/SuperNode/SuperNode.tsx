import "./SuperNode.css";
import { useLanguage } from '../../../../contexts/LanguageContext';
import { handleImageError } from '../../../../utils/imageUtils';

interface SuperNodeProps {
  isMobile: boolean;
  isTablet: boolean;
}

/**
 * SuperNode Component / 슈퍼노드 컴포넌트
 * Displays the SuperNode feature section with gradient background
 * 그라데이션 배경의 슈퍼노드 기능 섹션을 표시
 */
const SuperNode = ({ isMobile, isTablet }: SuperNodeProps) => {
  const { t } = useLanguage();
  return (
    <section
      className={`super-node ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      {/* Blurred background layer / 흐릿한 배경 레이어 */}
      <div className="super-node-background">
        <img
          src="/supernode-bg.avif"
          alt="SuperNode background"
          className="super-node-bg-image"
          onError={(e) => handleImageError(e, "/supernode-bg.png")}
        />
      </div>
      {/* Main image layer / 메인 이미지 레이어 */}
      <div className="super-node-auto-image">
        <img
          src="/supernode-auto.avif"
          alt="SuperNode auto"
          className="super-node-auto-img"
          onError={(e) => handleImageError(e, "/supernode-auto.png")}
        />
      </div>
      {/* Content container / 콘텐츠 컨테이너 */}
      <div className="super-node-container">
        <h2 className="super-node-title" style={{ whiteSpace: 'pre-line' }}>
          {t.superNode.title}
        </h2>
        {/* Feature card / 기능 카드 */}
        <div className="super-node-card">
          <h3 className="super-node-card-title">
            {t.superNode.cardTitle}
          </h3>
          <p className="super-node-card-description">
            {t.superNode.cardDescription}
          </p>
          <button className="super-node-button">
            <span>{t.superNode.button}</span>
            {/* Arrow icon / 화살표 아이콘 */}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 9M9 9H1M9 9V1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* Decorative image / 장식용 이미지 */}
        <div className="super-node-main-image">
          <img
            src="/supernode-main.avif"
            alt="SuperNode main"
            onError={(e) => handleImageError(e, "/supernode-main.png")}
          />
        </div>
      </div>
    </section>
  );
};

export default SuperNode;
