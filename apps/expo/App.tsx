import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { Layout } from 'app/layout'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'

import './global.css'

export default function App() {
  const { colorScheme } = useColorScheme()
  return (
    <Layout>
      <StatusBar style={colorScheme == 'dark' ? 'light' : 'dark'} />
      <Provider>
        <NativeNavigation />
      </Provider>
    </Layout>
  )
}
