'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Github, Zap } from 'lucide-react'
import {
  ClassicSpinner,
  DotsSpinner,
  GradientSpinner,
  PulseSpinner
} from '@/components/spinners'

export default function ExamplesPage() {
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
                  使用示例
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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">使用示例</h1>

          {/* Loading States Example */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">加载状态示例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <ClassicSpinner size="sm" color="blue" />
                    <span className="text-sm text-gray-600">正在加载...</span>
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <DotsSpinner size="sm" color="green" />
                    <span className="text-sm text-gray-600">处理中...</span>
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <GradientSpinner size="sm" color="purple" />
                    <span className="text-sm text-gray-600">上传文件...</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 border border-gray-200 rounded-lg text-center">
                  <PulseSpinner size="lg" color="blue" className="mb-4" />
                  <p className="text-gray-600">页面加载中</p>
                </div>
              </div>
            </div>
          </div>

          {/* Button Examples */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">按钮加载状态</h2>
            <div className="space-y-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <ClassicSpinner size="sm" color="blue" className="border-white border-t-transparent" />
                <span>提交中...</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                <DotsSpinner size="sm" color="green" className="[&>div]:bg-white" />
                <span>保存中...</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                <PulseSpinner size="sm" color="purple" className="bg-white" />
                <span>发送中...</span>
              </button>
            </div>
          </div>

          {/* Card Examples */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">卡片加载状态</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ClassicSpinner size="md" color="blue" />
                </div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GradientSpinner size="md" color="green" />
                </div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <PulseSpinner size="md" color="purple" />
                </div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5 mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">代码示例</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`// 基础用法
import { ClassicSpinner } from '@/components/spinners'

function LoadingButton() {
  const [loading, setLoading] = useState(false)
  
  return (
    <button 
      disabled={loading}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded"
    >
      {loading && <ClassicSpinner size="sm" />}
      <span>{loading ? '加载中...' : '提交'}</span>
    </button>
  )
}

// 页面加载状态
function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <PulseSpinner size="xl" color="blue" className="mb-4" />
        <p className="text-gray-600">页面加载中...</p>
      </div>
    </div>
  )
}`}
              </pre>
            </div>
          </div>
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