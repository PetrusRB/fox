import { ImageStyle, StyleProp } from 'react-native'

export type ImageSize = 'default' | 'sm' | 'lg' | 'xl' | 'icon'
export interface ImageProps {
  src: string
  style?: StyleProp<ImageStyle>
  size?: ImageSize
  className?: string
  alt?: string
}
