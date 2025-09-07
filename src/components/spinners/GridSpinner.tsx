import React from 'react'
import { SpinnerProps } from './index'

const sizeClasses = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
  xl: 'w-4 h-4'
}

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  indigo: 'bg-indigo-500'
}

export default function GridSpinner({
  size = 'md',
  color = 'blue',
  className = ''
}: SpinnerProps) {
  return (
    <div className={`grid grid-cols-3 gap-1 ${className}`} role="status" aria-label="Loading">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}
          style={{
            animationDelay: `${index * 0.1}s`,
            animationDuration: '1.5s'
          }}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}