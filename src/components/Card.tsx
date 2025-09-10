import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  content?: string;
  imageUrl?: string;
  index?: number;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  content,
  imageUrl,
  index = 0,
  onClick
}) => {
  // 单数索引使用浅灰色，双数索引使用深灰色
  const bgColor = index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800';

  return (
    <div
      className={`
        w-1/3 min-w-[200px] h-[360px]
        ${bgColor}
        overflow-hidden flex flex-col
        cursor-pointer
        transition-all duration-300 ease-in-out
        hover:bg-gray-600
        hover:scale-105
        hover:shadow-lg
        ${className}
      `}
      onClick={onClick}
    >
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