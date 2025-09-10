'use client';

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  const router = useRouter();

  const handleCardClick = (name: string) => {
    router.push(`/component/${name}`);
  };
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
          <Card
            index={0}
            onClick={() => handleCardClick('RotatePlane')}
          >
            <RotatePlane />
          </Card>
          <Card
            index={1}
            onClick={() => handleCardClick('Chase')}
          >
            <Chase />
          </Card>
          <Card
            index={2}
            onClick={() => handleCardClick('DoubleBounce')}
          >
            <DoubleBounce />
          </Card>
          <Card
            index={3}
            onClick={() => handleCardClick('Rect')}
          >
            <Rect />
          </Card>
          <Card
            index={4}
            onClick={() => handleCardClick('Bounce')}
          >
            <Bounce />
          </Card>
          <Card
            index={5}
            onClick={() => handleCardClick('BounceDelay')}
          >
            <BounceDelay />
          </Card>
          <Card
            index={6}
            onClick={() => handleCardClick('Circle')}
          >
            <Circle />
          </Card>
          <Card
            index={7}
            onClick={() => handleCardClick('CircleFade')}
          >
            <CircleFade />
          </Card>
          <Card
            index={8}
            onClick={() => handleCardClick('Cube')}
          >
            <Cube />
          </Card>
          <Card
            index={9}
            onClick={() => handleCardClick('CubeGrid')}
          >
            <CubeGrid />
          </Card>
          <Card
            index={10}
            onClick={() => handleCardClick('FoldCube')}
          >
            <FoldCube />
          </Card>
          <Card
            index={11}
            onClick={() => handleCardClick('Scaleout')}
          >
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