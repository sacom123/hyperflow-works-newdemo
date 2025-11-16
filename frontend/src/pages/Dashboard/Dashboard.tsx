import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";

interface DashboardProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Dashboard = ({ isMobile, isTablet }: DashboardProps) => {
  const { t } = useLanguage();

  return (
    <div
      className={`dashboard ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      {/* Main Text Section */}
      <section className="dashboard-main-text">
        <div className="dashboard-main-text-container">
          <h1 className="dashboard-title">{t.dashboard.title}</h1>
          <p className="dashboard-description">{t.dashboard.description}</p>
        </div>
      </section>

      {/* Project Management Section */}
      <section className="dashboard-section dashboard-project-management">
        <div className="dashboard-section-container">
          <div className="dashboard-section-content">
            <div className="dashboard-text-frame">
              <h2 className="dashboard-section-title">
                {t.dashboard.projectManagement.title}
              </h2>
            </div>
            <p className="dashboard-section-content-text">
              {t.dashboard.projectManagement.content}
            </p>
            <div className="dashboard-image-wrapper">
              <img
                src="/dashboard-project-management.svg"
                alt={t.dashboard.projectManagement.title}
                className="dashboard-section-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Member Management Section */}
      <section className="dashboard-section dashboard-member-management">
        <div className="dashboard-section-container">
          <div className="dashboard-section-content">
            <div className="dashboard-text-frame-wrapper">
              <div className="dashboard-text-frame">
                <h2 className="dashboard-section-title">
                  {t.dashboard.memberManagement.title}
                </h2>
              </div>
            </div>
            <p className="dashboard-section-content-text">
              {t.dashboard.memberManagement.content}
            </p>
            <div className="dashboard-image-wrapper">
              <img
                src="/dashboard-member-management.svg"
                alt={t.dashboard.memberManagement.title}
                className="dashboard-section-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Usage & Quotas Section */}
      <section className="dashboard-section dashboard-usage-quotas">
        <div className="dashboard-section-container">
          <div className="dashboard-section-content">
            <div className="dashboard-text-frame">
              <h2 className="dashboard-section-title">
                {t.dashboard.usageQuotas.title}
              </h2>
            </div>
            <p className="dashboard-section-content-text">
              {t.dashboard.usageQuotas.content}
            </p>
            <div className="dashboard-image-wrapper">
              <img
                src="/dashboard-usage-quotas.svg"
                alt={t.dashboard.usageQuotas.title}
                className="dashboard-section-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* API Management Section */}
      <section className="dashboard-section dashboard-api-management">
        <div className="dashboard-section-container">
          <div className="dashboard-section-content">
            <div className="dashboard-text-frame">
              <h2 className="dashboard-section-title">
                {t.dashboard.apiManagement.title}
              </h2>
            </div>
            <p className="dashboard-section-content-text">
              {t.dashboard.apiManagement.content}
            </p>
            <div className="dashboard-image-wrapper">
              <img
                src="/dashboard-api-management.svg"
                alt={t.dashboard.apiManagement.title}
                className="dashboard-section-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
};

export default Dashboard;
