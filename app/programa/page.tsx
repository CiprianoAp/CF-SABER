import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export default function ProgramaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg"
            alt="Programa"
            fill
            className="object-cover brightness-50 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-yellow-500/80 animate-gradient" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-slide-in">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Nossos Programas</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Formação completa e especializada para educadores do século XXI
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Nossa Proposta</h2>
              <p className="text-lg text-gray-600 mb-6">
                O CF-Saber oferece programas de formação pedagógica completos e atualizados, 
                desenvolvidos para preparar educadores para os desafios contemporâneos da educação.
              </p>
              <p className="text-lg text-gray-600">
                Nossa metodologia combina teoria e prática, utilizando tecnologias modernas 
                e abordagens inovadoras para garantir uma formação de excelência.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <Image
                src="https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg"
                alt="Proposta"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <Link href="/programa/curriculo" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-purple-100 p-3 rounded-full animate-pulse-slow">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-gradient">Currículo</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Conheça nossa grade curricular e as disciplinas que compõem nossos programas.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/programa/calendario" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full animate-pulse-slow">
                    <Calendar className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-gradient">Calendário</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Acompanhe as datas importantes e o cronograma das atividades.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="calendario" className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 animate-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Diferenciais do Programa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Metodologia Inovadora</h3>
              <p className="text-white/90">
                Abordagem moderna que integra teoria e prática de forma dinâmica.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Corpo Docente Qualificado</h3>
              <p className="text-white/90">
                Professores com vasta experiência e formação acadêmica de excelência.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Infraestrutura Moderna</h3>
              <p className="text-white/90">
                Ambientes e recursos tecnológicos de última geração.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Comece Sua Jornada</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a nós e faça parte de uma rede de educadores transformadores.
          </p>
          <Link href="/contato" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-yellow-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover-scale">
            Entre em Contato
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
} 