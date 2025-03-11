'use client';

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  variant?: 'default' | 'white';
}

export function SocialIcons({ className = '', iconSize = 20, variant = 'default' }: SocialIconsProps) {
  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://facebook.com/fcsaber',
      label: 'Facebook',
      hoverColor: 'hover:text-[#1877F2]'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/fcsaber',
      label: 'Instagram',
      hoverColor: 'hover:text-[#E4405F]'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/fcsaber',
      label: 'LinkedIn',
      hoverColor: 'hover:text-[#0A66C2]'
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@fcsaber',
      label: 'YouTube',
      hoverColor: 'hover:text-[#FF0000]'
    }
  ];

  const baseClasses = variant === 'white' 
    ? 'text-gray-400 hover:text-white' 
    : 'text-gray-600 hover:text-gray-900';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors duration-200 ${variant === 'default' ? social.hoverColor : baseClasses}`}
          aria-label={social.label}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
} 