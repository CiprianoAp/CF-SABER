'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  ChevronLeft, 
  ChevronRight,
  GraduationCap,
  BookOpen,
  Baby,
  Lightbulb,
  Brain,
  Users,
  Clock,
  Calendar,
  Users2,
  Award
} from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  icon: React.ReactNode;
  details: {
    duration: string;
    startDate: string;
    vacancies: string;
    level: string;
    fullDescription: string;
    objectives: string[];
    requirements: string[];
    videoUrl: string;
    videoThumbnail: string;
  };
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: "Agregação Pedagógica",
    description: "Formação completa para docentes que desejam lecionar no ensino superior",
    image: "/images/courses/agregacao.jpg",
    link: "/cursos/agregacao-pedagogica",
    icon: <GraduationCap className="w-8 h-8" />,
    details: {
      duration: "18 meses",
      startDate: "15 de Março de 2024",
      vacancies: "30 vagas",
      level: "Pós-Graduação",
      fullDescription: "O curso de Agregação Pedagógica é uma formação especializada que prepara profissionais para atuar como docentes no ensino superior. Durante o programa, os participantes desenvolvem competências pedagógicas avançadas, metodologias de ensino e pesquisa, além de aprofundarem seus conhecimentos em suas áreas específicas.",
      objectives: [
        "Desenvolver competências pedagógicas avançadas",
        "Aprofundar conhecimentos na área específica",
        "Preparar para carreira acadêmica",
        "Desenvolver habilidades de pesquisa"
      ],
      requirements: [
        "Mestrado na área de atuação",
        "Experiência docente mínima de 2 anos",
        "Disponibilidade para dedicação exclusiva"
      ],
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
      videoThumbnail: "/images/courses/video-thumbnails/agregacao.jpg"
    }
  },
  {
    id: 2,
    title: "Formação Pedagógica",
    description: "Prepare-se para uma carreira de sucesso na educação",
    image: "/images/courses/formacao.jpg",
    link: "/cursos/formacao-pedagogica",
    icon: <BookOpen className="w-8 h-8" />,
    details: {
      duration: "12 meses",
      startDate: "1 de Abril de 2024",
      vacancies: "40 vagas",
      level: "Graduação",
      fullDescription: "A Formação Pedagógica é um programa completo que prepara profissionais para atuar na educação básica. O curso oferece uma base sólida em teorias educacionais, metodologias de ensino e práticas pedagógicas contemporâneas.",
      objectives: [
        "Compreender fundamentos da educação",
        "Desenvolver práticas pedagógicas",
        "Aplicar metodologias ativas",
        "Preparar para gestão escolar"
      ],
      requirements: [
        "Graduação em qualquer área",
        "Dedicação de 20h semanais",
        "Computador com acesso à internet"
      ],
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
      videoThumbnail: "/images/courses/video-thumbnails/formacao.jpg"
    }
  },
  {
    id: 3,
    title: "Especialização em Educação Infantil",
    description: "Desenvolva habilidades específicas para educação infantil",
    image: "/images/courses/infantil.jpg",
    link: "/cursos/especializacao-educacao-infantil",
    icon: <Baby className="w-8 h-8" />,
    details: {
      duration: "15 meses",
      startDate: "10 de Abril de 2024",
      vacancies: "35 vagas",
      level: "Especialização",
      fullDescription: "A especialização em Educação Infantil é um programa completo que prepara profissionais para atuar com crianças de 0 a 6 anos. O curso aborda aspectos fundamentais do desenvolvimento infantil, metodologias específicas e práticas pedagógicas adequadas à primeira infância.",
      objectives: [
        "Compreender desenvolvimento infantil",
        "Aplicar metodologias específicas",
        "Desenvolver práticas lúdicas",
        "Preparar ambiente educativo"
      ],
      requirements: [
        "Graduação em Pedagogia ou áreas afins",
        "Experiência com educação infantil",
        "Disponibilidade para estágios"
      ],
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
      videoThumbnail: "/images/courses/video-thumbnails/infantil.jpg"
    }
  },
  {
    id: 4,
    title: "Metodologias Ativas",
    description: "Aprenda técnicas modernas de ensino e aprendizagem",
    image: "/images/courses/metodologias.jpg",
    link: "/cursos/metodologias-ativas",
    icon: <Lightbulb className="w-8 h-8" />,
    details: {
      duration: "6 meses",
      startDate: "20 de Abril de 2024",
      vacancies: "50 vagas",
      level: "Extensão",
      fullDescription: "O curso de Metodologias Ativas oferece uma formação prática em técnicas modernas de ensino. Os participantes aprendem a implementar metodologias inovadoras que promovem a participação ativa dos alunos e melhoram os resultados de aprendizagem.",
      objectives: [
        "Dominar metodologias ativas",
        "Implementar práticas inovadoras",
        "Desenvolver projetos pedagógicos",
        "Avaliar resultados de aprendizagem"
      ],
      requirements: [
        "Formação em educação",
        "Acesso a recursos tecnológicos",
        "Disponibilidade para práticas"
      ],
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
      videoThumbnail: "/images/courses/video-thumbnails/metodologias.jpg"
    }
  },
  {
    id: 5,
    title: "Neurociência na Educação",
    description: "Compreenda como o cérebro aprende e melhore suas práticas pedagógicas",
    image: "/images/courses/neurociencia.jpg",
    link: "/cursos/neurociencia-educacao",
    icon: <Brain className="w-8 h-8" />,
    details: {
      duration: "9 meses",
      startDate: "5 de Maio de 2024",
      vacancies: "45 vagas",
      level: "Especialização",
      fullDescription: "A especialização em Neurociência na Educação combina conhecimentos sobre o funcionamento do cérebro com práticas pedagógicas. O curso permite que educadores compreendam melhor o processo de aprendizagem e desenvolvam estratégias mais eficazes.",
      objectives: [
        "Compreender processos cognitivos",
        "Aplicar estratégias neuropedagógicas",
        "Desenvolver práticas inclusivas",
        "Otimizar processos de aprendizagem"
      ],
      requirements: [
        "Graduação em educação ou áreas afins",
        "Interesse em neurociência",
        "Disponibilidade para estudos"
      ],
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
      videoThumbnail: "/images/courses/video-thumbnails/neurociencia.jpg"
    }
  },
  {
    id: 6,
    title: "Gestão de Sala de Aula",
    description: "Aprenda estratégias eficazes para gerenciar sua sala de aula",
    image: "/images/courses/gestao.jpg",
    link: "/cursos/gestao-sala-aula",
    icon: <Users className="w-8 h-8" />,
    details: {
      duration: "4 meses",
      startDate: "15 de Maio de 2024",
      vacancies: "60 vagas",
      level: "Extensão",
      fullDescription: "O curso de Gestão de Sala de Aula oferece ferramentas práticas para criar um ambiente de aprendizagem positivo e produtivo. Os participantes aprendem estratégias de gestão de comportamento, organização do espaço e promoção de engajamento.",
      objectives: [
        "Desenvolver estratégias de gestão",
        "Criar ambiente positivo",
        "Promover engajamento",
        "Resolver conflitos"
      ],
      requirements: [
        "Experiência em sala de aula",
        "Disponibilidade para práticas",
        "Computador com acesso à internet"
      ],
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
      videoThumbnail: "/images/courses/video-thumbnails/gestao.jpg"
    }
  }
];

export function InfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<CarouselItem | null>(null);
  const itemsPerView = 2;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (items.length - itemsPerView + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= items.length - itemsPerView + 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? items.length - itemsPerView : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full py-12 overflow-hidden bg-gradient-to-r from-purple-50 to-yellow-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Título da Seção */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gradient mb-4">Nossos Cursos em Destaque</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore nossa seleção de cursos especializados em formação pedagógica
        </p>
      </div>

      {/* Carrossel */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${items.length * (100 / itemsPerView)}%`
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-1/2 px-4"
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-[400px]">
                  <div className="relative h-1/2 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-white/20 text-white">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-sm text-white/90 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between h-1/2">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{item.details.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{item.details.startDate}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCourse(item)}
                      className="inline-flex items-center justify-center text-purple-600 hover:text-purple-700 font-medium group"
                    >
                      Ver detalhes
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: items.length - itemsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-600 w-4'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal de Detalhes */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedCourse && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient">
                  {selectedCourse.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                {/* Vídeo do Curso */}
                <div className="relative rounded-lg overflow-hidden bg-black">
                  <div className="aspect-video">
                    <iframe
                      src={selectedCourse.details.videoUrl}
                      title={`Vídeo do curso ${selectedCourse.title}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        <span className="font-medium">Assistir vídeo do curso</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-48 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${selectedCourse.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/20 text-white">
                        {selectedCourse.icon}
                      </div>
                      <p className="text-white font-medium">{selectedCourse.details.level}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-50">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Duração</p>
                      <p className="font-medium">{selectedCourse.details.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-50">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Início</p>
                      <p className="font-medium">{selectedCourse.details.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-50">
                    <Users2 className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Vagas</p>
                      <p className="font-medium">{selectedCourse.details.vacancies}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-50">
                    <Award className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Nível</p>
                      <p className="font-medium">{selectedCourse.details.level}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Sobre o Curso</h3>
                  <p className="text-gray-600">{selectedCourse.details.fullDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Objetivos</h3>
                    <ul className="space-y-2">
                      {selectedCourse.details.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <span className="text-purple-600">•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Requisitos</h3>
                    <ul className="space-y-2">
                      {selectedCourse.details.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <span className="text-purple-600">•</span>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Compartilhamento */}
                <div className="pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4">Compartilhar Curso</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + selectedCourse.link)}`, '_blank')}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2] text-white hover:bg-[#1877F2]/90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </button>
                    <button
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedCourse.title)}&url=${encodeURIComponent(window.location.origin + selectedCourse.link)}`, '_blank')}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.origin + selectedCourse.link);
                        // Aqui você pode adicionar uma notificação de sucesso
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Copiar Link
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
} 