"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  GraduationCap, 
  BookOpen, 
  Target, 
  Lightbulb, 
  ArrowRight,
  Play,
  ChevronRight,
  Clock,
  Users,
  Award
} from "lucide-react";
import { CourseModal } from "@/components/CourseModal";

const courses = [
  {
    id: 1,
    title: "Agregação Pedagógica",
    description: "Formação completa para educadores que desejam se especializar e avançar em sua carreira docente.",
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
    duration: "2 anos",
    students: "500+",
    level: "Pós-Graduação",
    modules: [
      "Fundamentos da Educação",
      "Metodologias de Ensino",
      "Psicologia Educacional",
      "Gestão Escolar",
      "Tecnologias Educacionais",
      "Avaliação e Feedback",
      "Práticas Pedagógicas",
      "Pesquisa Educacional"
    ],
    benefits: [
      "Certificação reconhecida nacionalmente",
      "Acesso a material didático exclusivo",
      "Mentoria individual",
      "Networking com profissionais da área",
      "Estágios em instituições parceiras",
      "Suporte contínuo durante o curso"
    ]
  },
  {
    id: 2,
    title: "Formação Pedagógica",
    description: "Curso preparatório para profissionais que desejam ingressar na carreira docente.",
    image: "https://images.pexels.com/photos/3184461/pexels-photo-3184461.jpeg",
    duration: "1 ano",
    students: "300+",
    level: "Graduação",
    modules: [
      "Introdução à Pedagogia",
      "Didática e Metodologias",
      "Psicologia do Desenvolvimento",
      "Planejamento Educacional",
      "Avaliação da Aprendizagem",
      "Gestão de Sala de Aula",
      "Tecnologias na Educação",
      "Práticas de Ensino"
    ],
    benefits: [
      "Formação completa e prática",
      "Material didático atualizado",
      "Professores especialistas",
      "Aulas presenciais e online",
      "Simulações de sala de aula",
      "Certificado de conclusão"
    ]
  },
  {
    id: 3,
    title: "Especialização em Educação Infantil",
    description: "Formação especializada para profissionais que trabalham com educação infantil.",
    image: "https://images.pexels.com/photos/3184462/pexels-photo-3184462.jpeg",
    duration: "1.5 anos",
    students: "200+",
    level: "Especialização",
    modules: [
      "Desenvolvimento Infantil",
      "Psicologia da Aprendizagem",
      "Metodologias Lúdicas",
      "Literatura Infantil",
      "Psicomotricidade",
      "Nutrição Infantil",
      "Gestão de Creches",
      "Práticas Pedagógicas"
    ],
    benefits: [
      "Especialização reconhecida",
      "Material didático especializado",
      "Visitas técnicas",
      "Workshops práticos",
      "Mentoria personalizada",
      "Certificado de especialista"
    ]
  }
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-900/40" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse-slow"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg')" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
            Nossos Cursos
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-in">
            Formação especializada para educadores que buscam excelência e inovação
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Formação Completa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma variedade de cursos especializados para atender às diferentes 
              necessidades dos profissionais da educação.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover-scale">
                <div className="relative h-48">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${course.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        {course.level}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full inline-flex items-center justify-center text-purple-600 gap-2 bg-white border-purple-200 hover:bg-purple-50 transition-all duration-300"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Saber Mais
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
          course={selectedCourse}
        />
      )}
    </main>
  );
}

