import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-md p-4">
      <h2 className="text-xl font-bold" role="heading" aria-level={2}>{title}</h2>
      <p>{description}</p>
      <button aria-label={`Learn more about ${title}`} className="bg-blue-500 text-white py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  );
};

export default CourseCard;
