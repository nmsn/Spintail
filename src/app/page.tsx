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
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-white text-2xl font-bold">Spintail</h1>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Beautiful
            </span>
            &nbsp;
            <span className="text-white">React Spinners</span>
          </h1>

        </div>
        <div className="flex flex-wrap justify-center">
          <Card index={0}>
            <RotatePlane />
          </Card>
          <Card index={1}>
            <Chase />
          </Card>
          <Card index={2}>
            <DoubleBounce />
          </Card>
          <Card index={3}>
            <Rect />
          </Card>
          <Card index={4}>
            <Bounce />
          </Card>
          <Card index={5}>
            <BounceDelay />
          </Card>
          <Card index={6}>
            <Circle />
          </Card>
          <Card index={7}>
            <CircleFade />
          </Card>
          <Card index={8}>
            <Cube />
          </Card>
          <Card index={9}>
            <CubeGrid />
          </Card>
          <Card index={10}>
            <FoldCube />
          </Card>
          <Card index={11}>
            <Scaleout />
          </Card>
        </div>

      </main>



      {/* Footer */}
      <footer className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Built with ❤️ using Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}