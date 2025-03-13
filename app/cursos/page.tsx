'use client';
import React from 'react';
import CourseCard from '@/components/CourseCard';

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const CoursesPage = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: 'Curso de Agregação Pedagógica',
      description: 'Torne-se um profissional de educação de excelência.',
      imageUrl: '/curso1.jpg',
      price: 'Grátis',
    },
    {
      id: 2,
      title: 'Formação em Neuropsicopedagogia',
      description: 'Aprenda a aplicar a neurociência na prática pedagógica.',
      imageUrl: '/curso2.jpg',
      price: '€250',
    },
    {
      id: 3,
      title: 'Especialização em Educação Inclusiva',
      description: 'Capacite-se para promover a inclusão de todos os alunos.',
      imageUrl: '/curso3.jpg',
      price: '€300',
    },
    {
      id: 4,
      title: 'Curso de Didática do Ensino Superior',
      description: 'Domine as técnicas de ensino para o nível superior.',
      imageUrl: '/curso4.jpg',
      price: '€200',
    },
    {
      id: 5,
      title: 'Oficina de Jogos e Brincadeiras na Educação',
      description: 'Explore o potencial lúdico no processo de aprendizagem.',
      imageUrl: '/curso5.jpg',
      price: '€150',
    },
    {
      id: 6,
      title: 'Curso de Gestão Escolar',
      description: 'Aprenda a administrar uma escola de forma eficiente.',
      imageUrl: '/curso6.jpg',
      price: '€350',
    },
    {
      id: 7,
      title: 'Formação em Psicopedagogia Clínica',
      description: 'Atue na prevenção e tratamento de dificuldades de aprendizagem.',
      imageUrl: '/curso7.jpg',
      price: '€280',
    },
    {
      id: 8,
      title: 'Especialização em Educação Infantil',
      description: 'Desenvolva habilidades para trabalhar com crianças de 0 a 5 anos.',
      imageUrl: '/curso8.jpg',
      price: '€320',
    },
    {
      id: 9,
      title: 'Curso de Alfabetização e Letramento',
      description: 'Capacite-se para ensinar crianças a ler e escrever.',
      imageUrl: '/curso9.jpg',
      price: '€180',
    },
    {
      id: 10,
      title: 'Oficina de Contação de Histórias',
      description: 'Descubra o poder das histórias na formação de leitores.',
      imageUrl: '/curso10.jpg',
      price: '€120',
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold" aria-level={1} id="courses-title" aria-labelledby="courses-title">Cursos</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Qual curso está procurando?"
            className="border border-gray-300 rounded-md px-4 py-2 mr-2"
            aria-label="Qual curso está procurando?"
            id="search-input"
            aria-describedby="search-description"
          />
          <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-4 py-2" aria-label="Pesquisar" aria-labelledby="search-input" aria-describedby="search-description">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span id="search-description" className="sr-only">
            Use enter to submit your search
          </span>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Lista de Cursos">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
