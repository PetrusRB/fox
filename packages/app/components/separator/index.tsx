import React from 'react'
import { View } from 'react-native'
import { cn } from 'app/libs/util'

type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

const Separator = ({
  orientation = 'horizontal',
  className,
}: SeparatorProps) => {
  return (
    <View
      className={cn(
        'bg-border shrink-0',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
    />
  )
}

export default Separator
