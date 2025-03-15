import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Dr. João Silva',
    role: 'Diretor Geral',
    image: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg',
    bio: 'Doutor em Educação com mais de 20 anos de experiência em gestão acadêmica.',
    email: 'joao.silva@cf-saber.pt',
    linkedin: 'https://linkedin.com/in/joao-silva',
    twitter: 'https://twitter.com/joaosilva'
  },
  {
    name: 'Dra. Maria Santos',
    role: 'Coordenadora Acadêmica',
    image: 'https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg',
    bio: 'Mestre em Pedagogia e especialista em metodologias inovadoras de ensino.',
    email: 'maria.santos@cf-saber.pt',
    linkedin: 'https://linkedin.com/in/maria-santos',
    twitter: 'https://twitter.com/mariasantos'
  },
  {
    name: 'Prof. Pedro Oliveira',
    role: 'Coordenador de Formação',
    image: 'https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg',
    bio: 'Especialista em formação docente e desenvolvimento profissional.',
    email: 'pedro.oliveira@cf-saber.pt',
    linkedin: 'https://linkedin.com/in/pedro-oliveira',
    twitter: 'https://twitter.com/pedrooliveira'
  },
  {
    name: 'Dra. Ana Costa',
    role: 'Coordenadora de Pesquisa',
    image: 'https://images.pexels.com/photos/3184472/pexels-photo-3184472.jpeg',
    bio: 'Doutora em Ciências da Educação e pesquisadora em metodologias ativas.',
    email: 'ana.costa@cf-saber.pt',
    linkedin: 'https://linkedin.com/in/ana-costa',
    twitter: 'https://twitter.com/anacosta'
  }
];

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg"
            alt="Equipe"
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
          <h1 className="text-5xl font-bold mb-6">Nossa Equipe</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Profissionais dedicados à excelência em educação
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-white/90">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex items-center gap-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Junte-se à Nossa Equipe</h2>
          <p className="text-xl text-white/90 mb-8">
            Estamos sempre em busca de profissionais talentosos e apaixonados por educação
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Envie seu Currículo
          </Link>
        </div>
      </section>
    </div>
  );
} 