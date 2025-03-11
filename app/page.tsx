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
  Phone
} from "lucide-react";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main>
      {/* Hero Section with Carousel Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroCarousel />
        <div className="relative z-[2] text-center text-white px-4 max-w-5xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Formando os Educadores do Futuro
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            O Curso de Agregação Pedagógica do FC-Saber é reconhecido pela excelência 
            e inovação na formação de profissionais da educação.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Inscreva-se Agora
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white hover:bg-gray-100">
              Conheça o Programa
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-gray-600">Taxa de Aprovação</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">2000+</p>
              <p className="text-gray-600">Alunos Formados</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-gray-600">Professores PhD</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">15</p>
              <p className="text-gray-600">Anos de Excelência</p>
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
                  <p className="text-gray-600">Av. Principal, 1000 - Lisboa, Portugal</p>
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
                  <p className="text-gray-600">+351 123 456 789</p>
                  <p className="text-gray-600">contato@fc-saber.pt</p>
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