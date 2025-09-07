import React from 'react'
import { SpinnerProps } from './index'

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-12 h-12 border-4',
  xl: 'w-16 h-16 border-4'
}

const colorClasses = {
  blue: 'border-blue-200 border-t-blue-500',
  green: 'border-green-200 border-t-green-500',
  purple: 'border-purple-200 border-t-purple-500',
  red: 'border-red-200 border-t-red-500',
  yellow: 'border-yellow-200 border-t-yellow-500',
  indigo: 'border-indigo-200 border-t-indigo-500'
}

export default function ClassicSpinner({
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