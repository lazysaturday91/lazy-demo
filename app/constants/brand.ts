/**
 * LazySaturday Brand Constants
 * Based on Brand Identity Guidelines
 */

export const BRAND = {
  name: 'LazySaturday',
  tagline: 'Make small. Ship fast. Live slow.',
  description: 'AI로 자동화하는 개발자의 주말',
  mission: '개발자 모두가 주말을 온전히 즐길 수 있도록',
  keywords: ['AI', '자동화', '생산성', '개발자도구', '주말', 'BuildOnce', 'EarnForever'],
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

export const VISION = {
  title: 'Our Vision',
  subtitle: 'AI 기반 자동화로 개발자의 시간을 되찾다',
  description: '나 혼자만의 자유가 아닌, 모든 개발자가 주말을 즐길 수 있는 세상을 만듭니다.',
  points: [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'AI를 활용한 지능형 자동화 도구로 반복 작업을 제거합니다.',
    },
    {
      icon: '⚡',
      title: 'Developer Productivity',
      description: '개발자의 생산성을 극대화하는 실용적인 서비스를 만듭니다.',
    },
    {
      icon: '🌍',
      title: 'For All Developers',
      description: '나만의 도구에서 시작해, 모든 개발자를 위한 플랫폼으로 성장합니다.',
    },
    {
      icon: '🎯',
      title: 'Weekend Freedom',
      description: '주말엔 코드 대신 삶을 즐기는 개발자 문화를 만듭니다.',
    },
  ],
} as const;

export const PHILOSOPHY = [
  {
    number: '01',
    title: 'AI as Your Assistant',
    description: 'AI는 단순한 도구가 아닌, 당신의 24시간 개발 파트너입니다.',
  },
  {
    number: '02',
    title: 'Build for Yourself First',
    description: '내가 필요한 것을 먼저 만들어라. 진짜 문제는 거기서 시작됩니다.',
  },
  {
    number: '03',
    title: 'Share to Scale',
    description: '혼자 쓰던 도구를 공유하면, 그것이 서비스가 됩니다.',
  },
  {
    number: '04',
    title: 'Automate Everything',
    description: '반복되는 모든 것은 자동화 대상입니다. 시간은 당신의 자산입니다.',
  },
] as const;

export const MANIFESTO = {
  title: 'Mission Statement',
  quote: '"주말은 개발자의 것이어야 합니다."',
  content: [
    '저는 매주 주말을 반납하며 살았습니다.',
    '배포 스크립트, 모니터링, 긴급 패치...',
    '이제는 AI가 대신합니다.',
  ],
  vision: [
    '내가 만든 자동화 도구로 내 주말을 되찾았습니다.',
    '이제 이 도구들을 다른 개발자들과 나눕니다.',
    '모두가 토요일 오후를 카페에서 보낼 수 있도록.',
  ],
  closing: 'LazySaturday는 단순한 브랜드가 아닙니다. AI 자동화를 통해 개발자의 삶을 바꾸는 움직임입니다. 나 혼자만의 자유가 아닌, 우리 모두의 주말을 위하여.',
} as const;

export const JOURNEY = {
  title: 'The Journey',
  stages: [
    {
      phase: 'Phase 1',
      title: 'Personal Tools',
      description: '내 주말을 위한 AI 자동화 도구 제작',
      status: 'current',
    },
    {
      phase: 'Phase 2',
      title: 'Open Source',
      description: '유용한 도구들을 오픈소스로 공개',
      status: 'planned',
    },
    {
      phase: 'Phase 3',
      title: 'SaaS Platform',
      description: '누구나 사용할 수 있는 서비스화',
      status: 'planned',
    },
    {
      phase: 'Phase 4',
      title: 'Developer Community',
      description: '자유로운 주말을 즐기는 개발자 커뮤니티',
      status: 'vision',
    },
  ],
} as const;

export const STATS = [
  {
    number: '100+',
    label: 'Hours Saved',
    description: '자동화로 절약한 시간',
  },
  {
    number: '24/7',
    label: 'AI Working',
    description: '쉬지 않는 AI 어시스턴트',
  },
  {
    number: '∞',
    label: 'Possibilities',
    description: '무한한 자동화 가능성',
  },
  {
    number: '1',
    label: 'Saturday',
    description: '온전한 주말 하루',
  },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/lazysaturday',
  twitter: 'https://twitter.com/lazysaturday',
  blog: 'https://blog.lazysaturday.online',
} as const;
