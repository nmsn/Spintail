import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  content?: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  content,
  imageUrl
}) => {
  return (
    <div className={`
      w-1/3 min-w-[200px] h-[360px]
      bg-white shadow-md
      overflow-hidden flex flex-col
      transition-all duration-200 ease-in-out
      hover:shadow-lg hover:-translate-y-0.5
      ${className}
    `}>
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title || 'Card image'}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-5 flex-1 flex items-center justify-center">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>
        )}
        {content && (
          <p className="text-gray-600 leading-relaxed flex-1">
            {content}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;