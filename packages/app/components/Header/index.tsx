// Header.tsx
import { View } from 'app/components/Themed'
import Image from 'app/components/Image/Image'
import { Animated } from 'react-native'

type HeaderProps = {
  scrollY: Animated.Value
}

export const Header = ({ scrollY }: HeaderProps) => {
  // Interpola a posição do scroll -> opacidade e translateY
  const translateY = scrollY.interpolate({
    inputRange: [0, 100], // até 100px de scroll
    outputRange: [0, -100], // move pra cima e esconde
    extrapolate: 'clamp',
  })

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
      }}
      className="w-full absolute top-0 left-0 right-0 z-10"
    >
      <View className="justify-center items-center py-3 bg-background">
        <Image
          src="https://ik.imagekit.io/9k3mcoolader/logo.png?updatedAt=1757283655747"
          size="xl"
        />
      </View>
    </Animated.View>
  )
}
