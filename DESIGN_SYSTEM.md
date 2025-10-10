# LazySaturday Design System

> 확장 가능하고 유지보수하기 쉬운 브랜드 기반 디자인 시스템

## 📐 Architecture Overview

```
app/
├── components/          # 재사용 가능한 UI 컴포넌트
├── constants/          # 브랜드 상수 및 설정
├── styles/            # 모듈화된 CSS 시스템
├── types/             # TypeScript 타입 정의
└── page.tsx           # 메인 페이지 (조합)
```

---

## 🎨 Brand Foundation

### Colors

브랜드 가이드라인에 따른 컬러 시스템:

```typescript
// constants/brand.ts
export const COLORS = {
  primary: '#1a1a1a',      // 규율, 집중, 깊이
  accent: '#00c896',       // 생존, 성장, 지속성
  background: '#f5f5f4',   // 반복되는 일상
  highlight: '#ffd45e',    // 창의의 순간
  neutral: '#5f5f5f',      // 차분한 톤
  white: '#ffffff',
  midnight: {              // Midnight 테마
    dark: '#0a0f1e',
    blue: '#1a2740',
    lighter: '#2a3546',
    dawn: '#344155',
    morning: '#4a5568',
    lightSlate: '#64748b',
  },
};
```

**사용법:**
```css
/* CSS 변수로 접근 */
background: var(--accent);
color: var(--midnight-dark);
```

---

### Typography

3가지 주요 폰트 패밀리:

| 용도 | 폰트 | 사용처 |
|------|------|--------|
| **로고/헤드라인** | Space Grotesk | 로고, 제목, 강조 텍스트 |
| **본문** | Inter | 일반 텍스트, 설명 |
| **코드** | JetBrains Mono | 태그, 개발자 정체성 |

**사용법:**
```tsx
<h1 className="brand-logo">로고</h1>
<h2 className="brand-headline">헤드라인</h2>
<p className="brand-body">본문 텍스트</p>
<code className="brand-code">코드 텍스트</code>
```

---

### Spacing System

8px 기반 일관된 간격 시스템:

```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

---

## 🧩 Component Library

### 1. Background Effects

루틴과 반복을 상징하는 배경 효과들:

```tsx
import {
  GridBackground,
  LoopLines,
  FloatingDots,
  RoutineRings
} from './components/BackgroundEffects';

// 사용 예시
<section className="relative">
  <GridBackground />
  <LoopLines />
  <FloatingDots />
  <RoutineRings />
  {/* 컨텐츠 */}
</section>
```

**컴포넌트 설명:**
- `GridBackground`: 구조와 루틴을 상징하는 그리드
- `LoopLines`: 반복을 표현하는 흐르는 선들
- `FloatingDots`: 시스템 리듬을 나타내는 떠다니는 점들
- `RoutineRings`: 지속적인 루프를 상징하는 펄스 링

---

### 2. Section Components

페이지를 구성하는 주요 섹션들:

```tsx
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ManifestoSection } from './components/ManifestoSection';
import { StatsSection } from './components/StatsSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';

// 메인 페이지 구성
export default function Home() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <ManifestoSection />
      <StatsSection />
      <QuoteSection />
      <Footer />
    </main>
  );
}
```

**각 섹션의 역할:**
- **HeroSection**: 브랜드 첫인상, 핵심 메시지 전달
- **PhilosophySection**: 4가지 철학적 기둥 표현
- **ManifestoSection**: 브랜드 선언문 (Identity Manifesto)
- **StatsSection**: 핵심 지표로 신뢰 구축
- **QuoteSection**: 영감을 주는 인용구와 원칙
- **Footer**: 링크와 브랜드 정보

---

### 3. Reusable UI Components

CSS 클래스로 제공되는 재사용 가능한 UI 요소들:

#### Cards
```tsx
<div className="brand-card">
  {/* 카드 컨텐츠 */}
</div>

<div className="manifesto-card">
  {/* 선언문 카드 */}
</div>
```

#### Buttons
```tsx
<button className="brand-button">
  클릭하기
</button>

<button className="brand-button brand-button-outline">
  아웃라인 버튼
</button>
```

#### Philosophy Block
```tsx
<div className="philosophy-block">
  <div className="philosophy-number">01</div>
  <h3>제목</h3>
  <p>설명</p>
</div>
```

#### Tags
```tsx
<span className="brand-tag">#BuildOnce</span>
```

#### Stats Display
```tsx
<div>
  <div className="stat-number">2h</div>
  <div className="stat-label">Daily Focus</div>
</div>
```

---

## 🎭 Animation System

브랜드 철학(느리고 꾸준함)을 반영한 애니메이션:

### 핵심 애니메이션

```css
/* Fade in with upward motion */
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

/* Logo breathing effect */
.animate-logo-breathe {
  animation: logo-breathe 4s ease-in-out infinite;
}

/* Cursor blink */
.animate-blink {
  animation: blink 1s infinite;
}

/* Loop rotation */
.animate-rotate-loop {
  animation: rotate-loop 10s linear infinite;
}
```

### 애니메이션 원칙

1. **Slow & Smooth**: 급하지 않은 전환 (0.3s ~ 0.6s)
2. **Purposeful**: 의미 있는 모션만 사용
3. **Consistent**: 일관된 easing 함수
4. **Subtle**: 과하지 않은 효과

---

## 📦 Constants & Types

### Brand Constants

```typescript
// constants/brand.ts
export const BRAND = {
  name: 'LazySaturday',
  tagline: 'Make small. Ship fast. Live slow.',
  description: '자동화로 주말을 되찾는 개발자',
  keywords: ['개발자', '자동화', '생산성', '시스템', '루틴'],
};

export const PHILOSOPHY = [
  { number: '01', title: 'System over Hustle', ... },
  { number: '02', title: 'Small is Sustainable', ... },
  { number: '03', title: 'Automation is Art', ... },
  { number: '04', title: 'Freedom by Routine', ... },
];

export const MANIFESTO = {
  title: 'Brand Manifesto',
  quote: '"나는 게으른 토요일을 위해 일한다."',
  content: [...],
  closing: '...',
};
```

### TypeScript Types

```typescript
// types/index.ts
export interface PhilosophyItem {
  number: string;
  title: string;
  description: string;
}

export interface ManifestoSection {
  title: string;
  quote: string;
  content: string[];
  closing: string;
}
```

---

## 🎯 CSS Architecture

### 모듈 구조

```
styles/
├── variables.css      # CSS 변수 (색상, 폰트, 간격 등)
├── animations.css     # 애니메이션 정의
├── typography.css     # 타이포그래피 시스템
├── backgrounds.css    # 배경 효과
└── components.css     # 컴포넌트 스타일
```

### Import 순서

```css
/* globals.css */
@import "tailwindcss";
@import "./styles/variables.css";
@import "./styles/animations.css";
@import "./styles/typography.css";
@import "./styles/backgrounds.css";
@import "./styles/components.css";
```

---

## 🚀 Usage Guidelines

### 1. 새로운 섹션 추가하기

```tsx
// 1. components/ 폴더에 새 컴포넌트 생성
// components/NewSection.tsx
export function NewSection() {
  return (
    <section className="section-dawn py-24 px-6">
      {/* 컨텐츠 */}
    </section>
  );
}

// 2. page.tsx에서 import 및 사용
import { NewSection } from './components/NewSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewSection />  {/* 추가 */}
      <PhilosophySection />
    </main>
  );
}
```

### 2. 브랜드 데이터 수정하기

```typescript
// constants/brand.ts 수정
export const PHILOSOPHY = [
  {
    number: '05',  // 새로운 철학 추가
    title: 'New Philosophy',
    description: '새로운 철학 설명',
  },
  // ...기존 철학들
];
```

### 3. 커스텀 스타일 추가하기

```css
/* styles/components.css에 추가 */
.custom-component {
  background: var(--accent);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.custom-component:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

---

## 🔍 Best Practices

### 컴포넌트 작성

✅ **DO:**
```tsx
// 작고 집중된 컴포넌트
export function StatItem({ number, label, description }: StatItemProps) {
  return (
    <div className="text-center group">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
```

❌ **DON'T:**
```tsx
// 너무 많은 책임을 가진 컴포넌트
export function EverythingComponent() {
  // Hero, Philosophy, Stats 모두 처리...
}
```

### 스타일링

✅ **DO:**
```tsx
// CSS 변수와 정의된 클래스 사용
<div className="brand-card hover-lift">
  <h3 className="brand-headline">제목</h3>
</div>
```

❌ **DON'T:**
```tsx
// 인라인 스타일과 매직 넘버
<div style={{ background: '#00c896', padding: '27px' }}>
  <h3>제목</h3>
</div>
```

### 데이터 관리

✅ **DO:**
```tsx
// constants에서 데이터 가져오기
import { PHILOSOPHY } from '../constants/brand';

export function PhilosophySection() {
  return PHILOSOPHY.map(item => <Card {...item} />);
}
```

❌ **DON'T:**
```tsx
// 컴포넌트 내에 하드코딩
export function PhilosophySection() {
  const items = [
    { title: 'System over Hustle', ... },
    // ...
  ];
}
```

---

## 📱 Responsive Design

모든 컴포넌트는 반응형으로 설계:

```css
/* Mobile First 접근 */
.brand-quote {
  font-size: 1.125rem;
  padding-left: var(--space-md);
}

/* Tablet */
@media (min-width: 768px) {
  .brand-quote {
    font-size: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .brand-quote {
    font-size: 2rem;
    padding-left: var(--space-lg);
  }
}
```

---

## ♿ Accessibility

접근성 고려사항:

```tsx
// Semantic HTML 사용
<main role="main">
  <section aria-label="Hero section">
    <h1>제목</h1>
  </section>
</main>

// 의미 있는 alt text
<img src="logo.svg" alt="LazySaturday 로고" />

// 키보드 네비게이션 지원
<button tabIndex={0} aria-label="더 알아보기">
  Learn More
</button>
```

---

## 🛠 Development Workflow

### 1. 로컬 개발 서버 실행

```bash
npm run dev
```

### 2. 프로덕션 빌드

```bash
npm run build
npm run start
```

### 3. 코드 품질 체크

```bash
npm run lint
```

---

## 📚 Further Reading

- **Brand Guidelines**: 브랜딩 가이드 문서 참조
- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## 🤝 Contributing

새로운 컴포넌트나 스타일을 추가할 때:

1. 브랜드 가이드라인 준수
2. 재사용성 고려한 설계
3. TypeScript 타입 정의
4. 반응형 디자인 적용
5. 접근성 검토

---

**Last Updated**: 2025-10-10
**Maintainer**: LazySaturday Team
**Version**: 1.0.0
