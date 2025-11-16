# Footer 텍스트 수정 가이드

Footer의 모든 텍스트는 `frontend/src/components/Footer/Footer.tsx` 파일에서 수정할 수 있습니다.

## 📝 텍스트 수정 위치

### 1. 섹션 제목 및 링크 (19-73번 줄)

`footerSections` 배열에서 수정:

```typescript
const footerSections: FooterSection[] = [
  {
    title: '제품',  // ← 섹션 제목 수정
    links: [
      { label: '하이퍼플로우', href: '/product/hyperflow' },  // ← 링크 텍스트 수정
      { label: 'IDE', href: '/product/ide' },
      // ... 더 많은 링크들
    ],
  },
  // ... 더 많은 섹션들
];
```

**수정 방법:**
- `title`: 섹션 제목 (예: '제품', '소식', '지원' 등)
- `label`: 링크에 표시되는 텍스트
- `href`: 링크 URL (필요시 수정)

### 2. 주소 (98-101번 줄)

```typescript
<p className="footer-address">
  24, Maeheon-ro, Seocho-gu,  {/* ← 주소 첫 번째 줄 */}
  <br />
  Seoul, Republic of Korea     {/* ← 주소 두 번째 줄 */}
</p>
```

### 3. 저작권 텍스트 (201-203번 줄)

```typescript
<p className="footer-copyright">
  © 본 문서의 저작권은 주식회사 미리내테크놀로지스에 있으며, 무단 전재와 배포를 금합니다.
</p>
```

## 🎨 스타일 수정 위치

텍스트 스타일(폰트 크기, 색상 등)은 `frontend/src/components/Footer/Footer.css` 파일에서 수정:

- **섹션 제목**: `.footer-section-title` (104-112번 줄)
- **링크 텍스트**: 
  - 첫 번째 행: `.footer-link-first-row` (145-147번 줄)
  - 두 번째 행: `.footer-link-second-row` (149-151번 줄)
- **주소**: `.footer-address` (44-53번 줄)
- **저작권**: `.footer-copyright` (162-170번 줄)

## 🔧 빠른 수정 예시

예를 들어, "제품" 섹션의 "하이퍼플로우" 링크를 "HyperFlow"로 변경하려면:

```typescript
{
  title: '제품',
  links: [
    { label: 'HyperFlow', href: '/product/hyperflow' },  // ← 여기 수정
    // ...
  ],
}
```

