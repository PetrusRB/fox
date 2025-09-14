'use client'

import React from 'react'
import { Text, TextProps } from 'react-native'
import { cn } from 'app/libs/util'

type LabelProps = TextProps & {
  className?: string
  disabled?: boolean
}

export function Label({ className, disabled, ...props }: LabelProps) {
  return (
    <Text
      className={cn(
        'flex select-none flex-row items-center gap-2 text-black dark:text-white text-sm font-medium leading-none',
        disabled && 'opacity-50',
        className
      )}
      {...props}
    />
  )
}
