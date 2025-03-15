"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  Tag, 
  Search,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { NewsModal } from "@/components/NewsModal";

const news = [
  {
    id: 1,
    title: "Novas Metodologias de Ensino para 2024",
    excerpt: "Descubra as tendências mais inovadoras em educação que estão transformando a sala de aula.",
    image: "https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg",
    date: "15 Mar 2024",
    readTime: "5 min",
    category: "Metodologias",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    title: "O Impacto da Tecnologia na Educação",
    excerpt: "Como as ferramentas digitais estão revolucionando o processo de ensino e aprendizagem.",
    image: "https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg",
    date: "12 Mar 2024",
    readTime: "7 min",
    category: "Tecnologia",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    title: "Desenvolvimento Profissional Docente",
    excerpt: "Estratégias para o crescimento contínuo na carreira de educador.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    date: "10 Mar 2024",
    readTime: "6 min",
    category: "Carreira",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    title: "Inclusão e Diversidade na Educação",
    excerpt: "Práticas pedagógicas para uma educação mais inclusiva e acolhedora.",
    image: "https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg",
    date: "8 Mar 2024",
    readTime: "8 min",
    category: "Inclusão",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const categories = [
  "Todos",
  "Metodologias",
  "Tecnologia",
  "Carreira",
  "Inclusão",
  "Eventos"
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null);

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-900/40" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse-slow"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg')" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
            Notícias e Artigos
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-in">
            Fique por dentro das últimas novidades e tendências na área da educação
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search and Categories */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar notícias..."
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-600 hover:bg-purple-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredNews.map((item) => (
              <Card key={item.id} className="overflow-hidden hover-scale">
                <div className="relative h-48">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.readTime}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{item.excerpt}</p>
                  <Button 
                    variant="outline"
                    className="w-full inline-flex items-center justify-center text-purple-600 gap-2 bg-white border-purple-200 hover:bg-purple-50 transition-all duration-300"
                    onClick={() => setSelectedNews(item)}
                  >
                    Ler Mais
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-yellow-500 text-white hover:shadow-lg transition-all duration-300 hover-scale"
            >
              Carregar Mais
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* News Modal */}
      {selectedNews && (
        <NewsModal
          isOpen={!!selectedNews}
          onClose={() => setSelectedNews(null)}
          news={selectedNews}
        />
      )}
    </main>
  );
} 