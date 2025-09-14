'use client'
import { Navbar } from 'app/components/Sidebar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  useColorScheme,
  View,
  Platform,
  useWindowDimensions,
} from 'react-native'
import colors from 'app/constants/colors'
import { Friend } from 'app/types/user'
import { Friends } from 'app/components/Friends'

type Props = {
  children: React.ReactNode
}
const mockFriends: Friend[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `${i}`,
  name: `Amigo ${i + 1}`,
  avatar: 'https://avatar.iran.liara.run/public',
}))

const queryClient = new QueryClient()

export const Layout = ({ children }: Props) => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme ?? 'light']
  const { width } = useWindowDimensions()
  const isWeb = Platform.OS === 'web' && width >= 768

  return (
    <QueryClientProvider client={queryClient}>
      <View
        style={{
          flex: 1,
          flexDirection: isWeb ? 'row' : 'column',
          backgroundColor: theme.background,
        }}
      >
        {/* Navbar */}
        <View
          className="hidden lg:flex"
          style={
            {
              width: 256, // largura fixa da barra lateral
              height: '100vh',
              position: 'sticky', // sempre visível
              top: 0,
              borderRightWidth: 1,
              borderColor: theme.border,
            } as any
          }
        >
          <Navbar />
        </View>

        {/* Conteúdo principal */}
        <View style={{ flex: 1 }}>{children}</View>
        <Friends friends={mockFriends} />
      </View>
    </QueryClientProvider>
  )
}
