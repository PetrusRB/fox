import React, { memo } from 'react'
import * as IoIcons from 'react-icons/io5'
import { IconName } from 'app/types/icon'

type IconProps = {
  name: IconName
  size?: number
  color?: string
  style?: React.CSSProperties
}

const nameMap: Record<IconName, keyof typeof IoIcons> = {
  home: 'IoHome',
  person: 'IoPerson',
  mail: 'IoMail',
  searchOutline: 'IoSearchOutline',
  settingsOutline: 'IoSettingsOutline',
  heart: 'IoHeart',
  heartOutline: 'IoHeartOutline',
  shareSocialOutline: 'IoShareSocialOutline',
  notificationsOutline: 'IoNotificationsOutline',
  chatboxEllipsesOutline: 'IoChatboxEllipsesOutline',
  addOutline: 'IoAddCircleOutline',
  lockClosed: 'IoLockClosed',
  eye: 'IoEye',
  eyeOff: 'IoEyeOff',
  logoGoogle: 'IoLogoGoogle',
  logoGithub: 'IoLogoGithub',
}

const Icon: React.FC<IconProps> = memo(
  ({ name, size = 20, color = 'black', style }) => {
    const WebIcon = IoIcons[nameMap[name]] || IoIcons.IoHelpCircle
    return <WebIcon size={size} color={color} style={style} />
  }
)

export default Icon
