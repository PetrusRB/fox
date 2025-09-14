import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
  Image as ImageRN,
} from 'react-native'
import { Image as ExpoImage } from 'expo-image'
import { ImageSize } from 'app/types/components/image'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWX...'

interface Props {
  src: string
  style?: StyleProp<ImageStyle>
  size?: ImageSize
  alt?: string
  contentFit?: 'cover' | 'contain' | 'fill'
  transition?: number
}

const Image = ({
  src,
  alt = 'image',
  contentFit = 'cover',
  transition = 400,
  size = 'default',
  style,
}: Props) => {
  if (size === 'icon') {
    // ícone → usa View para centralizar
    return (
      <View style={sizeIconStyle}>
        <ImageRN src={src} alt={alt} style={{ width: 44, height: 44 }} />
      </View>
    )
  }
  const imageStyle: ImageStyle = StyleSheet.flatten([
    sizeStyles[size],
    style,
  ]) as ImageStyle
  if (typeof src === 'string') {
    return <ImageRN src={src} style={imageStyle} />
  }
  return (
    <ExpoImage
      source={{ uri: src }}
      alt={alt}
      placeholder={blurhash}
      style={imageStyle}
      contentFit={contentFit}
      transition={transition}
    />
  )
}
const sizeStyles: Record<'default' | 'sm' | 'lg' | 'xl' | 'full', ImageStyle> =
  {
    default: { width: 44, height: 44 },
    sm: { width: 36, height: 36 },
    lg: { width: 52, height: 52 },
    full: { width: 'auto', height: 256 },
    xl: { width: 63, height: 63 },
  }

const sizeIconStyle: ViewStyle = {
  width: 44,
  height: 44,
  justifyContent: 'center',
  alignItems: 'center',
}

export default Image
