import React, { ReactNode } from 'react'
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native'
import colors from 'app/constants/colors'
import { cn } from 'app/libs/util'
import { IconName } from 'app/types/icon'
import Icon from 'app/components/Icons/Icon'

export interface InputProps extends TextInputProps {
  id?: string
  icon?: IconName
  iconPosition?: 'left' | 'right'
  iconColor?: string
  iconSize?: number
  type?: string
  className?: string
  placeholder: string
  containerStyle?: ViewStyle
  inputStyle?: TextStyle
}

export const Input: React.FC<InputProps> = ({
  icon,
  iconPosition = 'left',
  iconColor = '#6b7280',
  iconSize = 20,
  containerStyle,
  className,
  placeholder,
  inputStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon && iconPosition === 'left' && (
        <View style={styles.iconLeft}>
          <Icon name={icon} size={iconSize} color={iconColor} />
        </View>
      )}
      <TextInput
        className={cn(
          className,
          'bg-white dark:bg-zinc-900 border text-zinc-900 dark:text-white'
        )}
        placeholder={placeholder}
        style={[styles.input, inputStyle, style]}
        placeholderTextColor="#6b7280"
        {...props}
      />
      {icon && iconPosition === 'right' && (
        <View style={styles.iconRight}>
          <Icon name={icon} size={iconSize} color={iconColor} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 44,
    minWidth: 0,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 14,
    backgroundColor: 'transparent',
    color: colors.dark.tint,
  },
  iconLeft: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 12,
    justifyContent: 'center',
  },
  iconRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 12,
    justifyContent: 'center',
  },
})
