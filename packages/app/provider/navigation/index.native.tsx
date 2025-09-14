import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const linking = {
    prefixes: [Linking.createURL('/')],
    config: {
      screens: {
        Home: '',
        Profile: 'profile',
      },
    },
  }
  return <NavigationContainer linking={linking}>{children}</NavigationContainer>
}
