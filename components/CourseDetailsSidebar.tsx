import React from 'react';

interface CourseDetailsSidebarProps {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  lessons: number;
  level: string;
  imageUrl: string;
  ariaLabel?: string;
}

const CourseDetailsSidebar: React.FC<CourseDetailsSidebarProps> = ({
  title,
  description,
  instructor,
  duration,
  lessons,
  level,
  imageUrl,
}) => {
  return (
<aside className="bg-gray-100 p-4 rounded-md" aria-label={ariaLabel}>
      <h3 className="text-lg font-semibold mb-2" aria-level={3}>{title}</h3>
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" aria-hidden="true" />
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <ul>
        <li>
          <strong>Instructor:</strong> {instructor}
        </li>
        <li>
          <strong>Duration:</strong> {duration}
        </li>
        <li>
          <strong>Lessons:</strong> {lessons}
        </li>
        <li>
          <strong>Level:</strong> {level}
        </li>
      </ul>
    </aside>
  );
};

export default CourseDetailsSidebar;
