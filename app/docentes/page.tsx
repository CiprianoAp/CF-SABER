import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Mail, Linkedin, Twitter } from 'lucide-react';

const teachers = [
  {
    name: 'Dr. João Silva',
    role: 'Coordenador Acadêmico',
    image: 'https://images.pexels.com/photos/3184487/pexels-photo-3184487.jpeg',
    bio: 'Doutor em Educação com mais de 15 anos de experiência em gestão acadêmica.',
    email: 'joao.silva@cf-saber.edu.ao',
    linkedin: 'https://linkedin.com/in/joao-silva',
    twitter: 'https://twitter.com/joaosilva'
  },
  {
    name: 'Dra. Maria Santos',
    role: 'Professora de Metodologias',
    image: 'https://images.pexels.com/photos/3184488/pexels-photo-3184488.jpeg',
    bio: 'Especialista em metodologias ativas e tecnologias educacionais.',
    email: 'maria.santos@cf-saber.edu.ao',
    linkedin: 'https://linkedin.com/in/maria-santos',
    twitter: 'https://twitter.com/mariasantos'
  },
  {
    name: 'Dr. Pedro Oliveira',
    role: 'Professor de Gestão',
    image: 'https://images.pexels.com/photos/3184489/pexels-photo-3184489.jpeg',
    bio: 'Doutor em Administração com foco em gestão educacional.',
    email: 'pedro.oliveira@cf-saber.edu.ao',
    linkedin: 'https://linkedin.com/in/pedro-oliveira',
    twitter: 'https://twitter.com/pedrooliveira'
  },
  {
    name: 'Dra. Ana Costa',
    role: 'Professora de Psicologia',
    image: 'https://images.pexels.com/photos/3184490/pexels-photo-3184490.jpeg',
    bio: 'Especialista em psicologia da educação e desenvolvimento infantil.',
    email: 'ana.costa@cf-saber.edu.ao',
    linkedin: 'https://linkedin.com/in/ana-costa',
    twitter: 'https://twitter.com/anacosta'
  }
];

export default function DocentesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184472/pexels-photo-3184472.jpeg"
            alt="Docentes"
            fill
            className="object-cover brightness-50 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-yellow-500/80 animate-gradient" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-slide-in">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Nossos Docentes</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Conheça nossa equipe de professores especialistas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Corpo Docente Qualificado</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nossa equipe de professores é composta por profissionais altamente qualificados, 
                com vasta experiência acadêmica e prática na área da educação.
              </p>
              <p className="text-lg text-gray-600">
                Cada docente traz consigo uma bagagem única de conhecimentos e experiências, 
                contribuindo para uma formação completa e atualizada dos nossos alunos.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <Image
                src="https://images.pexels.com/photos/3184474/pexels-photo-3184474.jpeg"
                alt="Docentes"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Teachers Grid */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-gradient mb-2">{teacher.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{teacher.role}</p>
                <p className="text-gray-600 mb-4">{teacher.bio}</p>
                <div className="flex items-center gap-4">
                  <a 
                    href={`mailto:${teacher.email}`}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a 
                    href={teacher.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={teacher.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 animate-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Por que escolher nossos professores?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Experiência</h3>
              <p className="text-white/90">
                Professores com anos de experiência em sala de aula e formação acadêmica.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Atualização</h3>
              <p className="text-white/90">
                Docentes constantemente atualizados com as últimas tendências educacionais.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass hover-scale">
              <h3 className="text-xl font-bold mb-4">Dedicação</h3>
              <p className="text-white/90">
                Compromisso com o sucesso e desenvolvimento dos alunos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Faça parte da nossa equipe</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos sempre em busca de profissionais talentosos para se juntarem ao nosso corpo docente.
          </p>
          <Link href="/contato" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-yellow-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover-scale">
            Envie seu currículo
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
} 