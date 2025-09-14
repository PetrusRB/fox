'use client'
import { View, Text, Platform } from 'react-native'
import {
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
} from 'react-native'
import { platformClasses } from 'app/helpers/PlatformClasses'
import { Link } from 'solito/link'
import colors from 'app/constants/colors'
import Image from 'app/components/Image/Image'
import Avatar from 'app/components/Avatar'
import { Button } from '../ui/button'

const menuItems = [
  { label: 'Home', icon: 'home', href: '/' },
  { label: 'Profile', icon: 'person', href: '/profile' },
  { label: 'Messages', icon: 'chatboxEllipsesOutline', href: '/messages' },
]

export const Navbar = () => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme ?? 'light']

  // Hook custom para detectar largura da tela
  const { width } = useWindowDimensions()
  const isDesktop = Platform.OS === 'web' && width >= 768

  if (!isDesktop) return null // esconde navbar em telas pequenas

  return (
    <View
      className={platformClasses(
        `bg-background flex flex-col h-full w-64 rounded-md p-4 shadow-md`
      )}
      style={{
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      {/* Logo / Título */}
      <View className="mb-10 items-center">
        <Image
          src="https://ik.imagekit.io/9k3mcoolader/logo.png?updatedAt=1757283655747"
          size="xl"
        />
      </View>

      {/* Menu Items */}
      {menuItems.map((item) => (
        <Link key={item.label} href={item.href}>
          <Button
            variant="ghost"
            iconLeft={item.icon as any}
            iconColor={theme.text}
            align="flex-start"
            className="p-3 mb-2"
          >
            <Text
              className="text-base ml-2 font-medium"
              style={{ color: theme.primaryText }}
            >
              {item.label}
            </Text>
          </Button>
        </Link>
      ))}

      {/* Rodapé - Usuário + Config */}
      <View className="pt-4 border-t" style={{ borderColor: theme.border }}>
        <View className="flex-row items-center mb-4">
          <Avatar src="https://avatar.iran.liara.run/public" size="sm" />
          <Text
            className="ml-2 font-medium"
            style={{ color: theme.primaryText }}
          >
            Você
          </Text>
        </View>
        <Link href="/settings">
          <Button
            variant="ghost"
            iconLeft="settingsOutline"
            iconColor={theme.text}
            align="flex-start"
            className="p-3 mb-2"
          >
            <Text
              className="text-base ml-2 font-medium"
              style={{ color: theme.primaryText }}
            >
              Configurações
            </Text>
          </Button>
        </Link>
      </View>
    </View>
  )
}
