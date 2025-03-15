import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Award, Users, Target } from 'lucide-react';

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg"
            alt="História"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-yellow-500/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <Link 
            href="/sobre" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Sobre
          </Link>
          <h1 className="text-5xl font-bold mb-6">Nossa História</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Uma jornada de excelência e dedicação à educação
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-yellow-500"></div>

            {/* Timeline Items */}
            <div className="space-y-20">
              {/* 2010 */}
              <div className="relative">
                <div className="md:w-1/2 md:ml-auto pl-8 md:pl-12">
                  <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                    <div className="absolute -left-4 top-8 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-purple-600 font-semibold mb-2">2010</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Nascimento do CF-Saber</h3>
                    <p className="text-gray-600">
                      Fundado com a missão de transformar a educação em Angola, o CF-Saber 
                      nasceu da visão de educadores comprometidos com a excelência acadêmica.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2015 */}
              <div className="relative">
                <div className="md:w-1/2 pr-8 md:pr-12">
                  <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                    <div className="absolute -right-4 top-8 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-yellow-600 font-semibold mb-2">2015</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Reconhecimento Nacional</h3>
                    <p className="text-gray-600">
                      Recebemos o prêmio de Excelência em Formação Pedagógica, consolidando 
                      nossa posição como referência no setor.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2018 */}
              <div className="relative">
                <div className="md:w-1/2 md:ml-auto pl-8 md:pl-12">
                  <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                    <div className="absolute -left-4 top-8 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-purple-600 font-semibold mb-2">2018</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Expansão e Inovação</h3>
                    <p className="text-gray-600">
                      Inauguramos novas unidades e implementamos metodologias inovadoras 
                      de ensino, expandindo nosso alcance e impacto.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative">
                <div className="md:w-1/2 pr-8 md:pr-12">
                  <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                    <div className="absolute -right-4 top-8 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-yellow-600 font-semibold mb-2">2020</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Transformação Digital</h3>
                    <p className="text-gray-600">
                      Implementamos plataformas digitais e metodologias híbridas, 
                      adaptando-nos aos novos tempos e mantendo a excelência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <p className="text-white/90">Alunos Formados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-white/90">Parceiros Estratégicos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <p className="text-white/90">Taxa de Satisfação</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-white/90">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Faça Parte da Nossa História</h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a nós na missão de transformar a educação
          </p>
          <Link
            href="/contato"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </div>
  );
} 