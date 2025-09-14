import React, { useRef } from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  Animated,
  useColorScheme,
  View,
  Platform,
  Pressable,
} from 'react-native'
import colors from 'app/constants/colors'
import Icon from 'app/components/Icons/Icon'
import { IconName } from 'app/types/icon'

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps {
  children: React.ReactNode
  onPress?: (event: GestureResponderEvent) => void
  variant?: ButtonVariant
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between'
  size?: ButtonSize
  style?: ViewStyle
  className?: string
  textStyle?: TextStyle
  disabled?: boolean
  iconLeft?: IconName
  iconColor?: string
  iconRight?: IconName
}

export function Button({
  children,
  onPress,
  className,
  variant = 'default',
  size = 'default',
  align = 'center',
  style,
  textStyle,
  disabled,
  iconLeft,
  iconColor = '#000',
  iconRight,
}: ButtonProps) {
  const colorScheme = useColorScheme() || 'light'
  const isDark = colorScheme === 'dark'
  const [hovered, setIsHovered] = React.useState(false)

  const scale = useRef(new Animated.Value(1)).current

  const dynamicVariantStyles: Record<ButtonVariant, ViewStyle> = {
    default: {
      backgroundColor: isDark
        ? colors.buttonBackgroundDark
        : colors.buttonBackground,
    },
    destructive: { backgroundColor: '#dc3545' },
    outline: {
      backgroundColor: isDark ? '#1c1c1c' : '#fff',
      borderWidth: 1,
      borderColor: isDark ? '#555' : '#ccc',
    },
    secondary: { backgroundColor: isDark ? '#555' : '#6c757d' },
    ghost: {
      backgroundColor:
        Platform.OS === 'web'
          ? hovered
            ? isDark
              ? colors.buttonBackgroundDark
              : colors.buttonBackground
            : 'transparent'
          : 'transparent', // no mobile começa transparente
    },
    link: { backgroundColor: 'transparent' },
  }

  const dynamicTextVariantStyles: Record<ButtonVariant, TextStyle> = {
    default: { color: '#fff' },
    destructive: { color: '#fff' },
    outline: { color: isDark ? '#eee' : colors.zinc },
    secondary: { color: '#fff' },
    ghost: { color: isDark ? '#eee' : colors.zinc },
    link: { color: colors.primary, textDecorationLine: 'underline' },
  }

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        className={className}
        style={({ pressed }) => [
          styles.base,
          sizeStyles[size],
          dynamicVariantStyles[variant],
          style,
          disabled && styles.disabled,
          variant === 'ghost' && {
            backgroundColor: pressed
              ? isDark
                ? colors.buttonBackgroundDark
                : colors.buttonBackground
              : 'transparent',
          },
        ]}
        onPress={onPress}
        disabled={disabled}
        onPressIn={() =>
          Animated.spring(scale, {
            toValue: 0.97,
            useNativeDriver: true,
          }).start()
        }
        onPressOut={() =>
          Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()
        }
        {...(Platform.OS === 'web' && {
          onHoverIn: () => setIsHovered(true),
          onHoverOut: () => setIsHovered(false),
        })}
      >
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            width: '100%',
            justifyContent: align,
            alignItems: 'center',
            paddingHorizontal: 12,
          }}
        >
          {iconLeft && (
            <Icon name={iconLeft} color={iconColor} style={styles.icon} />
          )}
          <Text
            style={[
              styles.textBase,
              dynamicTextVariantStyles[variant],
              textStyle,
              disabled && styles.disabledText,
            ]}
          >
            {children}
          </Text>
          {iconRight && <Icon name={iconRight} style={styles.icon} />}
        </View>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBase: {
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginHorizontal: 6,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#999',
  },
})

const sizeStyles: Record<ButtonSize, ViewStyle> = {
  default: { height: 44, paddingHorizontal: 20 },
  sm: { height: 36, paddingHorizontal: 12 },
  lg: { height: 52, paddingHorizontal: 28 },
  icon: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
}
