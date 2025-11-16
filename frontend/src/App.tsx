import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ConfigProvider } from "antd";
import koKR from "antd/locale/ko_KR";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header, Footer } from "./components/layout";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Overview from "./pages/Overview/Overview";
import IDE from "./pages/IDE/IDE";
import Node from "./pages/Node/Node";
import Dashboard from "./pages/Dashboard/Dashboard";
import QuickStart from "./pages/QuickStart/QuickStart";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import Reviews from "./pages/Reviews/Reviews";
import Blog from "./pages/Blog/Blog";
import "./App.css";

/**
 * AppContent Component / 앱 콘텐츠 컴포넌트
 * Main content wrapper with routing and responsive detection
 * 라우팅과 반응형 감지가 포함된 메인 콘텐츠 래퍼
 */
function AppContent() {
  // Responsive breakpoints / 반응형 브레이크포인트
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const location = useLocation();

  // Scroll to top on route change / 경로 변경 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Pages that don't show footer / 푸터를 표시하지 않는 페이지들
  const isOverviewPage = location.pathname === "/overview";
  const isIDEPage = location.pathname === "/ide";
  const isNodePage = location.pathname === "/node";
  const isDashboardPage = location.pathname === "/dashboard";
  const isQuickStartPage = location.pathname === "/quickstart";
  const isCaseStudyPage = location.pathname === "/casestudy";
  const isReviewsPage = location.pathname === "/customer/reviews";
  const isBlogPage = location.pathname === "/blog";

  return (
    <div className="app">
      <Header isMobile={isMobile} isTablet={isTablet} />
      <main className="main-content">
        {/* Route definitions / 라우트 정의 */}
        <Routes>
          <Route
            path="/"
            element={<Home isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route
            path="/pricing"
            element={<Pricing isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route
            path="/overview"
            element={<Overview isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route
            path="/ide"
            element={<IDE isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route
            path="/node"
            element={<Node isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route
            path="/quickstart"
            element={<QuickStart isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route
            path="/casestudy"
            element={<CaseStudy isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route
            path="/customer/reviews"
            element={<Reviews isMobile={isMobile} isTablet={isTablet} />}
          />
          <Route
            path="/blog"
            element={<Blog isMobile={isMobile} isTablet={isTablet} />}
          />
        </Routes>
      </main>
      {/* Conditional footer rendering / 조건부 푸터 렌더링 */}
      {!isOverviewPage &&
        !isIDEPage &&
        !isNodePage &&
        !isDashboardPage &&
        !isQuickStartPage &&
        !isCaseStudyPage &&
        !isReviewsPage &&
        !isBlogPage && <Footer isMobile={isMobile} isTablet={isTablet} />}
    </div>
  );
}

/**
 * App Component / 앱 컴포넌트
 * Root component with providers (Language, Ant Design, Router)
 * 프로바이더(언어, Ant Design, 라우터)가 포함된 루트 컴포넌트
 */
function App() {
  return (
    <LanguageProvider>
      <ConfigProvider locale={koKR}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ConfigProvider>
    </LanguageProvider>
  );
}

export default App;
