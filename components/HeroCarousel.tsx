'use client';

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
    title: "Formação de Excelência",
    description: "Prepare-se para os desafios da educação moderna com nossa metodologia inovadora.",
    cta: "Conheça Nossos Cursos",
    link: "/cursos"
  },
  {
    image: "https://images.pexels.com/photos/3184461/pexels-photo-3184461.jpeg",
    title: "Metodologia Inovadora",
    description: "Aprenda com os melhores e desenvolva habilidades essenciais para o ensino.",
    cta: "Saiba Mais",
    link: "/sobre"
  },
  {
    image: "https://images.pexels.com/photos/3184462/pexels-photo-3184462.jpeg",
    title: "Futuro da Educação",
    description: "Transforme sua carreira e faça a diferença na vida dos seus alunos.",
    cta: "Comece Agora",
    link: "/contato"
  }
];

export function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} custom-bullet"></span>`;
        },
      }}
      navigation={true}
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="relative h-[80vh] w-full">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-900/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-title">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 animate-description">
                    {slide.description}
                  </p>
                  <Link href={slide.link}>
                    <Button 
                      size="lg" 
                      className="bg-white text-purple-900 hover:bg-white/90 transition-all duration-300 animate-cta"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
