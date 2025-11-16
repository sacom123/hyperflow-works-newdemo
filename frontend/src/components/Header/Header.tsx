import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Space, MenuProps, Drawer } from "antd";
import {
  GlobalOutlined,
  DownOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { languageList } from "../../translations";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Header.css";

interface HeaderProps {
  isMobile: boolean;
  isTablet: boolean;
}

interface OpenDropdowns {
  [key: string]: boolean;
}

interface MenuItem {
  key: string;
  label: string;
  children?: MenuItem[];
}

const Header = ({ isMobile, isTablet }: HeaderProps) => {
  const { setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const [openDropdowns, setOpenDropdowns] = useState<OpenDropdowns>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState<{
    [key: string]: boolean;
  }>({});

  const menuItems: MenuItem[] = [
    {
      key: "product",
      label: t.menu.product,
      children: [
        { key: "overview", label: t.menu.productItems.overview },
        { key: "ide", label: t.menu.productItems.ide },
        { key: "node", label: t.menu.productItems.node },
        { key: "dashboard", label: t.menu.productItems.dashboard },
        { key: "quickStart", label: t.menu.productItems.quickStart },
        { key: "devKit", label: t.menu.productItems.devKit },
      ],
    },
    {
      key: "customer",
      label: t.menu.customer,
      children: [
        { key: "caseStudy", label: t.menu.customerItems.caseStudy },
        { key: "reviews", label: t.menu.customerItems.reviews },
      ],
    },
    {
      key: "news",
      label: t.menu.news,
      children: [
        { key: "blog", label: t.menu.newsItems.blog },
        { key: "newsletter", label: t.menu.newsItems.newsletter },
        { key: "press", label: t.menu.newsItems.press },
        { key: "event", label: t.menu.newsItems.event },
      ],
    },
    {
      key: "support",
      label: t.menu.support,
      children: [
        { key: "channel", label: t.menu.supportItems.channel },
        { key: "contact", label: t.menu.supportItems.contact },
        { key: "faq", label: t.menu.supportItems.faq },
      ],
    },
    {
      key: "company",
      label: t.menu.company,
      children: [
        { key: "about", label: t.menu.companyItems.about },
        { key: "distribution", label: t.menu.companyItems.distribution },
        { key: "team", label: t.menu.companyItems.team },
      ],
    },
  ];

  const languageItems: MenuProps["items"] = languageList.map((lang) => ({
    key: lang.key,
    label: lang.label,
  }));

  const handleLanguageChange: MenuProps["onClick"] = ({ key }) => {
    setLanguage(key as string);
    setOpenDropdowns((prev) => ({ ...prev, language: false }));
  };

  const handleDropdownOpenChange = (key: string, open: boolean) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: open,
    }));
  };

  return (
    <header
      className={`header ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      <div className="header-container">
        <div className="header-logo">
          <a href="/">
            <img
              src="/logo.avif"
              alt="HyperFlow AI"
              className="logo-image"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </a>
        </div>

        {(isMobile || isTablet) && (
          <Button
            type="text"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
            icon={<MenuOutlined />}
          />
        )}

        {!isMobile && !isTablet && (
          <nav className="header-nav">
            {menuItems.map((item, index) => {
              // 제품(0), 고객(1), 소식(2) 렌더링
              if (index < 3) {
                return (
                  <Dropdown
                    key={item.key}
                    menu={{
                      items: item.children as MenuProps["items"],
                      onClick: ({ key }) => {
                        console.log("Menu item clicked:", key);
                        if (key === "overview") {
                          navigate("/overview");
                        } else if (key === "ide") {
                          navigate("/ide");
                        } else if (key === "node") {
                          navigate("/node");
                        } else if (key === "dashboard") {
                          navigate("/dashboard");
                        } else if (key === "quickStart") {
                          navigate("/quickstart");
                        } else if (key === "caseStudy") {
                          navigate("/casestudy");
                        } else if (key === "reviews") {
                          navigate("/customer/reviews");
                        } else if (key === "blog") {
                          navigate("/blog");
                        }
                        setOpenDropdowns((prev) => ({
                          ...prev,
                          [item.key]: false,
                        }));
                      },
                    }}
                    placement="bottomLeft"
                    trigger={["click"]}
                    open={openDropdowns[item.key]}
                    onOpenChange={(open) =>
                      handleDropdownOpenChange(item.key, open)
                    }
                  >
                    <Button type="text" className="nav-item">
                      {item.label}
                      <DownOutlined className="nav-arrow" />
                    </Button>
                  </Dropdown>
                );
              }

              // 소식(2) 다음에 가격, 문서 버튼 삽입
              if (index === 3) {
                return [
                  <Button
                    key="pricing"
                    type="text"
                    className="nav-item nav-item-no-dropdown"
                    onClick={() => navigate("/pricing")}
                  >
                    {t.menu.pricing}
                  </Button>,
                  <Button
                    key="docs"
                    type="text"
                    className="nav-item nav-item-no-dropdown"
                    onClick={() =>
                      window.open("https://docs.hyperflow-ai.com/", "_self")
                    }
                  >
                    {t.menu.docs}
                  </Button>,
                  <Dropdown
                    key={item.key}
                    menu={{
                      items: item.children as MenuProps["items"],
                      onClick: ({ key }) => {
                        console.log("Menu item clicked:", key);
                        if (key === "overview") {
                          navigate("/overview");
                        } else if (key === "ide") {
                          navigate("/ide");
                        } else if (key === "node") {
                          navigate("/node");
                        } else if (key === "dashboard") {
                          navigate("/dashboard");
                        } else if (key === "quickStart") {
                          navigate("/quickstart");
                        } else if (key === "caseStudy") {
                          navigate("/casestudy");
                        } else if (key === "reviews") {
                          navigate("/customer/reviews");
                        }
                        setOpenDropdowns((prev) => ({
                          ...prev,
                          [item.key]: false,
                        }));
                      },
                    }}
                    placement="bottomLeft"
                    trigger={["click"]}
                    open={openDropdowns[item.key]}
                    onOpenChange={(open) =>
                      handleDropdownOpenChange(item.key, open)
                    }
                  >
                    <Button type="text" className="nav-item">
                      {item.label}
                      <DownOutlined className="nav-arrow" />
                    </Button>
                  </Dropdown>,
                ];
              }

              // 나머지 메뉴 항목(회사) 렌더링
              return (
                <Dropdown
                  key={item.key}
                  menu={{
                    items: item.children as MenuProps["items"],
                    onClick: ({ key }) => {
                      console.log("Menu item clicked:", key);
                      setOpenDropdowns((prev) => ({
                        ...prev,
                        [item.key]: false,
                      }));
                    },
                  }}
                  placement="bottomLeft"
                  trigger={["click"]}
                  open={openDropdowns[item.key]}
                  onOpenChange={(open) =>
                    handleDropdownOpenChange(item.key, open)
                  }
                >
                  <Button type="text" className="nav-item">
                    {item.label}
                    <DownOutlined className="nav-arrow" />
                  </Button>
                </Dropdown>
              );
            })}
          </nav>
        )}

        {!isMobile && !isTablet && (
          <div className="header-actions">
            <Dropdown
              menu={{ items: languageItems, onClick: handleLanguageChange }}
              placement="bottomRight"
              trigger={["click"]}
              open={openDropdowns.language}
              onOpenChange={(open) =>
                handleDropdownOpenChange("language", open)
              }
            >
              <Button className="language-selector">
                <Space size={4}>
                  <GlobalOutlined />
                  <span>{t.language}</span>
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Button type="primary" className="login-button">
              {t.login}
            </Button>
          </div>
        )}

        {/* 모바일/태블릿 메뉴 Drawer */}
        <Drawer
          title={
            <div className="drawer-header">
              <img
                src="/logo.avif"
                alt="HyperFlow AI"
                className="drawer-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          }
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          className="mobile-menu-drawer"
          closeIcon={<CloseOutlined />}
          width={320}
        >
          <div className="mobile-menu-content">
            {/* 네비게이션 메뉴 */}
            <nav className="mobile-nav">
              {menuItems.map((item, index) => {
                // 제품(0), 고객(1), 소식(2) 렌더링
                if (index < 3) {
                  return (
                    <div key={item.key} className="mobile-nav-item">
                      <button
                        className="mobile-nav-label mobile-nav-label-button"
                        onClick={() => {
                          setMobileNavOpen((prev) => ({
                            ...prev,
                            [item.key]: !prev[item.key],
                          }));
                        }}
                      >
                        {item.label}
                        <DownOutlined
                          className={`mobile-nav-arrow ${
                            mobileNavOpen[item.key] ? "open" : ""
                          }`}
                        />
                      </button>
                      {item.children && (
                        <div
                          className={`mobile-nav-children ${
                            mobileNavOpen[item.key] ? "open" : ""
                          }`}
                        >
                          {item.children.map((child) => (
                            <button
                              key={child.key}
                              className="mobile-nav-child"
                              onClick={() => {
                                if (child.key === "overview") {
                                  navigate("/overview");
                                } else if (child.key === "ide") {
                                  navigate("/ide");
                                } else if (child.key === "node") {
                                  navigate("/node");
                                } else if (child.key === "dashboard") {
                                  navigate("/dashboard");
                                } else if (child.key === "quickStart") {
                                  navigate("/quickstart");
                                } else if (child.key === "caseStudy") {
                                  navigate("/casestudy");
                                } else if (child.key === "reviews") {
                                  navigate("/customer/reviews");
                                } else if (child.key === "blog") {
                                  navigate("/blog");
                                }
                                setMobileMenuOpen(false);
                                setMobileNavOpen((prev) => ({
                                  ...prev,
                                  [item.key]: false,
                                }));
                              }}
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // 소식(2) 다음에 가격, 문서 버튼 삽입
                if (index === 3) {
                  return [
                    <button
                      key="pricing"
                      className="mobile-nav-item mobile-nav-button"
                      onClick={() => {
                        navigate("/pricing");
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.menu.pricing}
                    </button>,
                    <button
                      key="docs"
                      className="mobile-nav-item mobile-nav-button"
                      onClick={() => {
                        window.open("https://docs.hyperflow-ai.com/", "_self");
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.menu.docs}
                    </button>,
                    <div key={item.key} className="mobile-nav-item">
                      <button
                        className="mobile-nav-label mobile-nav-label-button"
                        onClick={() => {
                          setMobileNavOpen((prev) => ({
                            ...prev,
                            [item.key]: !prev[item.key],
                          }));
                        }}
                      >
                        {item.label}
                        <DownOutlined
                          className={`mobile-nav-arrow ${
                            mobileNavOpen[item.key] ? "open" : ""
                          }`}
                        />
                      </button>
                      {item.children && (
                        <div
                          className={`mobile-nav-children ${
                            mobileNavOpen[item.key] ? "open" : ""
                          }`}
                        >
                          {item.children.map((child) => (
                            <button
                              key={child.key}
                              className="mobile-nav-child"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileNavOpen((prev) => ({
                                  ...prev,
                                  [item.key]: false,
                                }));
                              }}
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>,
                  ];
                }

                // 나머지 메뉴 항목(회사) 렌더링
                return (
                  <div key={item.key} className="mobile-nav-item">
                    <button
                      className="mobile-nav-label mobile-nav-label-button"
                      onClick={() => {
                        setMobileNavOpen((prev) => ({
                          ...prev,
                          [item.key]: !prev[item.key],
                        }));
                      }}
                    >
                      {item.label}
                      <DownOutlined
                        className={`mobile-nav-arrow ${
                          mobileNavOpen[item.key] ? "open" : ""
                        }`}
                      />
                    </button>
                    {item.children && (
                      <div
                        className={`mobile-nav-children ${
                          mobileNavOpen[item.key] ? "open" : ""
                        }`}
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.key}
                            className="mobile-nav-child"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileNavOpen((prev) => ({
                                ...prev,
                                [item.key]: false,
                              }));
                            }}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* 언어 선택기 */}
            <div className="mobile-menu-actions">
              <Dropdown
                menu={{ items: languageItems, onClick: handleLanguageChange }}
                placement="topRight"
                trigger={["click"]}
                open={openDropdowns.language}
                onOpenChange={(open) =>
                  handleDropdownOpenChange("language", open)
                }
              >
                <Button className="mobile-language-selector">
                  <Space size={4}>
                    <GlobalOutlined />
                    <span>{t.language}</span>
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
              <Button
                type="primary"
                className="mobile-login-button"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.login}
              </Button>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
