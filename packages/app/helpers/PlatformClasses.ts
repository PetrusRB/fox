import { Platform } from 'react-native'

export function platformClasses(className?: string) {
  if (!className) return ''

  const classes = className.split(/\s+/)

  return classes
    .filter((cls) => {
      if (cls.startsWith('nativeonly:')) {
        return Platform.OS !== 'web'
      }
      if (cls.startsWith('webonly:')) {
        return Platform.OS === 'web'
      }
      return true // classes normais sempre passam
    })
    .map((cls) => cls.replace(/^(nativeonly:|webonly:)/, '')) // remove prefixo
    .join(' ')
}
