import "./LowContent.css";
import styled, { css } from "styled-components";
import { useLanguage } from "../../../../contexts/LanguageContext";

interface LowContentProps {
  isMobile: boolean;
  isTablet: boolean;
}

const StyledLowContentSection = styled.section<{
  $isMobile: boolean;
  $isTablet: boolean;
}>`
  width: 100%;
  max-height: 350px;
  height: 100%;
  padding: clamp(35px, 8vw, 70px) 0;
  background: linear-gradient(
    90deg,
    rgba(22, 119, 255, 1) 0%,
    rgba(13, 71, 153, 1) 100%
  );
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  ${({ $isTablet }) =>
    $isTablet &&
    css`
      padding: clamp(35px, 8vw, 65px) 0;
    `}

  ${({ $isMobile }) =>
    $isMobile &&
    css`
      padding: clamp(30px, 7vw, 45px) 0;
    `}

  .low-content-container {
    max-width: 1440px;
    width: 100%;
    max-height: 350px;
    height: 100%;
    margin: 0 auto;
    padding: 0 clamp(20px, 9.7vw, 140px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 0;

    ${({ $isTablet }) =>
      $isTablet &&
      css`
        padding: 0 clamp(30px, 4.2vw, 60px);
      `}

    ${({ $isMobile }) =>
      $isMobile &&
      css`
        padding: 0 clamp(16px, 4.4vw, 20px);
      `}
  }

  .low-content-title {
    font-family: "Pretendard Variable", "Pretendard", sans-serif;
    font-size: clamp(28px, 3.6vw, 52px);
    font-weight: 700;
    line-height: 1.3;
    color: #ffffff;
    margin: 0 0 clamp(18px, 2.4vw, 20px) 0;
    letter-spacing: -0.0282em;
    text-align: left;
    width: 100%;
    max-width: 1160px;

    ${({ $isTablet }) =>
      $isTablet &&
      css`
        font-size: clamp(20px, 3.6vw, 30px);
        text-align: center;
      `}

    ${({ $isMobile }) =>
      $isMobile &&
      css`
        font-size: clamp(16px, 6.7vw, 25px);
        text-align: center;
        margin-bottom: clamp(16px, 4.4vw, 20px);
      `}
  }

  .low-content-description {
    font-family: "Pretendard", sans-serif;
    font-size: clamp(16px, 1.7vw, 24px);
    font-weight: 500;
    line-height: 1.3;
    color: #ffffff;
    margin: 0;
    letter-spacing: -0.0282em;
    text-align: center;
    width: 100%;
    max-width: 987px;
    white-space: pre-line;

    ${({ $isTablet }) =>
      $isTablet &&
      css`
        font-size: clamp(16px, 2vw, 24px);
      `}

    ${({ $isMobile }) =>
      $isMobile &&
      css`
        font-size: clamp(14px, 3.9vw, 20px);
      `}
  }
`;

/**
 * LowContent Component / 로우 콘텐츠 컴포넌트
 * Displays a CTA section with call-to-action content
 * 행동 유도 콘텐츠가 포함된 CTA 섹션을 표시
 */
const LowContent = ({ isMobile, isTablet }: LowContentProps) => {
  const { t } = useLanguage();
  return (
    <StyledLowContentSection
      className={`low-content ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
      $isMobile={isMobile}
      $isTablet={isTablet}
    >
      <div className="low-content-container">
        <h2 className="low-content-title">{t.lowContent.title}</h2>
        <p className="low-content-description">{t.lowContent.description}</p>
      </div>
    </StyledLowContentSection>
  );
};

export default LowContent;
