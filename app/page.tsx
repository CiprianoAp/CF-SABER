"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Eye,
  Star,
  Trophy,
  BookMarked,
  Heart,
  ArrowUp
} from "lucide-react";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { YouTubeVideo } from '@/components/YouTubeVideo';
import { InfiniteCarousel } from '@/components/InfiniteCarousel';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CourseDrawer } from "@/components/CourseDrawer";

interface Course {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  students: string;
  startDate: string;
  instructor: string;
  price: string;
  objectives: string[];
  requirements: string[];
}

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: <GraduationCap className="w-6 h-6" />, value: "1000+", label: "Alunos Formados" },
    { icon: <BookOpen className="w-6 h-6" />, value: "50+", label: "Cursos Disponíveis" },
    { icon: <Users className="w-6 h-6" />, value: "30+", label: "Professores" },
    { icon: <Award className="w-6 h-6" />, value: "95%", label: "Taxa de Aprovação" },
  ];

  const courses = [
    {
      title: "Agregação Pedagógica",
      description: "Formação completa para docentes que desejam lecionar no ensino superior",
      image: "/images/courses/course-1.jpg",
      duration: "6 meses",
      level: "Avançado",
      students: "250+",
      startDate: "15 de Março, 2024",
      instructor: "Dr. Manuel Silva",
      price: "150.000 Kz",
      objectives: [
        "Desenvolver competências pedagógicas avançadas",
        "Dominar metodologias de ensino superior",
        "Aprender técnicas de avaliação moderna",
        "Criar planos de aula efetivos"
      ],
      requirements: [
        "Licenciatura concluída",
        "Experiência prévia em docência (desejável)",
        "Disponibilidade para aulas presenciais",
        "Computador com acesso à internet"
      ]
    },
    {
      title: "Metodologias Ativas",
      description: "Aprenda técnicas modernas de ensino e aprendizagem para engajar seus alunos",
      image: "/images/courses/course-2.jpg",
      duration: "3 meses",
      level: "Intermediário",
      students: "180+",
      startDate: "1 de Abril, 2024",
      instructor: "Profa. Ana Santos",
      price: "75.000 Kz",
      objectives: [
        "Implementar metodologias ativas em sala",
        "Criar experiências de aprendizado envolventes",
        "Utilizar tecnologias educacionais",
        "Desenvolver projetos práticos"
      ],
      requirements: [
        "Formação em educação",
        "Conhecimentos básicos de informática",
        "Interesse em inovação pedagógica",
        "Disponibilidade para práticas"
      ]
    },
    {
      title: "Tecnologias Educacionais",
      description: "Domine as ferramentas digitais para transformar sua prática pedagógica",
      image: "/images/courses/course-3.jpg",
      duration: "4 meses",
      level: "Intermediário",
      students: "200+",
      startDate: "10 de Abril, 2024",
      instructor: "Prof. João Costa",
      price: "85.000 Kz",
      objectives: [
        "Dominar ferramentas digitais educacionais",
        "Criar conteúdo digital interativo",
        "Gerenciar ambientes virtuais de aprendizagem",
        "Implementar avaliações online"
      ],
      requirements: [
        "Conhecimentos básicos de informática",
        "Acesso a computador e internet",
        "Interesse em tecnologia",
        "Disponibilidade para práticas online"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-yellow-900/95 z-10" />
        <Image
          src="/images/hero-bg.jpg"
          alt="Ambiente educacional moderno"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transforme seu Futuro com Educação de Qualidade
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Desenvolva suas habilidades pedagógicas e alcance novos patamares em sua carreira docente com nossos cursos especializados.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Começar Agora
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Conhecer Cursos
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-600 font-semibold mb-2 block">NOSSOS CURSOS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
              Cursos em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore nossos cursos cuidadosamente desenvolvidos para impulsionar sua carreira na educação.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-purple-600" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-purple-600" />
                        {course.students}
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <Button 
                    onClick={() => setSelectedCourse(course)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Ver Detalhes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {selectedCourse && (
          <CourseDrawer
            isOpen={!!selectedCourse}
            onClose={() => setSelectedCourse(null)}
            course={selectedCourse}
          />
        )}
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-yellow-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Escolher o CF-Saber?</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Oferecemos uma experiência de aprendizado única e transformadora.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professores Especializados",
                description: "Nossa equipe é formada por profissionais com vasta experiência acadêmica."
              },
              {
                title: "Metodologia Inovadora",
                description: "Combinamos teoria e prática em uma abordagem moderna e eficiente."
              },
              {
                title: "Certificação Reconhecida",
                description: "Nossos certificados são reconhecidos e valorizados no mercado."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Quem Somos</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              O CF-Saber é um centro de formação pedagógica de excelência, dedicado a formar profissionais 
              da educação com as competências necessárias para enfrentar os desafios do século XXI. 
              Com uma abordagem inovadora e corpo docente altamente qualificado, preparamos educadores 
              que farão a diferença na sociedade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/about-us.jpg"
                alt="Sobre o CF-Saber"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent" />
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/about/history.jpg"
                      alt="Nossa História"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Nossa História</h3>
                    <p className="text-gray-600">
                      Fundado em 2025, o CF-Saber nasceu da visão de transformar a educação em Angola 
                      através da formação de professores excepcionais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/about/team.jpg"
                      alt="Nossa Equipe"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Nossa Equipe</h3>
                    <p className="text-gray-600">
                      Contamos com profissionais altamente qualificados e comprometidos com a 
                      excelência no ensino e na formação de educadores.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/about/structure.jpg"
                      alt="Nossa Estrutura"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Nossa Estrutura</h3>
                    <p className="text-gray-600">
                      Instalações modernas e ambiente propício ao aprendizado, com recursos 
                      tecnológicos de ponta.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Identidade</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Conheça os pilares que fundamentam nossa instituição e guiam nossas ações.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-gray-200">
                Formar educadores inovadores e comprometidos com a excelência no ensino, 
                preparando-os para os desafios da educação moderna através de uma formação 
                integral e transformadora.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-gray-200">
                Ser referência nacional em formação pedagógica até 2030, reconhecida pela 
                inovação, qualidade e impacto social na educação angolana, formando 
                educadores que transformam vidas.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <ul className="text-gray-200 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  Excelência Acadêmica
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  Inovação Pedagógica
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  Compromisso Social
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  Ética e Transparência
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  Respeito à Diversidade
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  Desenvolvimento Contínuo
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar sua Jornada?
            </h2>
            <p className="text-gray-600 mb-8">
              Inscreva-se agora e dê o primeiro passo em direção ao seu desenvolvimento profissional.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Inscreva-se Agora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-32 right-8 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.5,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={scrollToTop}
          size="lg"
          className="rounded-full w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ArrowUp className="w-8 h-8 group-hover:-translate-y-1 transition-transform duration-300" />
        </Button>
      </motion.div>

    </main>
  );
}
