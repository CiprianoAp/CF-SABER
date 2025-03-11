import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { PexelsImage } from './PexelsImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const images = [
  {
    src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    alt: "People working together in a modern office"
  },
  {
    src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    alt: "Students in a classroom"
  },
  {
    src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    alt: "Team collaboration meeting"
  },
  {
    src: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
    alt: "Professional development session"
  }
];

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/50 z-[1]" />
              <PexelsImage
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 