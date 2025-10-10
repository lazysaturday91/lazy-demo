/**
 * Type definitions for LazySaturday project
 */

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

export interface BrandColors {
  primary: string;
  accent: string;
  background: string;
  highlight: string;
  neutral: string;
  white: string;
  midnight: {
    dark: string;
    blue: string;
    lighter: string;
    dawn: string;
    morning: string;
    lightSlate: string;
  };
}

export interface SocialLinks {
  github?: string;
  twitter?: string;
  blog?: string;
  linkedin?: string;
}
