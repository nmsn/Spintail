import React from 'react'
import { SpinnerProps } from './index'

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-12 h-12 border-4',
  xl: 'w-16 h-16 border-4'
}

const colorClasses = {
  blue: 'border-transparent border-l-blue-500 border-r-blue-300',
  green: 'border-transparent border-l-green-500 border-r-green-300',
  purple: 'border-transparent border-l-purple-500 border-r-purple-300',
  red: 'border-transparent border-l-red-500 border-r-red-300',
  yellow: 'border-transparent border-l-yellow-500 border-r-yellow-300',
  indigo: 'border-transparent border-l-indigo-500 border-r-indigo-300'
}

export default function GradientSpinner({
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