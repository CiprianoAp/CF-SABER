import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, GraduationCap, Target } from 'lucide-react';

const modules = [
  {
    title: 'Fundamentos da Educação',
    description: 'Conceitos básicos e teorias educacionais',
    duration: '40 horas',
    topics: [
      'História da Educação',
      'Filosofia da Educação',
      'Psicologia do Desenvolvimento',
      'Sociologia da Educação'
    ]
  },
  {
    title: 'Metodologias de Ensino',
    description: 'Abordagens e técnicas pedagógicas modernas',
    duration: '60 horas',
    topics: [
      'Metodologias Ativas',
      'Tecnologias Educacionais',
      'Avaliação da Aprendizagem',
      'Planejamento Pedagógico'
    ]
  },
  {
    title: 'Gestão Educacional',
    description: 'Administração e organização escolar',
    duration: '50 horas',
    topics: [
      'Gestão Escolar',
      'Projetos Educacionais',
      'Liderança em Educação',
      'Políticas Educacionais'
    ]
  },
  {
    title: 'Práticas Pedagógicas',
    description: 'Aplicação prática dos conhecimentos',
    duration: '70 horas',
    topics: [
      'Estágio Supervisionado',
      'Projetos de Intervenção',
      'Pesquisa em Educação',
      'Seminários Temáticos'
    ]
  }
];

export default function CurriculoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184478/pexels-photo-3184478.jpeg"
            alt="Currículo"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-yellow-500/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <Link 
            href="/programa" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Programa
          </Link>
          <h1 className="text-5xl font-bold mb-6">Currículo</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estrutura curricular completa e atualizada
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Estrutura do Programa</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nosso currículo foi desenvolvido para fornecer uma formação completa 
                e atualizada em educação, combinando teoria e prática em um programa 
                estruturado e dinâmico.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Duração Total</h3>
                    <p className="text-gray-600">220 horas</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Nível</h3>
                    <p className="text-gray-600">Pós-Graduação</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Target className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Modalidade</h3>
                    <p className="text-gray-600">Presencial e Híbrida</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3184480/pexels-photo-3184480.jpeg"
                alt="Estrutura"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Módulos do Programa</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div 
                key={module.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="h-6 w-6" />
                  <h3 className="text-xl font-bold">{module.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{module.description}</p>
                <div className="text-white/80 text-sm mb-4">
                  Duração: {module.duration}
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Objetivos do Programa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Formação Teórica</h3>
              <p className="text-gray-600">
                Desenvolver conhecimentos sólidos nas teorias e fundamentos da educação.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Prática Pedagógica</h3>
              <p className="text-gray-600">
                Capacitar para a aplicação efetiva de metodologias de ensino.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Gestão Educacional</h3>
              <p className="text-gray-600">
                Preparar para a gestão e liderança em contextos educacionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Comece Sua Formação</h2>
          <p className="text-xl text-white/90 mb-8">
            Faça parte do nosso programa e transforme sua carreira na educação
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Solicite Informações
          </Link>
        </div>
      </section>
    </div>
  );
} 