import React, { memo } from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'
import { cssInterop } from 'nativewind'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { IconName } from 'app/types/icon'

type IconProps = {
  name: IconName
  size?: number
  className?: string
  color?: string
  style?: StyleProp<TextStyle>
}
const nameMap: Record<string, string> = {
  home: 'home',
  person: 'person',
  mail: 'mail',
  addOutline: 'add-outline',
  lockClosed: 'lock-closed',
  heart: 'heart',
  heartOutline: 'heart-outline',
  shareSocialOutline: 'share-social-outline',
  settingsOutline: 'settings-outline',
  searchOutline: 'search-outline',
  notificationsOutline: 'notifications-outline',
  chatboxEllipsesOutline: 'chatbox-ellipses-outline',
  eye: 'eye',
  eyeOff: 'eye-off',
  logoGoogle: 'logo-google',
  logoGithub: 'logo-github',
}

const StyledNativeIcon = cssInterop(Ionicons, {
  className: { target: 'style', nativeStyleToProp: { color: 'color' } },
})

const Icon: React.FC<IconProps> = memo(
  ({ name, size = 20, className, color = 'black', style }) => {
    const nativeName = nameMap[name] || 'help-circle'
    return (
      <StyledNativeIcon
        name={nativeName as any}
        size={size}
        color={color}
        style={style}
        className={className}
      />
    )
  }
)

export default Icon
