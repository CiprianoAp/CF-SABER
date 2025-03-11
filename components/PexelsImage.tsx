import Image from 'next/image';

interface PexelsImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function PexelsImage({ src, alt, width, height, className }: PexelsImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
      />
      <a 
        href="https://www.pexels.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded"
      >
        Photo from Pexels
      </a>
    </div>
  );
} 