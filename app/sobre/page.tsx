import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Users, ArrowRight } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
            alt="Educação"
            fill
            className="object-cover brightness-50 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-yellow-500/80 animate-gradient" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-slide-in">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Sobre o CF-Saber</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transformando vidas através da educação de qualidade e excelência acadêmica
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Nossa Missão</h2>
              <p className="text-lg text-gray-600 mb-6">
                O CF-Saber é um centro de formação pedagógica comprometido com a excelência 
                acadêmica e o desenvolvimento profissional contínuo. Nossa missão é formar 
                educadores altamente qualificados, capazes de transformar a educação e 
                impactar positivamente a sociedade.
              </p>
              <p className="text-lg text-gray-600">
                Com uma abordagem inovadora e metodologias modernas, preparamos nossos 
                alunos para os desafios do século XXI, fomentando o pensamento crítico, 
                a criatividade e o compromisso com a educação de qualidade.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <Image
                src="https://images.pexels.com/photos/3184462/pexels-photo-3184462.jpeg"
                alt="Missão"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <Link href="/sobre/historia" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-purple-100 p-3 rounded-full animate-pulse-slow">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-gradient">Nossa História</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Conheça nossa trajetória e os marcos que nos tornaram referência em formação pedagógica.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/sobre/equipe" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full animate-pulse-slow">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-gradient">Nossa Equipe</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Conheça os profissionais dedicados que fazem parte do nosso corpo docente.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="equipe" className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 animate-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Excelência</h3>
              <p className="text-white/90">
                Compromisso com a qualidade e a busca constante pela excelência acadêmica.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Inovação</h3>
              <p className="text-white/90">
                Abordagem moderna e criativa para enfrentar os desafios da educação.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Compromisso</h3>
              <p className="text-white/90">
                Dedicação ao desenvolvimento profissional e à transformação social.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 