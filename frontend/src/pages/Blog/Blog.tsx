import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Footer from "../../components/Footer/Footer";
import "./Blog.css";

interface BlogProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Blog = ({ isMobile, isTablet }: BlogProps) => {
  const [activeTab, setActiveTab] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    "전체",
    "하이퍼플로우",
    "가이드",
    "기능",
    "튜토리얼",
    "경쟁사",
    "솔루션",
    "인사이트",
  ];

  const blogPosts = [
    {
      id: 1,
      date: "2025-11-19",
      title: "아이디어를 임팩트로 바꾸는\n하이퍼플로우의 철학",
      description:
        "하이퍼플로우 AI는 대담한 아이디어를 현실의 성과로 바꿉니다. 복잡한 코드 없이도 누구나 쉽게 AI를 만들 수 있죠. 접근성, 단순함, 협업이라는 세 가지 원칙을 바탕으로,\n하이퍼플로우는 그 어떤 도구보다 빠르게 AI를 구축하고 확장할 수 있는 환경을 제공합니다. AI가 더 이상 일부 전문가만의 영역이 아니라, 모든 팀이 함께 성장할 수 있는 도구가 되도록 —그것이 하이퍼플로우가 추구하는 방향입니다.",
      author: "Steve Seungseopb Lee\n매니저, HyperFlow AI",
      image: "/blog-card-01-image-7192b4.avif",
      category: "하이퍼플로우",
      backgroundColor: "rgba(161, 143, 255, 0.1)",
    },
    {
      id: 2,
      date: "2025-11-12",
      title: "모두를 위한 AI의 민주화 -\n하이퍼플로우의 비전",
      description:
        "AI는 모든 것을 바꾸고 있지만, 정작 대부분의 팀에게 AI를 만드는 일은 여전히 어렵고 멀게 느껴집니다. 하이퍼플로우 AI는 이 격차를 없애기 위해 시작되었습니다. 우리는 누구나 쉽게 AI를 만들 수 있는 세상을 꿈꿉니다. 하이퍼플로우의 목표는 하나, AI의 민주화입니다. 복잡한 코드나 전문 지식이 없어도, 누구나 시각적으로 AI를 구축하고, 실행하고, 발전시킬 수 있도록 돕는 것. 그것이 우리가 만들어가고 있는 미래입니다.",
      author: "Steve Seungseopb Lee\n매니저, HyperFlow AI",
      image: "/blog-card-02-image.avif",
      category: "하이퍼플로우",
      backgroundColor: "rgba(0, 136, 255, 0.05)",
    },
  ];

  return (
    <div
      className={`blog ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""}`}
    >
      {/* Main Content Section */}
      <section className="blog-main">
        <div className="blog-main-container">
          <h1 className="blog-title">블로그</h1>
          <p className="blog-subtitle">
            하이퍼플로우의 이야기와 기술을 만나보세요.
          </p>
        </div>
      </section>

      {/* Navigation Tabs and Search */}
      <section className="blog-nav-section">
        <div className="blog-nav-container">
          <div className="blog-nav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`blog-nav-tab ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="blog-search-wrapper">
            <Input
              className="blog-search-input"
              placeholder="검색"
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="large"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="blog-cards-section">
        <div className="blog-cards-container">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
              style={{ backgroundColor: post.backgroundColor }}
            >
              <div className="blog-card-logo">
                <div className="blog-card-logo-badge">하이퍼플로우</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card-image"
                    loading="lazy"
                  />
                </div>
                <div className="blog-card-text">
                  <div className="blog-card-date">{post.date}</div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-description">{post.description}</p>
                  <div className="blog-card-author">{post.author}</div>
                </div>
              </div>
              <button className="blog-card-button">자세히 보기</button>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
};

export default Blog;

