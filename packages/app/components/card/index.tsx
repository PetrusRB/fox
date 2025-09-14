import React from 'react'
import { View, Text, ViewProps, TextProps } from 'react-native'
import { cn } from 'app/libs/util'

type SlotProps = ViewProps & { className?: string }
type TextSlotProps = TextProps & { className?: string }

function Card({ className, ...props }: SlotProps) {
  return (
    <View
      className={cn(
        // fundo adaptável + blur para web/desktop
        'backdrop-blur-md',
        'flex flex-col rounded-3xl border border-zinc-200/60 dark:border-zinc-700/50',
        'shadow-lg shadow-zinc-200/40 dark:shadow-black/40',
        'overflow-hidden',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: SlotProps) {
  return (
    <View
      className={cn(
        'flex flex-col items-center gap-2 px-6 pt-6 text-center',
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: TextSlotProps) {
  return (
    <Text
      className={cn(
        'text-2xl font-extrabold leading-snug text-zinc-900 dark:text-zinc-50',
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: TextSlotProps) {
  return (
    <Text
      className={cn('text-base text-zinc-600 dark:text-zinc-400', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: SlotProps) {
  return <View className={cn('ml-auto px-6 py-2', className)} {...props} />
}

function CardContent({ className, ...props }: SlotProps) {
  return (
    <View
      className={cn('px-6 py-4 flex flex-col gap-4', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: SlotProps) {
  return (
    <View
      className={cn(
        'flex flex-row items-center justify-center',
        'px-6 py-4 border-t border-zinc-200 dark:border-zinc-700',
        'bg-zinc-50/40 dark:bg-zinc-800/30'
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
