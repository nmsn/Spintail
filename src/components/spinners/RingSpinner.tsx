import React from 'react'
import { SpinnerProps } from './index'

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-12 h-12 border-4',
  xl: 'w-16 h-16 border-4'
}

const colorClasses = {
  blue: 'border-blue-500 border-t-transparent',
  green: 'border-green-500 border-t-transparent',
  purple: 'border-purple-500 border-t-transparent',
  red: 'border-red-500 border-t-transparent',
  yellow: 'border-yellow-500 border-t-transparent',
  indigo: 'border-indigo-500 border-t-transparent'
}

export default function RingSpinner({
  size = 'md',
  color = 'blue',
  className = ''
}: SpinnerProps) {
  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}