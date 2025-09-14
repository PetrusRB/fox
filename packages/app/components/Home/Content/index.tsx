'use client'
import { Animated, Platform, useColorScheme } from 'react-native'
import { View } from 'app/components/Themed'
import { Friend } from 'app/types/user'
import { Friends } from 'app/components/Friends'
import { PostList } from '../../Post/List'
import colors from 'app/constants/colors'
import { Header } from '../../Header'
import { useRef } from 'react'

export const HomeContent = () => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme ?? 'light']
  // Valor animado do scroll
  const scrollY = useRef(new Animated.Value(0)).current

  return (
    <View className="bg-background">
      {/* Timeline de posts */}
      {Platform.OS !== 'web' && <Header scrollY={scrollY} />}
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: 80 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <PostList />
      </Animated.ScrollView>
    </View>
  )
}
