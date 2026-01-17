import { getPermalink, getAsset } from './utils/permalinks';
import type { HeaderData, FooterData } from '~/types';

export const headerData: HeaderData = {
  links: [
    {
      text: 'Trang chủ',
      href: getPermalink('/'),
    },
    {
      text: 'Tính năng',
      href: getPermalink('/#features'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
    {
      text: 'Về chúng tôi',
      href: getPermalink('/about'),
    },
  ],
  actions: [
    { text: 'EN', href: getPermalink('/en'), target: '_self', variant: 'link' },
    { text: 'Tải xuống', href: '#download', icon: 'tabler:download' },
  ],
};

export const headerDataEn: HeaderData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/en'),
    },
    {
      text: 'Features',
      href: getPermalink('/en#features'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [
    { text: 'VI', href: getPermalink('/'), target: '_self', variant: 'link' },
    { text: 'Download', href: '#download', icon: 'tabler:download' },
  ],
};

export const footerData: FooterData = {
  links: [
    {
      title: 'Sản phẩm',
      links: [
        { text: 'Tính năng', href: getPermalink('/#features') },
        { text: 'Bảo mật', href: getPermalink('/#privacy') },
        { text: 'Nexo Hub', href: getPermalink('/#hub') },
        { text: 'Tải xuống', href: '#download' },
      ],
    },
    {
      title: 'Nền tảng hỗ trợ',
      links: [
        { text: 'macOS', href: '#download' },
        { text: 'Windows', href: '#download' },
        { text: 'Linux', href: '#download' },
      ],
    },
    {
      title: 'Tài nguyên',
      links: [
        { text: 'Tài liệu hướng dẫn', href: '#' },
        { text: 'Cộng đồng', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Pháp lý',
      links: [
        { text: 'Điều khoản sử dụng', href: '#' },
        { text: 'Chính sách bảo mật', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2025 Nexo Project · All rights reserved.
  `,
};

export const footerDataEn: FooterData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/en#features') },
        { text: 'Privacy', href: getPermalink('/en#privacy') },
        { text: 'Nexo Hub', href: getPermalink('/en#hub') },
        { text: 'Download', href: '#download' },
      ],
    },
    {
      title: 'Supported Platforms',
      links: [
        { text: 'macOS', href: '#download' },
        { text: 'Windows', href: '#download' },
        { text: 'Linux', href: '#download' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Community', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Use', href: '#' },
        { text: 'Privacy Policy', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2025 Nexo Project · All rights reserved.
  `,
};
