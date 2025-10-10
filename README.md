# LazySaturday Demo Site

> **Make small. Ship fast. Live slow.**
> 자동화로 주말을 되찾는 개발자의 브랜드 웹사이트

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

---

## 🎯 프로젝트 개요

LazySaturday의 브랜드 아이덴티티를 표현하는 홈페이지입니다.
완벽함보다 반복을, 속도보다 지속을 선택하는 개발자의 철학을 담았습니다.

### 핵심 특징

- ✨ **브랜드 중심 디자인**: 브랜딩 가이드라인 기반의 일관된 디자인 시스템
- 🧩 **모듈화된 구조**: 재사용 가능한 컴포넌트와 분리된 CSS 모듈
- 📱 **반응형 디자인**: 모바일부터 데스크톱까지 완벽 지원
- ⚡ **최적화된 성능**: Next.js 15 + Turbopack으로 빠른 빌드
- ♿ **접근성 고려**: 시맨틱 HTML과 ARIA 속성 적용
- 🎨 **애니메이션**: 브랜드 철학을 표현하는 부드러운 모션

---

## 🚀 시작하기

### 필수 요구사항

- Node.js 20.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 검사
npm run lint
```

---

## 📁 프로젝트 구조

```
lazy-demo/
├── app/
│   ├── components/          # 재사용 가능한 UI 컴포넌트
│   │   ├── BackgroundEffects.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PhilosophySection.tsx
│   │   ├── ManifestoSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── QuoteSection.tsx
│   │   └── Footer.tsx
│   ├── constants/          # 브랜드 상수 및 데이터
│   │   └── brand.ts
│   ├── styles/            # 모듈화된 CSS 시스템
│   │   ├── variables.css
│   │   ├── animations.css
│   │   ├── typography.css
│   │   ├── backgrounds.css
│   │   └── components.css
│   ├── types/             # TypeScript 타입 정의
│   │   └── index.ts
│   ├── globals.css        # 전역 스타일 (모듈 import)
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── public/                # 정적 파일 (이미지, 폰트 등)
├── DESIGN_SYSTEM.md       # 디자인 시스템 문서
└── README.md              # 프로젝트 문서
```

---

## 🎨 디자인 시스템

프로젝트는 체계적인 디자인 시스템을 기반으로 구축되었습니다.

### 색상 팔레트

| 색상 | Hex | 용도 |
|------|-----|------|
| Primary | `#1a1a1a` | 규율, 집중, 깊이 |
| Accent | `#00c896` | 생존, 성장, 지속성 |
| Highlight | `#ffd45e` | 창의의 순간 |
| Background | `#f5f5f4` | 반복되는 일상 |

### 타이포그래피

- **Logo/Headline**: Space Grotesk (Bold, 600, 700)
- **Body**: Inter (300, 400, 500, 600)
- **Code**: JetBrains Mono (400, 500)

### 간격 시스템

8px 기반 일관된 간격:
- `--space-xs`: 8px
- `--space-sm`: 16px
- `--space-md`: 24px
- `--space-lg`: 32px
- `--space-xl`: 48px

자세한 내용은 [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)를 참조하세요.

---

## 🧩 컴포넌트

### 메인 섹션

| 컴포넌트 | 설명 |
|----------|------|
| `HeroSection` | 브랜드 첫인상, 핵심 메시지 |
| `PhilosophySection` | 4가지 철학적 기둥 |
| `ManifestoSection` | 브랜드 선언문 |
| `StatsSection` | 핵심 지표 표시 |
| `QuoteSection` | 인용구와 원칙 카드 |
| `Footer` | 링크와 브랜드 정보 |

### 배경 효과

| 컴포넌트 | 설명 |
|----------|------|
| `GridBackground` | 구조와 루틴을 상징하는 그리드 |
| `LoopLines` | 반복을 표현하는 흐르는 선 |
| `FloatingDots` | 시스템 리듬을 나타내는 점 |
| `RoutineRings` | 지속적인 루프 상징 |

---

## 🛠 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Build Tool**: [Turbopack](https://turbo.build/pack)
- **Font Loading**: Next.js Font Optimization

---

## 📝 개발 가이드

### 새로운 섹션 추가하기

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
    </main>
  );
}
```

### 브랜드 데이터 수정하기

```typescript
// constants/brand.ts
export const PHILOSOPHY = [
  {
    number: '05',
    title: 'New Philosophy',
    description: '새로운 철학 설명',
  },
  // ...기존 데이터
];
```

### 커스텀 스타일 추가하기

```css
/* styles/components.css */
.custom-component {
  background: var(--accent);
  padding: var(--space-md);
  transition: all var(--transition-base);
}
```

---

## 🎯 브랜드 철학

### 4가지 기둥

1. **System over Hustle** - 바쁨보다 구조가 중요하다
2. **Small is Sustainable** - 작을수록 오래 간다
3. **Automation is Art** - 자동화는 철학이다
4. **Freedom by Routine** - 자유는 반복에서 온다

### 핵심 키워드

`#BuildOnce` `#EarnForever` `#SurviveBySystem` `#AI` `#Automation`

---

## 📚 참고 문서

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - 디자인 시스템 상세 문서
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

## 🤝 Contributing

1. 브랜드 가이드라인 준수
2. 재사용성을 고려한 컴포넌트 설계
3. TypeScript 타입 정의 필수
4. 반응형 디자인 적용
5. 접근성 고려

---

## 📄 License

© 2025 LazySaturday. Build once. Earn forever.

---

## 🔗 Links

- **Website**: [lazysaturday.online](https://lazysaturday.online)
- **GitHub**: [@lazysaturday](https://github.com/lazysaturday)
- **Twitter**: [@lazysaturday](https://twitter.com/lazysaturday)

---

**Built with ❤️ by LazySaturday**
