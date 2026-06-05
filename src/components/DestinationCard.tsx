import React from 'react';

export interface DestinationProps {
  name: string;
  description: string;
  image: string;
}

const DestinationCard: React.FC<DestinationProps> = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard; 