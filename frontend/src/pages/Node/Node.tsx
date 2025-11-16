import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../components/Footer/Footer";
import "./Node.css";

interface NodeProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Node = ({ isMobile, isTablet }: NodeProps) => {
  const { t } = useLanguage();

  return (
    <div className={`node ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`}>
      {/* Hero Section */}
      <section className="node-hero">
        <div className="node-hero-container">
          <h1 className="node-hero-title">{t.node.hero.title}</h1>
          <p className="node-hero-description">{t.node.hero.description}</p>
        </div>
      </section>

      {/* SuperNode Section */}
      <section className="node-supernode">
        <div className="node-supernode-container">
          <div className="node-supernode-content">
            <h2 className="node-supernode-title">{t.node.superNode.title}</h2>
            <p className="node-supernode-description">
              {t.node.superNode.description}
            </p>
          </div>
        </div>
      </section>

      {/* SuperNode Image Section */}
      <section className="node-supernode-image-section">
        <div className="node-supernode-image-container">
          <img
            src="/node-supernode.svg"
            alt={t.node.superNode.title}
            className="node-supernode-image"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </section>

      {/* SuperMode Section */}
      <section className="node-supermode">
        <div className="node-supermode-container">
          <h2 className="node-supermode-title">{t.node.superMode.title}</h2>
          <div className="node-supermode-cards">
            <div className="node-supermode-card">
              <div className="node-supermode-card-header">
                <span className="node-supermode-card-number-title">
                  01 {t.node.superMode.features.consistentInterface.title}
                </span>
              </div>
              <div className="node-supermode-card-content">
                <p className="node-supermode-card-description">
                  {t.node.superMode.features.consistentInterface.description}
                </p>
              </div>
            </div>
            <div className="node-supermode-card">
              <div className="node-supermode-card-header">
                <span className="node-supermode-card-number-title">
                  02 {t.node.superMode.features.flexibleExperiment.title}
                </span>
              </div>
              <div className="node-supermode-card-content">
                <p className="node-supermode-card-description">
                  {t.node.superMode.features.flexibleExperiment.description}
                </p>
              </div>
            </div>
            <div className="node-supermode-card">
              <div className="node-supermode-card-header">
                <span className="node-supermode-card-number-title">
                  03 {t.node.superMode.features.futureScalability.title}
                </span>
              </div>
              <div className="node-supermode-card-content">
                <p className="node-supermode-card-description">
                  {t.node.superMode.features.futureScalability.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SuperMode Image Section */}
      <section className="node-supermode-image-section">
        <div className="node-supermode-image-container">
          <img
            src="/node-main-image.svg"
            alt="Node capabilities"
            className="node-supermode-image"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </section>

      {/* Node Types Sections */}
      {/* Chatting */}
      <section className="node-type-section node-chatting">
        <div className="node-type-container">
          <div className="node-type-content">
            <div className="node-type-text">
              <h2 className="node-type-title">{t.node.types.chatting.title}</h2>
              <p className="node-type-description">
                {t.node.types.chatting.description}
              </p>
            </div>
            <div className="node-type-image-wrapper">
              <img
                src="/node-chat.svg"
                alt={t.node.types.chatting.title}
                className="node-type-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="node-type-section node-content">
        <div className="node-type-container">
          <div className="node-type-content">
            <div className="node-type-text">
              <h2 className="node-type-title">{t.node.types.content.title}</h2>
              <p className="node-type-description">
                {t.node.types.content.description}
              </p>
            </div>
            <div className="node-type-image-wrapper">
              <img
                src="/node-content.svg"
                alt={t.node.types.content.title}
                className="node-type-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="node-type-section node-data-flow">
        <div className="node-type-container">
          <div className="node-type-content">
            <div className="node-type-text">
              <h2 className="node-type-title">{t.node.types.dataFlow.title}</h2>
              <p className="node-type-description">
                {t.node.types.dataFlow.description}
              </p>
            </div>
            <div className="node-type-image-wrapper">
              <img
                src="/node-data-flow.svg"
                alt={t.node.types.dataFlow.title}
                className="node-type-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flow Control */}
      <section className="node-type-section node-flow-control">
        <div className="node-type-container">
          <div className="node-type-content">
            <div className="node-type-text">
              <h2 className="node-type-title">
                {t.node.types.flowControl.title}
              </h2>
              <p className="node-type-description">
                {t.node.types.flowControl.description}
              </p>
            </div>
            <div className="node-type-image-wrapper">
              <img
                src="/node-flow-control.svg"
                alt={t.node.types.flowControl.title}
                className="node-type-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="node-type-section node-knowledge-base">
        <div className="node-type-container">
          <div className="node-type-content">
            <div className="node-type-text">
              <h2 className="node-type-title">
                {t.node.types.knowledgeBase.title}
              </h2>
              <p className="node-type-description">
                {t.node.types.knowledgeBase.description}
              </p>
            </div>
            <div className="node-type-image-wrapper">
              <img
                src="/node-knowledge-base.svg"
                alt={t.node.types.knowledgeBase.title}
                className="node-type-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LLM */}
      <section className="node-type-section node-llm">
        <div className="node-type-container">
          <div className="node-type-content">
            <div className="node-type-text">
              <h2 className="node-type-title">{t.node.types.llm.title}</h2>
              <p className="node-type-description">
                {t.node.types.llm.description}
              </p>
            </div>
            <div className="node-type-image-wrapper">
              <img
                src="/node-llm.svg"
                alt={t.node.types.llm.title}
                className="node-type-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="node-type-section node-tool">
        <div className="node-type-container">
          <div className="node-type-content">
            <div className="node-type-text">
              <h2 className="node-type-title">{t.node.types.tool.title}</h2>
              <p className="node-type-description">
                {t.node.types.tool.description}
              </p>
            </div>
            <div className="node-type-image-wrapper">
              <img
                src="/node-tool.svg"
                alt={t.node.types.tool.title}
                className="node-type-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="node-footer-cta">
        <div className="node-footer-cta-container">
          <h2 className="node-footer-cta-title">{t.node.footerCta.title}</h2>
          <button
            className="node-footer-cta-button"
            onClick={() => window.open("https://hyperflow-ai.com/", "_blank")}
          >
            {t.node.footerCta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
};

export default Node;

