"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Navigation, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Target, 
  Lightbulb, 
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  Play,
  ChevronRight,
  Eye
} from "lucide-react";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { YouTubeVideo } from '@/components/YouTubeVideo';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-screen">
        <HeroCarousel />
      </section>

      {/* Missão, Visão, Valores Section */}
      <section className="py-12 bg-purple-600 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-yellow-500 sm:text-4xl">
              Conheça o que nos guia.
            </h2>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white bg-yellow-500">
                    {/* Icon */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Missão</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-yellow-500">Formar educadores inovadores e comprometidos com a excelência no ensino.</dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white bg-yellow-500">
                    {/* Icon */}
                    <Eye className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Visão</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-yellow-500">Ser referência nacional em educação, reconhecida pela inovação e impacto social.</dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white bg-yellow-500">
                    {/* Icon */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Valores</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-yellow-500">Ética, compromisso, inovação, excelência e respeito à diversidade.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-yellow-500">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-white to-yellow-50/50" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-600 text-yellow-500 mb-4">
                <Play className="w-4 h-4 mr-2" />
                Metodologia Exclusiva
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-purple-600 text-transparent bg-clip-text">
              Conheça Nossa Metodologia
            </h2>
            <p className="text-lg md:text-xl text-purple-600  max-w-2xl mx-auto leading-relaxed">
              Descubra como nossa abordagem inovadora está transformando 
              a formação de educadores em todo o país.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <YouTubeVideo 
                videoId="oe823QDBUic"
                className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]"
              />
            </div>

            {/* Call to action below video */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Quer saber mais sobre nossa metodologia?
              </p>
              <Button 
                variant="outline"
                className="inline-flex items-center gap-2 text-purple-600  border-blue-200 hover:bg-blue-50 transition-all duration-300"
              >
                Agende uma Visita
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-sm sm:text-base text-gray-600">Taxa de Aprovação</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">2000+</p>
              <p className="text-sm sm:text-base text-gray-600">Alunos Formados</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-sm sm:text-base text-gray-600">Professores PhD</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">15</p>
              <p className="text-sm sm:text-base text-gray-600">Anos de Excelência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher o FC-Saber?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma formação completa e moderna, preparando profissionais 
              para os desafios da educação contemporânea.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Excelência Acadêmica",
                description: "Programa reconhecido internacionalmente pela qualidade do ensino."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Foco Prático",
                description: "Metodologia baseada em casos reais e experiências práticas."
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Inovação Pedagógica",
                description: "Abordagem moderna integrando tecnologia e métodos tradicionais."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Comece Sua Jornada Hoje</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transforme-se em um educador de excelência com o FC-Saber.
          </p>
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-blue-600">
            Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-xl text-gray-600">
              Visite-nos e conheça nossa estrutura moderna e acolhedora
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                  <p className="text-gray-600">Avenida Samora Machel, Município de Talatona, Luanda-Angola</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 9:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contato</h3>
                  <p className="text-gray-600">+244 936321139</p>
                  <p className="text-gray-600">infor-cfsaber@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.550685515454!2d-9.1500887!3d38.7436266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ0JzM3LjEiTiA5wrAwOScwMC4zIlc!5e0!3m2!1spt-PT!2spt!4v1650000000000!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
