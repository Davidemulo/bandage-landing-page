import type { PropsWithChildren } from 'react'

import './Container.css'

type ContainerProps = PropsWithChildren

export function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>
}