import { useColorScheme, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'app/components/Icons/Icon'
import Avatar from 'app/components/Avatar'
import colors from 'app/constants/colors'
import Image from 'app/components/Image/Image'
import { platformClasses } from 'app/helpers/PlatformClasses'
import { useState } from 'react'
import { PostType } from 'app/types/post'
import { Button } from '../../ui/button'
import { IconName } from '../../../types/icon'

export const PostContent = ({ user, title, content, image }: PostType) => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme ?? 'light']
  const [like, setLike] = useState<boolean>(false)

  const handleLike = () => {
    setLike(!like)
  }

  return (
    <View
      className="w-full mb-4 p-4 border-t"
      style={{
        backgroundColor: theme.card,
        borderColor: theme.border,
        shadowColor: theme.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      }}
    >
      {/* Header */}
      <View className="flex-row items-center mb-3">
        <Avatar src={user.avatar} size="default" />
        <View className="ml-3">
          <Text
            className="font-semibold text-base"
            style={{ color: theme.primaryText }}
          >
            {user.name}
          </Text>
          <Text
            className="text-xs opacity-60"
            style={{ color: theme.textSecondary }}
          >
            @{user.name.toLowerCase().replace(/\s+/g, '')}
          </Text>
        </View>
      </View>

      {/* Title */}
      <Text
        className="text-xl font-bold leading-6 mb-3"
        style={{ color: theme.primaryText }}
      >
        {title}
      </Text>

      {/* Content */}
      <Text
        className="text-sm leading-6 mb-3"
        style={{ color: theme.primaryText }}
      >
        {content}
      </Text>

      {/* Post Image */}
      {image && (
        <View
          className="mb-3"
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            shadowColor: theme.shadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <Image src={image} size={'full'} resizeMode="cover" />
        </View>
      )}

      {/* Actions */}
      <View
        style={{
          flexDirection: 'row', // sempre horizontal
          flexWrap: 'wrap', // permite quebrar linha no mobile
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          marginTop: 8,
        }}
      >
        <Action
          icon={like ? 'heart' : 'heartOutline'}
          label="Curtir"
          onPress={handleLike}
          theme={theme}
        />
        <Action icon="chatboxEllipsesOutline" label="Comentar" theme={theme} />
        <Action icon="shareSocialOutline" label="Compartilhar" theme={theme} />
      </View>
    </View>
  )
}

type ActionProps = {
  icon?: IconName
  label: string
  onPress?: () => void
  theme: (typeof colors)['light']
}

const Action = ({ icon, label, onPress, theme }: ActionProps) => (
  <Button
    variant="ghost"
    iconLeft={icon}
    size="sm"
    className="mb-3"
    style={{
      margin: 6, // espaçamento consistente
      minWidth: 80, // garante touch target mínimo
      justifyContent: 'center',
    }}
    iconColor={theme.text}
    onPress={onPress}
  >
    <Text
      className="text-base ml-2 font-medium"
      style={{ color: theme.primaryText }}
    >
      {label}
    </Text>
  </Button>
)
