'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Copy, Check, Github, Zap } from 'lucide-react'
import {
  ClassicSpinner,
  DotsSpinner,
  GradientSpinner,
  PulseSpinner,
  BounceSpinner,
  WaveSpinner,
  RingSpinner,
  GridSpinner,
  SquareSpinner,
  CircleSpinner,
  SpinnerProps
} from '@/components/spinners'

type SpinnerComponent = {
  name: string
  component: React.ComponentType<SpinnerProps>
  code: string
  description: string
}

const spinners: SpinnerComponent[] = [
  {
    name: 'Classic Spinner',
    component: ClassicSpinner,
    description: '经典的圆形加载动画',
    code: `import React from 'react'

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
}) {
  return (
    <div 
      className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded-full animate-spin \${className}\`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  },
  {
    name: 'Dots Spinner',
    component: DotsSpinner,
    description: '三个跳跃的圆点动画',
    code: `import React from 'react'

const sizeClasses = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2.5 h-2.5',
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

export default function DotsSpinner({ 
  size = 'md', 
  color = 'blue', 
  className = '' 
}) {
  return (
    <div className={\`flex space-x-1 \${className}\`} role="status" aria-label="Loading">
      <div 
        className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded-full animate-bounce\`}
      ></div>
      <div 
        className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded-full animate-bounce\`}
        style={{ animationDelay: '0.1s' }}
      ></div>
      <div 
        className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded-full animate-bounce\`}
        style={{ animationDelay: '0.2s' }}
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  },
  {
    name: 'Gradient Spinner',
    component: GradientSpinner,
    description: '渐变色边框旋转动画',
    code: `import React from 'react'

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
}) {
  return (
    <div 
      className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded-full animate-spin \${className}\`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  },
  {
    name: 'Pulse Spinner',
    component: PulseSpinner,
    description: '渐变背景脉冲动画',
    code: `import React from 'react'

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
}) {
  return (
    <div 
      className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded animate-pulse \${className}\`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  },
  {
    name: 'Bounce Spinner',
    component: BounceSpinner,
    description: '三个弹跳球动画',
    code: `import React from 'react'

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
}

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  indigo: 'bg-indigo-500'
}

export default function BounceSpinner({
  size = 'md',
  color = 'blue',
  className = ''
}) {
  return (
    <div className={\`flex justify-center items-end space-x-1 \${className}\`} role="status" aria-label="Loading">
      <div
        className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded-full animate-bounce\`}
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded-full animate-bounce\`}
        style={{ animationDelay: '0.1s' }}
      ></div>
      <div
        className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded-full animate-bounce\`}
        style={{ animationDelay: '0.2s' }}
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  },
  {
    name: 'Wave Spinner',
    component: WaveSpinner,
    description: '波浪形脉冲动画',
    code: `import React from 'react'

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
}) {
  return (
    <div className={\`flex items-center space-x-1 \${className}\`} role="status" aria-label="Loading">
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className={\`\${sizeClasses[size]} \${colorClasses[color]} animate-pulse\`}
          style={{
            animationDelay: \`\${index * 0.1}s\`,
            animationDuration: '1.2s'
          }}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  },
  {
    name: 'Ring Spinner',
    component: RingSpinner,
    description: '环形边框旋转动画',
    code: `import React from 'react'

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
}) {
  return (
    <div
      className={\`\${sizeClasses[size]} \${colorClasses[color]} rounded-full animate-spin \${className}\`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  },
  {
    name: 'Grid Spinner',
    component: GridSpinner,
    description: '九宫格脉冲动画',
    code: `import React from 'react'

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
}) {
  return (
    <div className={\`grid grid-cols-3 gap-1 \${className}\`} role="status" aria-label="Loading">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <div
          key={index}
          className={\`\${sizeClasses[size]} \${colorClasses[color]} animate-pulse\`}
          style={{
            animationDelay: \`\${index * 0.1}s\`,
            animationDuration: '1.5s'
          }}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  },
  {
    name: 'Square Spinner',
    component: SquareSpinner,
    description: '方形旋转动画',
    code: `import React from 'react'

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
}

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  indigo: 'bg-indigo-500'
}

export default function SquareSpinner({
  size = 'md',
  color = 'blue',
  className = ''
}) {
  return (
    <div
      className={\`\${sizeClasses[size]} \${colorClasses[color]} animate-spin \${className}\`}
      style={{
        animationDuration: '1.2s',
        transformOrigin: 'center'
      }}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  },
  {
    name: 'Circle Spinner',
    component: CircleSpinner,
    description: '双层圆环动画',
    code: `import React from 'react'

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
}) {
  return (
    <div className={\`relative \${className}\`} role="status" aria-label="Loading">
      <div
        className={\`\${sizeClasses[size]} \${colorClasses[color]} border-4 border-opacity-20 rounded-full\`}
      ></div>
      <div
        className={\`absolute top-0 left-0 \${sizeClasses[size]} \${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin\`}
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}`
  }
]

export default function ComponentsPage() {
  const [selectedSize, setSelectedSize] = useState<SpinnerProps['size']>('md')
  const [selectedColor, setSelectedColor] = useState<SpinnerProps['color']>('blue')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = async (code: string, name: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(name)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>返回首页</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Spintail Components
                </span>
              </div>
            </div>
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Controls */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">自定义样式</h2>
          <div className="flex flex-wrap gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                尺寸
              </label>
              <div className="flex space-x-2">
                {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${selectedSize === size
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                颜色
              </label>
              <div className="flex space-x-2">
                {(['blue', 'green', 'purple', 'red', 'yellow', 'indigo'] as const).map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color
                        ? 'border-gray-400 scale-110'
                        : 'border-gray-200 hover:border-gray-300'
                      } ${color === 'blue' ? 'bg-blue-500' :
                        color === 'green' ? 'bg-green-500' :
                          color === 'purple' ? 'bg-purple-500' :
                            color === 'red' ? 'bg-red-500' :
                              color === 'yellow' ? 'bg-yellow-500' :
                                'bg-indigo-500'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spinner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spinners.map((spinner) => {
            const SpinnerComponent = spinner.component
            return (
              <div
                key={spinner.name}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-2">{spinner.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{spinner.description}</p>
                  <div className="flex justify-center items-center h-20">
                    <SpinnerComponent
                      size={selectedSize}
                      color={selectedColor}
                    />
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(spinner.code, spinner.name)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  {copiedCode === spinner.name ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">已复制!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>复制代码</span>
                    </>
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Built with ❤️ using Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}