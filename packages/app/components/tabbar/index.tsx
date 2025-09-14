import { View, Platform, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Text } from '@react-navigation/elements'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { colors, dark } = useTheme()
  const middleIndex = Math.floor(state.routes.length / 2)

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.card,
        borderTopWidth: 0.5,
        borderTopColor: colors.border,
        paddingBottom: Platform.OS === 'ios' ? 20 : 8,
        paddingTop: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.tabBarLabel ?? options.title ?? route.name
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })
          if (!isFocused && !event.defaultPrevented)
            navigation.navigate(route.name, route.params)
        }

        const onLongPress = () => {
          navigation.emit({ type: 'tabLongPress', target: route.key })
        }

        // Botão central (criação de conteúdo)
        if (index === middleIndex) {
          return (
            <View key={route.key} style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: dark ? '#fff' : '#000',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 30,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 6,
                }}
              >
                <Ionicons name="add" size={28} color={dark ? '#000' : '#fff'} />
              </TouchableOpacity>
            </View>
          )
        }

        // Botões laterais
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            {options.tabBarIcon ? (
              <Ionicons
                name={
                  (options.tabBarIcon as any)({
                    focused: isFocused,
                    color: isFocused ? colors.primary : colors.text,
                    size: 22,
                  }).props.name
                }
                size={22}
                color={isFocused ? colors.primary : colors.text}
              />
            ) : (
              <Ionicons
                name="ellipse"
                size={22}
                color={isFocused ? colors.primary : colors.text}
              />
            )}
            <Text
              style={{
                color: isFocused ? colors.primary : colors.text,
                fontSize: 12,
                marginTop: 2,
              }}
            >
              {typeof label === 'string' ? label : route.name}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
