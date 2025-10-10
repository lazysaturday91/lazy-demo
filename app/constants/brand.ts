/**
 * LazySaturday Brand Constants
 * Based on Brand Identity Guidelines
 */

export const BRAND = {
  name: 'LazySaturday',
  tagline: 'Make small. Ship fast. Live slow.',
  description: '자동화로 주말을 되찾는 개발자',
  keywords: ['개발자', '자동화', '생산성', '시스템', '루틴', 'BuildOnce', 'EarnForever'],
} as const;

export const COLORS = {
  primary: '#1a1a1a',
  accent: '#00c896',
  background: '#f5f5f4',
  highlight: '#ffd45e',
  neutral: '#5f5f5f',
  white: '#ffffff',
  midnight: {
    dark: '#0a0f1e',
    blue: '#1a2740',
    lighter: '#2a3546',
    dawn: '#344155',
    morning: '#4a5568',
    lightSlate: '#64748b',
  },
} as const;

export const FONTS = {
  logo: "'Space Grotesk', sans-serif",
  headline: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  code: "'JetBrains Mono', monospace",
} as const;

export const PHILOSOPHY = [
  {
    number: '01',
    title: 'System over Hustle',
    description: '바쁨보다 구조가 중요하다. 루틴이 의지를 이긴다.',
  },
  {
    number: '02',
    title: 'Small is Sustainable',
    description: '작을수록 오래 간다. 거대한 목표보다 작은 루프.',
  },
  {
    number: '03',
    title: 'Automation is Art',
    description: '자동화는 게으름이 아니라 철학이다.',
  },
  {
    number: '04',
    title: 'Freedom by Routine',
    description: '자유는 반복에서 온다. 반복이 시스템을 만든다.',
  },
] as const;

export const MANIFESTO = {
  title: 'Brand Manifesto',
  quote: '"나는 게으른 토요일을 위해 일한다."',
  content: [
    '작은 시스템 하나가 나의 하루를 바꾼다.',
    '꾸준히 만들고, 자동화하며, 천천히 살아간다.',
    '그게 나의 LazySaturday다.',
  ],
  closing: 'LazySaturday는 개발자의 실험정신과 인간적인 여유가 공존하는 브랜드다. 나는 완벽한 것을 만들지 않는다. 대신, 꾸준히 만들어 남긴다. 그 꾸준함이 곧 나의 브랜딩이자 생존 방식이다.',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/lazysaturday',
  twitter: 'https://twitter.com/lazysaturday',
  blog: 'https://blog.lazysaturday.online',
} as const;
