'use client';

import Image from 'next/image';

interface PexelsImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function PexelsImage({ src, alt, className = '' }: PexelsImageProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover pexels-image"
        sizes="100vw"
        quality={90}
      />
      <a 
        href="https://www.pexels.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded z-10"
      >
        Photo from Pexels
      </a>
    </div>
  );
} 