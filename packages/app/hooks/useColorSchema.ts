'use client'
import { useEffect, useState } from 'react'
import { Appearance } from 'react-native'

type Scheme = 'light' | 'dark'

export function useColorScheme(): Scheme {
  const [scheme, setScheme] = useState<Scheme>(() => {
    // Durante SSR não há window — retorna 'light' por padrão (ou você pode retornar undefined)
    if (typeof window === 'undefined') return 'light'
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }
    return Appearance.getColorScheme() === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const m = window.matchMedia('(prefers-color-scheme: dark)')
      const onChange = (e: MediaQueryListEvent) =>
        setScheme(e.matches ? 'dark' : 'light')
      m.addEventListener('change', onChange)
      // set initial client value (covers hydration)
      setScheme(m.matches ? 'dark' : 'light')
      return () => m.removeEventListener('change', onChange)
    }

    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      setScheme(colorScheme === 'dark' ? 'dark' : 'light')
    })
    return () => sub.remove()
  }, [])

  return scheme
}
