'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const partners = [
  {
    name: 'Universidade Agostinho Neto',
    logo: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg',
    description: 'Parceiro estratégico na formação acadêmica'
  },
  {
    name: 'Ministério da Educação',
    logo: 'https://images.pexels.com/photos/3184462/pexels-photo-3184462.jpeg',
    description: 'Apoio institucional e reconhecimento'
  },
  {
    name: 'Instituto Nacional de Formação de Quadros',
    logo: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg',
    description: 'Desenvolvimento profissional contínuo'
  },
  {
    name: 'Associação Nacional de Professores',
    logo: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg',
    description: 'Rede de profissionais da educação'
  }
];

export function PartnersCarousel() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nossos Parceiros</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Trabalhamos com as melhores instituições para garantir a excelência na formação
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="partners-swiper"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden h-[300px] transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                  <div className="relative h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-cover brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                      <p className="text-white/80 text-sm">{partner.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-white !w-12 !h-12 !bg-white/10 rounded-full 
                        backdrop-blur-sm transition-all duration-300 hover:!bg-white/20
                        after:!text-xl hover:scale-110 !opacity-50 hover:!opacity-100 !left-0"></div>
          <div className="swiper-button-next !text-white !w-12 !h-12 !bg-white/10 rounded-full 
                        backdrop-blur-sm transition-all duration-300 hover:!bg-white/20
                        after:!text-xl hover:scale-110 !opacity-50 hover:!opacity-100 !right-0"></div>
        </div>
      </div>
    </section>
  );
}
