import React from 'react'
import { SpinnerProps } from './index'

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
}

const colorClasses = {
  blue: 'border-blue-500',
  green: 'border-green-500',
  purple: 'border-purple-500',
  red: 'border-red-500',
  yellow: 'border-yellow-500',
  indigo: 'border-indigo-500'
}

export default function CircleSpinner({
  size = 'md',
  color = 'blue',
  className = ''
}: SpinnerProps) {
  return (
    <div className={`relative ${className}`} role="status" aria-label="Loading">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-opacity-20 rounded-full`}
      ></div>
      <div
        className={`absolute top-0 left-0 ${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin`}
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}