import './QuickStart.css';
import { useLanguage } from '../../contexts/LanguageContext';

interface QuickStartProps {
  isMobile: boolean;
  isTablet: boolean;
}

const QuickStart = ({ isMobile, isTablet }: QuickStartProps) => {
  const { t } = useLanguage();

  return (
    <div className={`quick-start ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
      <div className="quick-start-container">
        {/* Header Section */}
        <div className="start-top-content">
          <h1 className="start-top-content-title">빠른 시작</h1>
          <p className="start-top-content-content">
            HyperFlow는 템플릿, 에이전트, 스니펫을 통해<br />
            누구나 빠르게 시작하고 효율적으로 확장할 수 있는 AI 제작 환경을 제공합니다.<br />
            템플릿으로 시작하고, 에이전트로 발전시키며, 스니펫으로 반복 잡업을 최소할 수 있습니다.
          </p>
        </div>

        {/* Template 01 Section */}
        <div className="template-01">
          <div className="template-01-card">
            <h2 className="template-card-title">템플릿</h2>
            <p className="template-card-content">
              HyperFlow가 처음이라면 템플릿으로 바로 시작해보세요.<br />
              자주 쓰이는 기능들은 미리 구성해 둔 템플릿으로 빠르게 시작해 볼 수 있습니다.
            </p>
          </div>
          <div className="template-01-image">
            <img
              src="/quickstart-template-01.svg"
              alt="Template 01"
              className="template-image"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Template 02 Section */}
        <div className="template-02">
          <div className="template-02-card">
            <h2 className="template-card-title">템플릿</h2>
            <p className="template-card-content">
              다른 사용 사례가 궁금하시다면, 예시 플로우를 둘러보세요.<br />
              실제 워크플로우 구조를 살펴보며 아이디어를 얻고, 나만의 플로우로 확장할 수 있습니다.
            </p>
          </div>
          <div className="template-02-image">
            <img
              src="/quickstart-template-02.svg"
              alt="Template 02"
              className="template-image"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Snippet Card Section */}
        <div className="snippet-card">
          <h2 className="snippet-card-title">스니펫</h2>
          <p className="snippet-card-content">
            자주 사용하는 노드 조합은 '스니펫'으로 저장하세요.<br />
            커스텀으로 지정한 에이전트/노드 세트를 손쉽게 불러와, 제작 시간을 크게 줄일 수 있습니다.
          </p>
        </div>

        {/* Custom Build Section */}
        <div className="custom-build">
          <div className="custom-build-center">
            <h2 className="custom-build-center-text">
              커스텀<br />조합
            </h2>
          </div>
          
          <div className="custom-build-options">
            <div className="used-guidelines">
              <p className="custom-build-option-text">자주 쓰는 지침</p>
            </div>
            <div className="model-combination">
              <p className="custom-build-option-text">원하는 모델 조합</p>
            </div>
            <div className="rag-builder">
              <p className="custom-build-option-text">RAG 빌더</p>
            </div>
            <div className="simple-chatbot">
              <p className="custom-build-option-text">심플 챗봇</p>
            </div>
            <div className="knowledge-injection-flow">
              <p className="custom-build-option-text">지식주입 플로우</p>
            </div>
            <div className="rag-chatbot">
              <p className="custom-build-option-text">RAG 챗봇</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStart;

