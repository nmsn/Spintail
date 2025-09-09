import Link from 'next/link'
import { ArrowRight, Github, Copy, Zap } from 'lucide-react'
import Card from '@/components/Card'
import RotatePlane from '@/components/spinners/RotatePlane'
import Chase from '@/components/spinners/Chase'
import DoubleBounce from '@/components/spinners/DoubleBounce'
import Rect from '@/components/spinners/Rect'
import Bounce from '@/components/spinners/Bounce'
import BounceDelay from '@/components/spinners/BounceDelay'
import Circle from '@/components/spinners/Circle'
import CircleFade from '@/components/spinners/CircleFade'
import Cube from '@/components/spinners/Cube'
import CubeGrid from '@/components/spinners/CubeGrid'
import FoldCube from '@/components/spinners/FoldCube'
import Scaleout from '@/components/spinners/Scaleout'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        Spintail
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

        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <Card>
            <RotatePlane />
          </Card>
          <Card>
            <Chase />
          </Card>
          <Card>
            <DoubleBounce />
          </Card>
          <Card>
            <Rect />
          </Card>
          <Card>
            <Bounce />
          </Card>
          <Card>
            <BounceDelay />
          </Card>
          <Card>
            <Circle />
          </Card>
          <Card>
            <CircleFade />
          </Card>
          <Card>
            <Cube />
          </Card>
          <Card>
            <CubeGrid />
          </Card>
          <Card>
            <FoldCube />
          </Card>
          <Card>
            <Scaleout />
          </Card>
        </div>

      </main>



      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Built with ❤️ using Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}