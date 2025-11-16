/**
 * Navigation utility functions for route mapping
 * 라우트 매핑을 위한 네비게이션 유틸리티 함수
 */

/**
 * Maps menu keys to their corresponding routes
 * 메뉴 키를 해당 라우트로 매핑
 */
export const ROUTE_MAP: { [key: string]: string } = {
  // Product routes / 제품 라우트
  overview: "/overview",
  ide: "/ide",
  node: "/node",
  dashboard: "/dashboard",
  quickStart: "/quickstart",
  devKit: "/devkit",
  // Customer routes / 고객 라우트
  caseStudy: "/casestudy",
  reviews: "/customer/reviews",
  // News routes / 소식 라우트
  blog: "/blog",
  newsletter: "/newsletter",
  press: "/press",
  event: "/event",
  // Support routes / 지원 라우트
  channel: "/support/channel",
  contact: "/support/contact",
  faq: "/support/faq",
  docs: "https://docs.hyperflow-ai.com/",
  // Company routes / 회사 라우트
  about: "/company/about",
  distribution: "/company/distribution",
  team: "/company/team",
  // Common routes / 공통 라우트
  pricing: "/pricing",
};

/**
 * Gets route path from menu key
 * 메뉴 키로부터 라우트 경로를 가져옴
 * @param key - Menu item key
 * @param defaultPath - Default path if key not found
 * @returns Route path
 */
export const getRoutePath = (key: string, defaultPath: string = "/"): string => {
  return ROUTE_MAP[key] || defaultPath;
};

/**
 * Checks if a path is an external URL
 * 경로가 외부 URL인지 확인
 * @param path - Path to check
 * @returns True if external URL
 */
export const isExternalUrl = (path: string): boolean => {
  return path.startsWith("http://") || path.startsWith("https://");
};

