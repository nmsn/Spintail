import Link from 'next/link'
import { ArrowRight, Github, Copy, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Spintail
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/components"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              组件
            </Link>
            <Link
              href="/examples"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              示例
            </Link>
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Beautiful
            </span>
            <br />
            <span className="text-gray-900">React Spinners</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            一套精美的 React 加载动画组件库，基于 Tailwind CSS 构建。
            简约设计，一键复制，即插即用。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/components"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              浏览组件
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              <Copy className="mr-2 w-5 h-5" />
              复制代码
            </button>
          </div>

          {/* Demo Spinners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="text-sm text-gray-600">Classic</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-sm text-gray-600">Dots</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-transparent border-l-blue-500 border-r-green-500 rounded-full animate-spin"></div>
              <span className="text-sm text-gray-600">Gradient</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded animate-pulse"></div>
              <span className="text-sm text-gray-600">Pulse</span>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Copy className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">一键复制</h3>
            <p className="text-gray-600">
              无需安装额外依赖，直接复制组件代码到你的项目中即可使用
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">高性能</h3>
            <p className="text-gray-600">
              基于 CSS 动画和 Tailwind CSS，轻量级且性能优异
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">易于定制</h3>
            <p className="text-gray-600">
              使用 Tailwind CSS 类名，轻松调整颜色、大小和动画效果
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Built with ❤️ using Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}