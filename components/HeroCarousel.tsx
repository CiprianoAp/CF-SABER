'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PexelsImage } from './PexelsImage';

const slides = [
  {
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    title: 'Formando os Educadores do Futuro',
    description: 'O Curso de Agregação Pedagógica do FC-Saber é reconhecido pela excelência e inovação na formação de profissionais da educação.',
    cta: {
      primary: 'Inscreva-se Agora',
      secondary: 'Conheça o Programa'
    }
  },
  {
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    title: 'Metodologia Inovadora',
    description: 'Aprenda com os melhores profissionais e desenvolva habilidades essenciais para a educação moderna.',
    cta: {
      primary: 'Comece Hoje',
      secondary: 'Saiba Mais'
    }
  },
  {
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    title: 'Experiência Transformadora',
    description: 'Uma jornada de aprendizado que vai muito além da sala de aula.',
    cta: {
      primary: 'Faça Parte',
      secondary: 'Agende uma Visita'
    }
  }
];

export function HeroCarousel() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px é o breakpoint para tablets
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return null;

  // Versão mobile - mostra apenas o primeiro slide de forma estática
  if (isMobile) {
    const firstSlide = slides[0];
    return (
      <div className="relative w-full h-[100svh]">
        <PexelsImage
          src={firstSlide.image}
          alt={firstSlide.title}
          className="brightness-[0.65]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
                {firstSlide.title}
              </h2>
              <p className="text-base text-white mb-8 animate-fade-in animation-delay-200 max-w-3xl mx-auto">
                {firstSlide.description}
              </p>
              <div className="flex flex-col gap-4 animate-fade-in animation-delay-400">
                <Button 
                  variant="default" 
                  size="lg"
                  className="w-full bg-white text-black hover:bg-white/90 transition-all duration-300 
                           text-base px-6 py-5 rounded-full shadow-lg hover:shadow-xl 
                           hover:scale-105 font-medium"
                >
                  {firstSlide.cta.primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-2 border-white text-white hover:bg-white/10 
                           transition-all duration-300 text-base px-6 py-5 rounded-full 
                           shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm 
                           font-medium"
                >
                  {firstSlide.cta.secondary}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versão desktop - carrossel completo
  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        fadeEffect={{
          crossFade: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} relative w-12 h-1 bg-white/30 hover:bg-white/70 transition-all duration-300 rounded-full overflow-hidden">
              <span class="absolute inset-0 bg-white transform origin-left transition-transform duration-500 ${index === activeIndex ? 'scale-x-100' : 'scale-x-0'}"></span>
            </span>`;
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        className="w-full h-full [&_.swiper-slide]:z-10 [&_.swiper-slide-active]:z-20"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-screen">
            <PexelsImage
              src={slide.image}
              alt={slide.title}
              className="brightness-[0.65]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 slide-title">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white mb-10 opacity-0 slide-description max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 opacity-0 slide-cta justify-center">
                    <Button 
                      variant="default" 
                      size="lg"
                      className="bg-white text-black hover:bg-white/90 transition-all duration-300 
                               text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl 
                               hover:scale-105 font-medium"
                    >
                      {slide.cta.primary}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white/10 
                               transition-all duration-300 text-lg px-8 py-6 rounded-full 
                               shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm 
                               font-medium"
                    >
                      {slide.cta.secondary}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-white !w-14 !h-14 !bg-black/30 rounded-full 
                      backdrop-blur-sm transition-all duration-300 hover:!bg-black/50
                      after:!text-2xl hover:scale-110 !opacity-50 hover:!opacity-100"></div>
        <div className="swiper-button-next !text-white !w-14 !h-14 !bg-black/30 rounded-full 
                      backdrop-blur-sm transition-all duration-300 hover:!bg-black/50
                      after:!text-2xl hover:scale-110 !opacity-50 hover:!opacity-100"></div>
      </Swiper>
    </div>
  );
} 