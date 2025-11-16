/**
 * Image utility functions for handling image loading errors
 * 이미지 로딩 에러 처리 유틸리티 함수
 */

/**
 * Handles image error by falling back to PNG format
 * 이미지 로딩 에러 발생 시 PNG 형식으로 폴백 처리
 * @param e - React.SyntheticEvent<HTMLImageElement, Event>
 * @param fallbackPath - Path to fallback image (default: same name with .png extension)
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackPath?: string
) => {
  const target = e.target as HTMLImageElement;
  if (fallbackPath) {
    target.src = fallbackPath;
  } else {
    // Replace .avif extension with .png
    // .avif 확장자를 .png로 교체
    target.src = target.src.replace(/\.avif$/, ".png");
  }
};

/**
 * Handles image error with display fallback (hides image if fallback also fails)
 * 이미지 로딩 에러 발생 시 PNG로 폴백하고, 그것도 실패하면 이미지 숨김 처리
 * @param e - React.SyntheticEvent<HTMLImageElement, Event>
 * @param fallbackPath - Path to fallback image
 */
export const handleImageErrorWithFallback = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackPath?: string
) => {
  const target = e.target as HTMLImageElement;
  if (fallbackPath) {
    target.src = fallbackPath;
  } else {
    target.src = target.src.replace(/\.avif$/, ".png");
  }
  target.onerror = () => {
    target.style.display = "none";
  };
};

