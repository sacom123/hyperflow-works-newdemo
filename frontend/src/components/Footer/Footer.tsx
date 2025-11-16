import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { getRoutePath, isExternalUrl } from "../../utils/navigationUtils";
import { handleImageErrorWithFallback } from "../../utils/imageUtils";

interface FooterProps {
  isMobile: boolean;
  isTablet: boolean;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

/**
 * Footer Component / 푸터 컴포넌트
 * Site footer with navigation links, company info, and social media
 * 네비게이션 링크, 회사 정보, 소셜 미디어가 포함된 사이트 푸터
 */
const Footer = ({ isMobile, isTablet }: FooterProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  /**
   * Maps footer link labels to their corresponding routes
   * Maps header menu items to footer links for consistency
   * 푸터 링크 라벨을 해당 라우트로 매핑
   * 일관성을 위해 헤더 메뉴 항목을 푸터 링크로 매핑
   */
  const getFooterLinkPath = (
    sectionKey: string,
    linkKey: string,
    label: string,
    defaultHref: string
  ): string => {
    // Map header menu labels to routes / 헤더 메뉴 라벨을 라우트로 매핑
    const headerMenuLabels: { [key: string]: string } = {
      // Product section / 제품 섹션
      [t.menu.productItems.ide]: "/ide",
      [t.menu.productItems.node]: "/node",
      [t.menu.productItems.dashboard]: "/dashboard",
      [t.menu.productItems.overview]: "/overview",
      [t.menu.productItems.quickStart]: "/quickstart",
      // Customer section / 고객 섹션
      [t.menu.customerItems.caseStudy]: "/casestudy",
      [t.menu.customerItems.reviews]: "/customer/reviews",
      // Main menu / 메인 메뉴
      [t.menu.pricing]: "/pricing",
      [t.menu.docs]: "https://docs.hyperflow-ai.com/",
    };

    // Check direct label mapping / 직접 라벨 매핑 확인
    if (headerMenuLabels[label]) {
      return headerMenuLabels[label];
    }

    // Fallback to route map by key / 키로 라우트 맵 폴백
    const routePath = getRoutePath(linkKey, defaultHref);
    if (routePath !== defaultHref) {
      return routePath;
    }

    // Special cases / 특수 케이스
    if (sectionKey === "product") {
      if (linkKey === "hyperflow") return "/overview"; // Maps to overview / 둘러보기로 매핑
      if (linkKey === "templates") return "/quickstart"; // Maps to quickstart / 빠른 시작으로 매핑
    }
    return defaultHref;
  };

  /**
   * Handles footer link clicks
   * Opens external links in new tab, navigates internal links using React Router
   * 푸터 링크 클릭 처리
   * 외부 링크는 새 탭에서 열고, 내부 링크는 React Router로 네비게이션
   */
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    // External links open in new tab / 외부 링크는 새 탭에서 열기
    if (isExternalUrl(href)) {
      window.open(href, "_blank");
      return;
    }
    // Internal links use navigation / 내부 링크는 네비게이션 사용
    navigate(href);
  };

  // Footer sections configuration / 푸터 섹션 구성
  const footerSections: FooterSection[] = [
    {
      title: t.footer.sections.product.title,
      links: [
        {
          label: t.footer.sections.product.links.hyperflow,
          href: getFooterLinkPath(
            "product",
            "hyperflow",
            t.footer.sections.product.links.hyperflow,
            "/product/hyperflow"
          ),
        },
        {
          label: t.footer.sections.product.links.ide,
          href: getFooterLinkPath(
            "product",
            "ide",
            t.footer.sections.product.links.ide,
            "/product/ide"
          ),
        },
        {
          label: t.footer.sections.product.links.templates,
          href: getFooterLinkPath(
            "product",
            "templates",
            t.footer.sections.product.links.templates,
            "/product/templates"
          ),
        },
        {
          label: t.footer.sections.product.links.admin,
          href: getFooterLinkPath(
            "product",
            "admin",
            t.footer.sections.product.links.admin,
            "/product/admin"
          ),
        },
        {
          label: t.footer.sections.product.links.pricing,
          href: getFooterLinkPath(
            "product",
            "pricing",
            t.footer.sections.product.links.pricing,
            "/product/pricing"
          ),
        },
        {
          label: t.footer.sections.product.links.sdk,
          href: getFooterLinkPath(
            "product",
            "sdk",
            t.footer.sections.product.links.sdk,
            "/product/sdk"
          ),
        },
      ],
    },
    {
      title: t.footer.sections.news.title,
      links: [
        { label: t.footer.sections.news.links.blog, href: "/news/blog" },
        { label: t.footer.sections.news.links.events, href: "/news/events" },
        {
          label: t.footer.sections.news.links.articles,
          href: "/news/articles",
        },
        {
          label: t.footer.sections.news.links.newsletter,
          href: "/news/newsletter",
        },
        {
          label: t.footer.sections.news.links.releaseNotes,
          href: "/news/release-notes",
        },
      ],
    },
    {
      title: t.footer.sections.support.title,
      links: [
        {
          label: t.footer.sections.support.links.channel,
          href: getFooterLinkPath(
            "support",
            "channel",
            t.footer.sections.support.links.channel,
            "/support/channel"
          ),
        },
        {
          label: t.footer.sections.support.links.faq,
          href: getFooterLinkPath(
            "support",
            "faq",
            t.footer.sections.support.links.faq,
            "/support/faq"
          ),
        },
        {
          label: t.footer.sections.support.links.docs,
          href: getFooterLinkPath(
            "support",
            "docs",
            t.footer.sections.support.links.docs,
            "/support/docs"
          ),
        },
        {
          label: t.footer.sections.support.links.contact,
          href: getFooterLinkPath(
            "support",
            "contact",
            t.footer.sections.support.links.contact,
            "/support/contact"
          ),
        },
      ],
    },
    {
      title: t.footer.sections.customer.title,
      links: [
        {
          label: t.footer.sections.customer.links.reviews,
          href: getFooterLinkPath(
            "customer",
            "reviews",
            t.footer.sections.customer.links.reviews,
            "/customer/reviews"
          ),
        },
        {
          label: t.footer.sections.customer.links.partners,
          href: getFooterLinkPath(
            "customer",
            "partners",
            t.footer.sections.customer.links.partners,
            "/customer/partners"
          ),
        },
        {
          label: t.footer.sections.customer.links.caseStudies,
          href: getFooterLinkPath(
            "customer",
            "caseStudies",
            t.footer.sections.customer.links.caseStudies,
            "/customer/case-studies"
          ),
        },
      ],
    },
    {
      title: t.footer.sections.company.title,
      links: [
        {
          label: t.footer.sections.company.links.about,
          href: "/company/about",
        },
        {
          label: t.footer.sections.company.links.partners,
          href: "/company/partners",
        },
        {
          label: t.footer.sections.company.links.channels,
          href: "/company/channels",
        },
      ],
    },
    {
      title: t.footer.sections.legal.title,
      links: [
        { label: t.footer.sections.legal.links.terms, href: "/legal/terms" },
        {
          label: t.footer.sections.legal.links.privacy,
          href: "/legal/privacy",
        },
      ],
    },
  ];

  // Split sections into two rows for layout / 레이아웃을 위해 섹션을 두 행으로 분할
  const firstRowSections = footerSections.slice(0, 3); // Product, News, Support / 제품, 소식, 지원
  const secondRowSections = footerSections.slice(3); // Customer, Company, Legal / 고객, 회사, 법률

  return (
    <footer
      className={`footer ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            {/* Logo / 로고 */}
            <div className="footer-logo">
              <img
                src="/logo-white.avif"
                alt="HyperFlow AI"
                className="footer-logo-image"
                onError={(e) =>
                  handleImageErrorWithFallback(e, "/logo-white.png")
                }
              />
            </div>
            <p className="footer-address">
              {t.footer.address.line1}
              <br />
              {t.footer.address.line2}
            </p>
            {/* Social media links / 소셜 미디어 링크 */}
            <div className="footer-social">
              <a href="#" aria-label="Youtube" className="social-link">
                <img
                  src="/footer-youtube.avif"
                  alt="Youtube"
                  className="social-icon"
                  onError={(e) =>
                    handleImageErrorWithFallback(e, "/footer-youtube.png")
                  }
                />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <img
                  src="/footer-linkedin.avif"
                  alt="LinkedIn"
                  className="social-icon"
                  onError={(e) =>
                    handleImageErrorWithFallback(e, "/footer-linkedin.png")
                  }
                />
              </a>
              <a href="#" aria-label="Discord" className="social-link">
                <img
                  src="/footer-discord.avif"
                  alt="Discord"
                  className="social-icon"
                  onError={(e) =>
                    handleImageErrorWithFallback(e, "/footer-discord.png")
                  }
                />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <img
                  src="/footer-instagram.avif"
                  alt="Instagram"
                  className="social-icon"
                  onError={(e) =>
                    handleImageErrorWithFallback(e, "/footer-instagram.png")
                  }
                />
              </a>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-links-row footer-links-row-first">
              {firstRowSections.map((section, index) => (
                <div key={index} className="footer-section">
                  <h3 className="footer-section-title">{section.title}</h3>
                  <div className="footer-divider" />
                  <ul
                    className={`footer-links-list ${
                      section.links.length >= 3
                        ? "footer-links-list-multi-column"
                        : ""
                    }`}
                  >
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="footer-link footer-link-first-row"
                          onClick={(e) => handleLinkClick(e, link.href)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="footer-links-row footer-links-row-second">
              {secondRowSections.map((section, index) => (
                <div key={index} className="footer-section">
                  <h3 className="footer-section-title">{section.title}</h3>
                  <div className="footer-divider" />
                  <ul
                    className={`footer-links-list ${
                      section.links.length >= 3
                        ? "footer-links-list-multi-column"
                        : ""
                    }`}
                  >
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="footer-link footer-link-second-row"
                          onClick={(e) => handleLinkClick(e, link.href)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
