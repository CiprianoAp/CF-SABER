'use client';

interface YouTubeVideoProps {
  videoId: string;
  className?: string;
}

export function YouTubeVideo({ videoId, className = '' }: YouTubeVideoProps) {
  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-xl ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
} 