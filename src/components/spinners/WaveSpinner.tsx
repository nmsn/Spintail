import React from 'react'
import { SpinnerProps } from './index'

const sizeClasses = {
  sm: 'w-1 h-4',
  md: 'w-1.5 h-8',
  lg: 'w-2 h-12',
  xl: 'w-3 h-16'
}

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  indigo: 'bg-indigo-500'
}

export default function WaveSpinner({
  size = 'md',
  color = 'blue',
  className = ''
}: SpinnerProps) {
  return (
    <div className={`flex items-center space-x-1 ${className}`} role="status" aria-label="Loading">
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}
          style={{
            animationDelay: `${index * 0.1}s`,
            animationDuration: '1.2s'
          }}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}