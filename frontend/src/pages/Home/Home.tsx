import {
  Hero,
  LLMCards,
  AiSolution,
  Strengths,
  HyperAiStart,
  SuperNode,
  Auto,
  HyperAiReview,
  LowContent,
} from "./components";

interface HomeProps {
  isMobile: boolean;
  isTablet: boolean;
}

/**
 * Home Page Component / 홈 페이지 컴포넌트
 * Main landing page that combines all home sections
 * 모든 홈 섹션을 결합한 메인 랜딩 페이지
 */
const Home = ({ isMobile, isTablet }: HomeProps) => {
  return (
    <>
      {/* Hero section / 히어로 섹션 */}
      <Hero isMobile={isMobile} isTablet={isTablet} />
      {/* LLM models showcase / LLM 모델 쇼케이스 */}
      <LLMCards isMobile={isMobile} isTablet={isTablet} />
      {/* Strengths section / 강점 섹션 */}
      <Strengths isMobile={isMobile} isTablet={isTablet} />
      {/* Quick start section / 빠른 시작 섹션 */}
      <HyperAiStart isMobile={isMobile} isTablet={isTablet} />
      {/* SuperNode feature / 슈퍼노드 기능 */}
      <SuperNode isMobile={isMobile} isTablet={isTablet} />
      {/* Auto feature / 자동 기능 */}
      <Auto isMobile={isMobile} isTablet={isTablet} />
      {/* AI Solution section / AI 솔루션 섹션 */}
      <AiSolution isMobile={isMobile} isTablet={isTablet} />
      {/* Customer reviews / 고객 리뷰 */}
      <HyperAiReview isMobile={isMobile} isTablet={isTablet} />
      {/* CTA section / 행동 유도 섹션 */}
      <LowContent isMobile={isMobile} isTablet={isTablet} />
    </>
  );
};

export default Home;
