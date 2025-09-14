import { ImageStyle } from 'react-native'
import Image from 'app/components/Image/Image'

export type AvatarSize = 'default' | 'sm' | 'lg' | 'icon'

interface Props {
  src: string
  size?: AvatarSize
  alt?: string
}

const Avatar = ({ src, size = 'default', alt = 'avatar' }: Props) => {
  const style = sizeStyles[size]
  return <Image src={src} alt={alt} style={style} />
}

const sizeStyles: Record<AvatarSize, ImageStyle> = {
  default: {
    height: 44,
    width: 44,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#2ECC71',
  },
  sm: {
    height: 36,
    width: 36,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#2ECC71',
  },
  lg: {
    height: 52,
    width: 52,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#2ECC71',
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#2ECC71',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Avatar
