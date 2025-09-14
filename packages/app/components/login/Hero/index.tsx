import { StyleSheet } from 'react-native'

import { Text, View } from 'app/components/Themed'
import { LoginForm } from '../Form'

export default function HeroLogin() {
  return (
    <View className="flex-1 items-center justify-center">
      <LoginForm />
    </View>
  )
}
