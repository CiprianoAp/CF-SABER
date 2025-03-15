import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, GraduationCap, Target } from 'lucide-react';

const events = [
  {
    date: '15 Março 2024',
    title: 'Início das Inscrições',
    description: 'Período de inscrições para o próximo semestre',
    type: 'inscricao'
  },
  {
    date: '30 Março 2024',
    title: 'Dia de Orientação',
    description: 'Encontro com coordenadores e professores',
    type: 'orientacao'
  },
  {
    date: '5 Abril 2024',
    title: 'Início das Aulas',
    description: 'Primeiro dia do semestre letivo',
    type: 'aula'
  },
  {
    date: '15 Maio 2024',
    title: 'Workshop de Metodologias',
    description: 'Capacitação em metodologias ativas',
    type: 'workshop'
  },
  {
    date: '30 Maio 2024',
    title: 'Avaliação Parcial',
    description: 'Primeira avaliação do semestre',
    type: 'avaliacao'
  },
  {
    date: '15 Junho 2024',
    title: 'Feira de Projetos',
    description: 'Apresentação dos projetos dos alunos',
    type: 'projeto'
  }
];

export default function CalendarioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184479/pexels-photo-3184479.jpeg"
            alt="Calendário"
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
          <h1 className="text-5xl font-bold mb-6">Calendário Acadêmico</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Acompanhe os principais eventos e datas do programa
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cronograma do Semestre</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nosso calendário acadêmico foi planejado para proporcionar uma 
                experiência de aprendizado completa e bem estruturada, com momentos 
                importantes para o desenvolvimento dos alunos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Duração do Semestre</h3>
                    <p className="text-gray-600">4 meses</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Carga Horária</h3>
                    <p className="text-gray-600">220 horas</p>
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
                src="https://images.pexels.com/photos/3184481/pexels-photo-3184481.jpeg"
                alt="Cronograma"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Eventos do Semestre</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="h-6 w-6" />
                  <span className="text-sm text-white/80">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-white/90">{event.description}</p>
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    event.type === 'inscricao' ? 'bg-blue-500/20 text-blue-200' :
                    event.type === 'orientacao' ? 'bg-green-500/20 text-green-200' :
                    event.type === 'aula' ? 'bg-purple-500/20 text-purple-200' :
                    event.type === 'workshop' ? 'bg-yellow-500/20 text-yellow-200' :
                    event.type === 'avaliacao' ? 'bg-red-500/20 text-red-200' :
                    'bg-indigo-500/20 text-indigo-200'
                  }`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Datas Importantes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Inscrições</h3>
              <p className="text-gray-600">
                Período de inscrições: 15 a 30 de março de 2024
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Aulas</h3>
              <p className="text-gray-600">
                Início: 5 de abril de 2024
                <br />
                Término: 15 de julho de 2024
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Avaliações</h3>
              <p className="text-gray-600">
                Parcial: 30 de maio de 2024
                <br />
                Final: 10 de julho de 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Faça Parte do Nosso Programa</h2>
          <p className="text-xl text-white/90 mb-8">
            Inscreva-se para o próximo semestre e comece sua jornada de transformação
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