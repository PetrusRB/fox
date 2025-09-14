import {
  ImageStyle,
  StyleSheet,
  ViewStyle,
  View,
  Image as ImageRN,
} from 'react-native'
import { SolitoImage } from 'solito/image'
import { ImageProps } from 'app/types/components/image'

const blurhash = 'LEHLk~WB2yk8pyo0adR*.7kCMdnj'

const Image = ({
  src,
  alt = 'image',
  className,
  size = 'default',
  style,
}: ImageProps) => {
  if (size === 'icon') {
    // ícone → usa View para centralizar
    return (
      <View style={sizeIconStyle}>
        <ImageRN
          source={{ uri: src }}
          className={className}
          alt={alt}
          style={{ width: 44, height: 44 }}
        />
      </View>
    )
  }
  const imageStyle: ImageStyle = StyleSheet.flatten([
    sizeStyles[size],
    style,
  ]) as ImageStyle
  if (typeof src === 'string') {
    return (
      <ImageRN source={{ uri: src }} className={className} style={imageStyle} />
    )
  }
  return (
    <SolitoImage
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurhash}
      style={imageStyle}
    />
  )
}
const sizeStyles: Record<'default' | 'sm' | 'lg' | 'xl' | 'full', ImageStyle> =
  {
    default: { width: 44, height: 44 },
    sm: { width: 36, height: 36 },
    full: { width: 'auto', height: 256 },
    lg: { width: 52, height: 52 },
    xl: { width: 63, height: 63 },
  }

const sizeIconStyle: ViewStyle = {
  width: 44,
  height: 44,
  justifyContent: 'center',
  alignItems: 'center',
}

export default Image
