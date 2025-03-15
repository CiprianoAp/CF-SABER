import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184476/pexels-photo-3184476.jpeg"
            alt="Contato"
            fill
            className="object-cover brightness-50 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-yellow-500/80 animate-gradient" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-slide-in">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Entre em Contato</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos aqui para ajudar você em sua jornada educacional
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Envie sua mensagem</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="info">Informações gerais</option>
                    <option value="courses">Cursos</option>
                    <option value="partnership">Parcerias</option>
                    <option value="career">Carreiras</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Sua mensagem"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-yellow-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover-scale"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Informações de Contato</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full animate-pulse-slow">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Endereço</h3>
                      <p className="text-gray-600">
                        Av. Principal, 1234 - Centro<br />
                        São Paulo - SP, 01001-000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full animate-pulse-slow">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(11) 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full animate-pulse-slow">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-600">contato@cf-saber.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Horário de Atendimento</h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Segunda a Sexta</span>
                      <span className="font-medium text-gray-900">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sábado</span>
                      <span className="font-medium text-gray-900">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Domingo</span>
                      <span className="font-medium text-gray-900">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-yellow-500 animate-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white glass">
            <h2 className="text-3xl font-bold text-center mb-8">Nossa Localização</h2>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197577494978!2d-46.6522777!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzknMDguMiJX!5e0!3m2!1spt-BR!2sbr!4v1625761234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 