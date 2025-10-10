/**
 * LazySaturday Brand Constants
 * Based on Brand Identity Guidelines
 */

export const BRAND = {
  name: 'LazySaturday',
  tagline: 'Make small. Ship fast. Live slow.',
  description: '아이디어를 빠르게 실현하는 개발 플랫폼',
  mission: '작게 만들고, 빠르게 출시하고, 여유롭게 살아가다',
  keywords: ['AI', 'MVP', '빠른개발', '자동화', '개발자', 'BuildOnce', 'EarnForever'],
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
  subtitle: '더 빠르게 만들고, 더 여유롭게 살다',
  description: '아이디어를 빠르게 실제 서비스로 만들고, 지속 가능하게 운영하는 플랫폼.',
  points: [
    {
      icon: '🚀',
      title: 'Fast Execution',
      description: 'AI와 자동화를 활용해 아이디어를 빠르게 실제 서비스로 구현합니다.',
    },
    {
      icon: '🎯',
      title: 'Build to Last',
      description: '처음부터 지속 가능한 서비스를 목표로 설계하고 개발합니다.',
    },
    {
      icon: '📈',
      title: 'Smart Scaling',
      description: '작게 시작해 빠르게 검증하고, 가치 있는 서비스는 자연스럽게 성장합니다.',
    },
    {
      icon: '⚡',
      title: 'Build Once, Run Forever',
      description: '한 번 잘 만들면 자동으로 운영되는 시스템을 추구합니다.',
    },
  ],
} as const;

export const PHILOSOPHY = [
  {
    number: '01',
    title: 'Ship Fast, Learn Faster',
    description: '완벽함보다 실행. 빠르게 만들어 실제 반응을 확인하고 개선합니다.',
  },
  {
    number: '02',
    title: 'Build for Real Use',
    description: '내가 정말 필요한 것을 만듭니다. 진짜 문제를 해결하는 서비스는 자연스럽게 가치를 만듭니다.',
  },
  {
    number: '03',
    title: 'Start Small, Grow Smart',
    description: '작고 단순하게 시작해서, 검증된 방향으로 성장합니다.',
  },
  {
    number: '04',
    title: 'Automate Everything',
    description: '반복되는 모든 것을 자동화하여, 창의적인 일에 집중합니다.',
  },
] as const;

export const MANIFESTO = {
  title: 'Mission Statement',
  quote: '"아이디어는 많지만, 실행은 느리다."',
  content: [
    '만들고 싶은 것은 넘쳐나는데, 하나를 완성하는데 너무 오래 걸렸습니다.',
    '기획하고, 개발하고, 배포하고, 운영하고... 혼자 하기엔 벅찼습니다.',
    '그래서 플랫폼을 만들었습니다. 빠르게 실행할 수 있는.',
  ],
  vision: [
    'AI와 자동화로 반복 작업을 줄였습니다.',
    '이제 아이디어를 빠르게 실제 서비스로 만들고, 실험하고, 개선합니다.',
    '작은 시도들이 모여 의미 있는 결과를 만듭니다.',
  ],
  closing: 'LazySaturday는 개발자가 더 많은 것을 시도할 수 있도록 돕습니다. 빠른 실행과 지속 가능한 운영, 그리고 여유로운 삶. 이 세 가지를 함께 추구합니다.',
} as const;

export const JOURNEY = {
  title: 'The Journey',
  stages: [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      description: '빠른 개발을 위한 플랫폼 구축 - 아이디어를 실제 서비스로 빠르게 전환',
      status: 'current',
    },
    {
      phase: 'Phase 2',
      title: 'Multiple Services',
      description: '다양한 서비스 실험과 운영 - 작은 시도들을 통한 학습과 성장',
      status: 'planned',
    },
    {
      phase: 'Phase 3',
      title: 'Sustainable Growth',
      description: '가치 있는 서비스에 집중하고, 지속 가능하게 확장',
      status: 'vision',
    },
  ],
} as const;

export const STATS = [
  {
    number: '2일',
    label: 'Per Service',
    description: '하나의 서비스 개발 주기',
  },
  {
    number: '24/7',
    label: 'Automated',
    description: '자동화된 배포 및 운영',
  },
  {
    number: '∞',
    label: 'Revenue Streams',
    description: '무한한 수익 채널 가능성',
  },
  {
    number: '10+',
    label: 'Services/Month',
    description: '한 달에 런칭 가능한 서비스',
  },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/lazysaturday',
  twitter: 'https://twitter.com/lazysaturday',
  blog: 'https://blog.lazysaturday.online',
} as const;
