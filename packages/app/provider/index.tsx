import { NavigationProvider } from './navigation'
import { JSXElementConstructor, ReactElement } from 'react'

export function Provider({
  children,
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>
}) {
  return <NavigationProvider>{children}</NavigationProvider>
}
