export { default as ClassicSpinner } from './ClassicSpinner'
export { default as DotsSpinner } from './DotsSpinner'
export { default as GradientSpinner } from './GradientSpinner'
export { default as PulseSpinner } from './PulseSpinner'
export { default as BounceSpinner } from './BounceSpinner'
export { default as WaveSpinner } from './WaveSpinner'
export { default as RingSpinner } from './RingSpinner'
export { default as GridSpinner } from './GridSpinner'
export { default as SquareSpinner } from './SquareSpinner'
export { default as CircleSpinner } from './CircleSpinner'

export type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo'
  className?: string
}