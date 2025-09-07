import { NextResponse } from 'next/server'

export async function GET() {
  const spinners = [
    {
      id: 'classic',
      name: 'Classic Spinner',
      description: '经典的圆形加载动画',
      category: 'basic'
    },
    {
      id: 'dots',
      name: 'Dots Spinner',
      description: '三个跳跃的圆点动画',
      category: 'basic'
    },
    {
      id: 'gradient',
      name: 'Gradient Spinner',
      description: '渐变色边框旋转动画',
      category: 'advanced'
    },
    {
      id: 'pulse',
      name: 'Pulse Spinner',
      description: '渐变背景脉冲动画',
      category: 'advanced'
    },
    {
      id: 'bounce',
      name: 'Bounce Spinner',
      description: '三个弹跳球动画',
      category: 'basic'
    },
    {
      id: 'wave',
      name: 'Wave Spinner',
      description: '波浪形脉冲动画',
      category: 'advanced'
    },
    {
      id: 'ring',
      name: 'Ring Spinner',
      description: '环形边框旋转动画',
      category: 'basic'
    },
    {
      id: 'grid',
      name: 'Grid Spinner',
      description: '九宫格脉冲动画',
      category: 'advanced'
    },
    {
      id: 'square',
      name: 'Square Spinner',
      description: '方形旋转动画',
      category: 'basic'
    },
    {
      id: 'circle',
      name: 'Circle Spinner',
      description: '双层圆环动画',
      category: 'advanced'
    }
  ]

  return NextResponse.json({
    success: true,
    data: spinners,
    total: spinners.length
  })
}