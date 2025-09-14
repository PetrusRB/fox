'use client'

import { Button } from 'app/components/ui/button'
import { Text } from 'react-native'
import { useEffect, useState } from 'react'
import Icon from 'app/components/Icons'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
        <Icon name="IoSunny" size={16} />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onPress={() => {
        console.log('toggle theme')
      }}
      className="h-9 w-9"
    >
      <Text className="sr-only">Toggle theme</Text>
    </Button>
  )
}
