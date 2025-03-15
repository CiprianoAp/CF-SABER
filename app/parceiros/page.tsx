import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Handshake, Target, Globe, Linkedin, Twitter } from 'lucide-react';

const partners = [
  {
    name: 'Universidade Agostinho Neto',
    description: 'Parceria estratégica para desenvolvimento acadêmico e pesquisa.',
    logo: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg',
    type: 'academico',
    social: [
      { icon: <Globe className="h-4 w-4" />, url: 'https://uan.ao' },
      { icon: <Linkedin className="h-4 w-4" />, url: 'https://linkedin.com/company/uan' }
    ]
  },
  {
    name: 'Ministério da Educação',
    description: 'Colaboração para políticas educacionais e formação docente.',
    logo: 'https://images.pexels.com/photos/3184462/pexels-photo-3184462.jpeg',
    type: 'governo',
    social: [
      { icon: <Globe className="h-4 w-4" />, url: 'https://med.gov.ao' }
    ]
  },
  {
    name: 'Instituto Nacional de Formação de Quadros',
    description: 'Desenvolvimento de programas de capacitação profissional.',
    logo: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg',
    type: 'formacao',
    social: [
      { icon: <Globe className="h-4 w-4" />, url: 'https://infq.gov.ao' },
      { icon: <Linkedin className="h-4 w-4" />, url: 'https://linkedin.com/company/infq' }
    ]
  },
  {
    name: 'Associação Nacional de Professores',
    description: 'Fortalecimento da profissão docente e desenvolvimento profissional.',
    logo: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg',
    type: 'associacao',
    social: [
      { icon: <Globe className="h-4 w-4" />, url: 'https://anp.ao' },
      { icon: <Twitter className="h-4 w-4" />, url: 'https://twitter.com/anp_angola' }
    ]
  }
];

export default function ParceirosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184478/pexels-photo-3184478.jpeg"
            alt="Parceiros"
            fill
            className="object-cover brightness-50 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-yellow-500/80 animate-gradient" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-slide-in">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Nossos Parceiros</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Juntos, construímos um futuro melhor para a educação
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Parcerias Estratégicas</h2>
              <p className="text-lg text-gray-600 mb-6">
                O CF-Saber mantém parcerias estratégicas com instituições de ensino, 
                empresas e organizações que compartilham nossa visão de transformar 
                a educação através da inovação e excelência.
              </p>
              <p className="text-lg text-gray-600">
                Nossas parcerias nos permitem oferecer uma formação mais completa e 
                atualizada, além de criar oportunidades únicas para nossos alunos.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <Image
                src="https://images.pexels.com/photos/3184480/pexels-photo-3184480.jpeg"
                alt="Parcerias"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Partners Grid */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="relative h-32 mb-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-gradient mb-2">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="flex items-center gap-4">
                  {partner.social?.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 animate-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Benefícios da Parceria</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Desenvolvimento</h3>
              <p className="text-white/90">
                Acesso a recursos e tecnologias de última geração para desenvolvimento profissional.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Networking</h3>
              <p className="text-white/90">
                Oportunidades de networking com profissionais e organizações do setor.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Inovação</h3>
              <p className="text-white/90">
                Acesso a metodologias e práticas inovadoras em educação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Seja um Parceiro</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a nós e faça parte da transformação da educação.
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