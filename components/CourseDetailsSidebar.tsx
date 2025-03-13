import React from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

interface CourseDetailsSidebarProps {
  course: Course | null;
  onClose: () => void;
}

const CourseDetailsSidebar: React.FC<CourseDetailsSidebarProps> = ({ course, onClose }) => {
  if (!course) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg p-8 z-50" role="dialog" aria-modal="true" aria-labelledby="course-details-title">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" aria-label="Fechar detalhes do curso">
        Fechar
      </button>
      <h2 className="text-2xl font-semibold mb-4" id="course-details-title">{course.title}</h2>
      <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover mb-4" />
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="text-purple-600 font-bold">{course.price}</p>
      {/* Add syllabus or more details here */}
    </div>
  );
};

export default CourseDetailsSidebar;
