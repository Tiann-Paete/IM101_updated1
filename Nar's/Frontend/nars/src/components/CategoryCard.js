import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CategoryCard = ({ category, onSelect }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
    <div className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">Explore our wide range of {category.name.toLowerCase()} for all your school needs.</p>
      <button
        onClick={() => onSelect(category.name)}
        className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
      >
        Check it out
        <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  </div>
);

export default CategoryCard;