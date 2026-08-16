import type { PropsWithChildren } from 'react'

import './Container.css'

type ContainerProps = PropsWithChildren<{
  variant?: 'content' | 'header'
}>

export function Container({
  children,
  variant = 'content',
}: ContainerProps) {
  return (
    <div
      className={`container container${variant === 'header' ? 'Header' : 'Content'}`}
    >
      {children}
    </div>
  )
}