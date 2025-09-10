import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CodeHighlight from '@/components/CodeHighlight';
import { getComponentCode } from '@/utils/getComponentCode';
import RotatePlane from '@/components/spinners/RotatePlane';
import Chase from '@/components/spinners/Chase';
import DoubleBounce from '@/components/spinners/DoubleBounce';
import Rect from '@/components/spinners/Rect';
import Bounce from '@/components/spinners/Bounce';
import BounceDelay from '@/components/spinners/BounceDelay';
import Circle from '@/components/spinners/Circle';
import CircleFade from '@/components/spinners/CircleFade';
import Cube from '@/components/spinners/Cube';
import CubeGrid from '@/components/spinners/CubeGrid';
import FoldCube from '@/components/spinners/FoldCube';
import Scaleout from '@/components/spinners/Scaleout';

// 组件映射
const componentMap: Record<string, React.ComponentType> = {
  RotatePlane,
  Chase,
  DoubleBounce,
  Rect,
  Bounce,
  BounceDelay,
  Circle,
  CircleFade,
  Cube,
  CubeGrid,
  FoldCube,
  Scaleout,
};

interface ComponentDetailPageProps {
  params: {
    name: string;
  };
}

export default async function ComponentDetailPage({ params }: ComponentDetailPageProps) {
  const { name } = params;

  // 获取组件
  const Component = componentMap[name];

  if (!Component) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">组件未找到</h1>
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  // 获取组件源代码
  const code = await getComponentCode(name);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              返回
            </Link>
            <h1 className="text-2xl font-bold text-white">{name}</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          {/* Left Side - Component Preview */}
          <div className="bg-gray-800 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-white mb-8">组件预览</h2>
              <div className="flex items-center justify-center min-h-[300px]">
                <Component />
              </div>
            </div>
          </div>

          {/* Right Side - Source Code */}
          <div className="bg-gray-800 rounded-lg p-6 overflow-hidden">
            <h2 className="text-lg font-semibold text-white mb-4">源代码</h2>
            <div className="h-full overflow-auto">
              <CodeHighlight code={code} language="tsx" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// 生成静态参数
export async function generateStaticParams() {
  const componentNames = Object.keys(componentMap);

  return componentNames.map((name) => ({
    name,
  }));
}