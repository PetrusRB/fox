'use client'
import {
  Text as RNText,
  View as RNView,
  StyleSheet,
  TextProps as RNTextProps,
  ViewProps as RNViewProps,
} from 'react-native'
import Colors from 'app/constants/colors'
import { useColorScheme as useColorSchemeHook } from 'app/hooks/useColorSchema'
import { cssInterop } from 'nativewind'

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextProps = ThemeProps & RNTextProps
export type ViewProps = ThemeProps & RNViewProps

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorSchemeHook() ?? 'light'
  const colorFromProps = props[theme]
  return colorFromProps ?? Colors[theme][colorName]
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const themeColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'text'
  )

  // flatten incoming style (pode vir do cssInterop)
  const flat = StyleSheet.flatten(style) || {}
  // se a style já definiu color, respeita-a, caso contrário usa o tema
  const finalColor = flat.color ?? themeColor

  // colocar o tema antes do style garante que style explícito (classe) possa sobrescrever se quiser
  return <RNText style={[{ color: finalColor }, style]} {...otherProps} />
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const themeBackground = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )

  const flat = StyleSheet.flatten(style) || {}
  const finalBackground = flat.backgroundColor ?? themeBackground

  return (
    <RNView
      style={[{ backgroundColor: finalBackground }, style]}
      {...otherProps}
    />
  )
}

/**
 * Informa ao NativeWind que esses componentes customizados aceitam `className`.
 * O `target: 'style'` faz com que `className` gere um object style e seja passado em props.style.
 */
cssInterop(Text, {
  className: { target: 'style' },
})

cssInterop(View, {
  className: { target: 'style' },
})
