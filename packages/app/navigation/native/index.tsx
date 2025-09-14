import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
} from '@react-navigation/bottom-tabs'
import { Index } from 'app/pages/index/screen'
import { ProfileScreen } from 'app/pages/profile/screen'
import { CreatePost } from 'app/pages/post/screen'

import {
  TouchableOpacity,
  StyleSheet,
  Animated,
  GestureResponderEvent,
  Platform,
  useColorScheme,
} from 'react-native'
import { Text, View } from 'app/components/Themed'
import Icon from 'app/components/Icons/Icon'
import colors from 'app/constants/colors'

export type RootTabParamList = {
  Inicio: undefined
  Pesquisar: undefined
  Criar: undefined
  Chat: undefined
  Perfil: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

const TabIcon = ({
  name,
  label,
  focused,
  size = 22,
  theme,
}: {
  name: string
  label: string
  focused: boolean
  size?: number
  theme: any
}) => (
  <View className="w-16 flex-1 pt-3 justify-center items-center">
    <Icon
      name={name}
      size={size}
      color={focused ? colors.primary : theme.desactived}
    />
    <Text
      style={{
        fontSize: 14,
        fontWeight: '500',
        marginTop: 2,
        color: focused ? colors.primary : theme.desactived,
      }}
    >
      {label}
    </Text>
  </View>
)

const CustomTabBarButton: React.FC<BottomTabBarButtonProps> = ({
  children,
  onPress,
}) => {
  const scale = new Animated.Value(1)

  const handlePressIn = () =>
    Animated.spring(scale, { toValue: 0.9, useNativeDriver: true }).start()
  const handlePressOut = (e: GestureResponderEvent) => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start()
    onPress?.(e)
  }

  return (
    <Animated.View style={{ transform: [{ scale }], top: 10 }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.customButtonContainer}
      >
        <View style={styles.customButton}>{children}</View>
      </TouchableOpacity>
    </Animated.View>
  )
}

export function NativeNavigation() {
  const colorSchema = useColorScheme()
  const theme = colors[colorSchema ?? 'light']

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        animation: 'fade',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          display: Platform.OS === 'web' ? 'none' : 'flex',
          bottom: -5,
          left: 16,
          right: 16,
          height: 70,
          backgroundColor: theme.background,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Index}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="home"
              label="Início"
              focused={focused}
              theme={theme}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pesquisar"
        component={Index}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="searchOutline"
              label="Navegar"
              focused={focused}
              theme={theme}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Criar"
        component={CreatePost}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: () => (
            <Icon name="addOutline" size={28} color={colors.secondary} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Index}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="chatboxEllipsesOutline"
              label="Chat"
              focused={focused}
              theme={theme}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="person"
              label="Perfil"
              focused={focused}
              theme={theme}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  customButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
    zIndex: 10,
  },
  customButton: {
    width: 55,
    height: 53,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
})
