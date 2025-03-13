'use client';
import React, { useState } from 'react';
import CourseDetailsSidebar from '@/components/CourseDetailsSidebar';

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

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = (course: Course) => {
    setSelectedCourse(course);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold" aria-level={1}>Cursos</h1>
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
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <li
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            aria-labelledby={`course-title-${course.id}`}
            aria-describedby={`course-short-description-${course.id}`}
            role="listitem"
            aria-label={`Curso ${course.title}. ${course.description.substring(0, 50)}...`}
            aria-posinset={courses.indexOf(course) + 1}
            aria-setsize={courses.length}
          >
            <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2
                id={`course-title-${course.id}`}
                className="text-xl font-semibold mb-2"
                role="heading"
                aria-level={2}
              >
                {course.title}
              </h2>
              <p
                id={`course-short-description-${course.id}`}
                className="text-gray-500 text-sm"
              >
                {course.description.substring(0, 50)}...
              </p>
              <span id={`course-long-description-${course.id}`} className="sr-only">
                {course.description} Saiba mais e matricule-se!
              </span>
              <div className="flex items-center justify-between">
                <span className="text-purple-600 font-bold">{course.price}</span>
                <button
                  onClick={() => openSidebar(course)}
                  className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition-colors"
                  aria-label={`Matricule-se no curso ${course.title}`}
                  aria-describedby={`course-long-description-${course.id}`}
                >
                  Matricule-se
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isSidebarOpen && selectedCourse && (
        <CourseDetailsSidebar
          onClose={closeSidebar}
          course={selectedCourse}
        />
      )}
    </div>
  );
};

export default CoursesPage;
