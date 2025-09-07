import React from 'react'
import { SpinnerProps } from './index'

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
}

const colorClasses = {
  blue: 'bg-gradient-to-r from-blue-400 to-blue-600',
  green: 'bg-gradient-to-r from-green-400 to-green-600',
  purple: 'bg-gradient-to-r from-purple-400 to-purple-600',
  red: 'bg-gradient-to-r from-red-400 to-red-600',
  yellow: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
  indigo: 'bg-gradient-to-r from-indigo-400 to-indigo-600'
}

export default function PulseSpinner({
  size = 'md',
  color = 'blue',
  className = ''
}: SpinnerProps) {
  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded animate-pulse ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}