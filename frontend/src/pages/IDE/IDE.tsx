import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../components/Footer/Footer";
import "./IDE.css";

interface IDEProps {
  isMobile: boolean;
  isTablet: boolean;
}

const IDE = ({ isMobile, isTablet }: IDEProps) => {
  const { t } = useLanguage();

  return (
    <div
      className={`ide ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`}
    >
      {/* Hero Section */}
      <section className="ide-hero">
        <div className="ide-hero-container">
          <h1 className="ide-title">{t.ide.title}</h1>
          <p className="ide-description">{t.ide.description}</p>
          <div className="ide-main-image-wrapper">
            <img
              src="/ide-main-workspace-4b0a01.avif"
              alt={t.ide.title}
              className="ide-main-image"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* Service Flow Design Section */}
      <section className="ide-service-flow">
        <div className="ide-service-flow-container">
          <h2 className="ide-section-title">{t.ide.workflowLabels.step1}</h2>
          <p className="ide-service-example-text">
            {t.ide.serviceExample.title}
          </p>
          <div className="ide-service-flow-card">
            <div className="ide-node-box">
              <span className="ide-node-text">{t.ide.nodeWorkflow.node1}</span>
            </div>
            <img
              src="/ide-node-arrow-1-5d9e6c.avif"
              alt="arrow"
              className="ide-node-arrow"
            />
            <div className="ide-node-box">
              <span className="ide-node-text">{t.ide.nodeWorkflow.node2}</span>
            </div>
            <img
              src="/ide-node-arrow-2-5d9e6c.avif"
              alt="arrow"
              className="ide-node-arrow"
            />
            <div className="ide-node-box">
              <span className="ide-node-text">{t.ide.nodeWorkflow.node3}</span>
            </div>
            <img
              src="/ide-node-arrow-3-5d9e6c.avif"
              alt="arrow"
              className="ide-node-arrow"
            />
            <div className="ide-node-box">
              <span className="ide-node-text">{t.ide.nodeWorkflow.node4}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Node Placement Section */}
      <section className="ide-node-placement">
        <div className="ide-node-placement-container">
          <h2 className="ide-section-title">{t.ide.workflowLabels.step2}</h2>
          <div className="ide-node-placement-content">
            <div className="ide-node-placement-card">
              <div className="ide-node-box">
                <span className="ide-node-text">
                  {t.ide.nodeWorkflow.node1}
                </span>
              </div>
              <img
                src="/ide-node-arrow-1-5d9e6c.avif"
                alt="arrow"
                className="ide-node-arrow"
              />
              <div className="ide-node-box">
                <span className="ide-node-text">
                  {t.ide.nodeWorkflow.node2}
                </span>
              </div>
              <img
                src="/ide-node-arrow-2-5d9e6c.avif"
                alt="arrow"
                className="ide-node-arrow"
              />
              <div className="ide-node-box">
                <span className="ide-node-text">
                  {t.ide.nodeWorkflow.node3}
                </span>
              </div>
              <img
                src="/ide-node-arrow-3-5d9e6c.avif"
                alt="arrow"
                className="ide-node-arrow"
              />
              <div className="ide-node-box">
                <span className="ide-node-text">
                  {t.ide.nodeWorkflow.node4}
                </span>
              </div>
            </div>
            <div className="ide-node-placement-images">
              <img
                src="/ide-workflow-1.avif"
                alt="workflow"
                className="ide-node-placement-image"
              />
              <img
                src="/ide-workflow-2.avif"
                alt="workflow"
                className="ide-node-placement-image"
              />
              <img
                src="/ide-workflow-3.avif"
                alt="workflow"
                className="ide-node-placement-image"
              />
              <img
                src="/ide-workflow-3.avif"
                alt="workflow"
                className="ide-node-placement-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Execute & Experiment Section */}
      <section className="ide-execute-experiment">
        <div className="ide-execute-experiment-container">
          <h2 className="ide-section-title">{t.ide.workflowLabels.step3}</h2>
          <div className="ide-execute-experiment-content">
            <div className="ide-feature-button-group">
              <button className="ide-feature-button">
                {t.ide.featureButtons.temperature}
              </button>
              <div className="ide-feature-description-card">
                <p className="ide-feature-description-text">
                  {t.ide.featureDescriptions.temperature}
                </p>
              </div>
            </div>
            <div className="ide-feature-button-group">
              <button className="ide-feature-button">
                {t.ide.featureButtons.imageModel}
              </button>
              <div className="ide-feature-description-card">
                <p className="ide-feature-description-text">
                  {t.ide.featureDescriptions.superNode}
                </p>
              </div>
            </div>
            <div className="ide-feature-button-group">
              <button className="ide-feature-button">
                {t.ide.featureButtons.instruction}
              </button>
              <div className="ide-feature-description-card">
                <p className="ide-feature-description-text">
                  {t.ide.featureDescriptions.instruction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Execution Section */}
      <section className="ide-feature-with-image ide-realtime-section">
        <div className="ide-feature-with-image-container ide-realtime-container">
          <div className="ide-realtime-text">
            <h2 className="ide-realtime-title">
              {t.ide.features.realTime.title}
            </h2>
            <p className="ide-realtime-description">
              {t.ide.features.realTime.description}
            </p>
          </div>
          <div className="ide-realtime-image-wrapper">
            <img
              src="/ide-realtime-new.avif"
              alt={t.ide.features.realTime.title}
              className="ide-realtime-image"
            />
          </div>
        </div>
      </section>

      {/* Execution History Section */}
      <section className="ide-feature-with-image ide-history-section">
        <div className="ide-feature-with-image-container ide-history-container">
          <div className="ide-history-text">
            <h2 className="ide-history-title">
              {t.ide.features.executionHistory.title}
            </h2>
            <p className="ide-history-description">
              {t.ide.features.executionHistory.description}
            </p>
          </div>
          <div className="ide-history-image-wrapper">
            <img
              src="/ide-execution-history.avif"
              alt={t.ide.features.executionHistory.title}
              className="ide-history-image"
            />
          </div>
        </div>
      </section>

      {/* Asset Management Section */}
      <section className="ide-feature-with-image ide-asset-section">
        <div className="ide-feature-with-image-container ide-asset-container">
          <div className="ide-asset-text">
            <h2 className="ide-asset-title">
              {t.ide.features.assetManagement.title}
            </h2>
            <p className="ide-asset-description">
              {t.ide.features.assetManagement.description}
            </p>
          </div>
          <div className="ide-asset-image-wrapper">
            <img
              src="/ide-asset-management.avif"
              alt={t.ide.features.assetManagement.title}
              className="ide-asset-image"
            />
          </div>
        </div>
      </section>

      {/* Debugging Section */}
      <section className="ide-feature-with-image ide-debug-section">
        <div className="ide-feature-with-image-container ide-debug-container">
          <div className="ide-debug-text">
            <h2 className="ide-debug-title">
              {t.ide.features.debugging.title}
            </h2>
            <p className="ide-debug-description">
              {t.ide.features.debugging.description}
            </p>
          </div>
          <div className="ide-debug-image-wrapper">
            <img
              src="/ide-debugging.avif"
              alt={t.ide.features.debugging.title}
              className="ide-debug-image"
            />
          </div>
        </div>
      </section>

      {/* Chatbot Mode Section */}
      <section className="ide-feature-with-image ide-chatbot-section">
        <div className="ide-feature-with-image-container ide-chatbot-container">
          <div className="ide-chatbot-text">
            <h2 className="ide-chatbot-title">
              {t.ide.features.chatbotMode.title}
            </h2>
            <p className="ide-chatbot-description">
              {t.ide.features.chatbotMode.description}
            </p>
          </div>
          <div className="ide-chatbot-image-wrapper">
            <img
              src="/ide-deployment.avif"
              alt={t.ide.features.chatbotMode.title}
              className="ide-chatbot-image"
            />
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section className="ide-feature-with-image ide-deployment-section">
        <div className="ide-feature-with-image-container ide-deployment-container">
          <div className="ide-deployment-text">
            <h2 className="ide-deployment-title">
              {t.ide.features.deployment.title}
            </h2>
            <p className="ide-deployment-description">
              {t.ide.features.deployment.description}
            </p>
          </div>
          <div className="ide-deployment-image-wrapper">
            <img
              src="/ide-deployment-new.avif"
              alt={t.ide.features.deployment.title}
              className="ide-deployment-image"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="ide-footer-cta">
        <div className="ide-footer-cta-container">
          <h2 className="ide-footer-cta-title">{t.ide.footerCta.title}</h2>
          <button
            className="ide-footer-cta-button"
            onClick={() => window.open("https://hyperflow-ai.com/", "_blank")}
          >
            {t.ide.footerCta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
};

export default IDE;
