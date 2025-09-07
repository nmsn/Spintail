# Spintail Components

一个基于 Next.js 和 Tailwind CSS v4 构建的精美 React Spinner 组件库。

## ✨ 特性

- 🎨 **精美设计** - 10+ 种不同风格的加载动画
- 🎯 **一键复制** - 无需安装，直接复制代码到项目中
- 🎨 **高度可定制** - 支持多种尺寸和颜色主题
- ⚡ **高性能** - 基于 CSS 动画，轻量级且流畅
- 📱 **响应式** - 完美适配各种屏幕尺寸
- 🔧 **TypeScript 支持** - 完整的类型定义

## 🚀 快速开始

### 本地运行

```bash
# 克隆项目
git clone <repository-url>
cd spintail-components

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看项目。

### 使用组件

1. 访问 [组件页面](http://localhost:3000/components)
2. 选择你喜欢的 Spinner 样式
3. 调整尺寸和颜色
4. 点击"复制代码"按钮
5. 将代码粘贴到你的项目中

## 📦 组件列表

| 组件名称        | 描述             | 特点       |
| --------------- | ---------------- | ---------- |
| ClassicSpinner  | 经典圆形加载动画 | 简洁、通用 |
| DotsSpinner     | 三个跳跃的圆点   | 可爱、轻快 |
| GradientSpinner | 渐变色边框旋转   | 现代、炫酷 |
| PulseSpinner    | 渐变背景脉冲     | 柔和、优雅 |
| BounceSpinner   | 三个弹跳球       | 动感、活泼 |
| WaveSpinner     | 波浪形脉冲       | 流畅、自然 |
| RingSpinner     | 环形边框旋转     | 清晰、专业 |
| GridSpinner     | 九宫格脉冲       | 复杂、有趣 |
| SquareSpinner   | 方形旋转         | 几何、简约 |
| CircleSpinner   | 双层圆环         | 层次、丰富 |

## 🎨 自定义选项

### 尺寸
- `sm` - 小尺寸
- `md` - 中等尺寸（默认）
- `lg` - 大尺寸
- `xl` - 超大尺寸

### 颜色主题
- `blue` - 蓝色（默认）
- `green` - 绿色
- `purple` - 紫色
- `red` - 红色
- `yellow` - 黄色
- `indigo` - 靛蓝色

## 💡 使用示例

```tsx
import React from 'react'

// 基础用法
<ClassicSpinner />

// 自定义尺寸和颜色
<ClassicSpinner size="lg" color="green" />

// 添加自定义样式
<ClassicSpinner className="my-4" />
```

## 🛠 技术栈

- **Next.js 15** - React 框架
- **Tailwind CSS v4** - 样式框架
- **TypeScript** - 类型安全
- **Lucide React** - 图标库

## 📋 系统要求

- Node.js 18+ 
- React 18+
- Tailwind CSS 3+

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

设计灵感来源于：
- [SpinKit](https://github.com/tobiasahlin/SpinKit)
- CSS Loaders & Spinners

---

Built with ❤️ using Next.js and Tailwind CSS