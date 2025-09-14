import { ScrollView, View, Text, useColorScheme } from 'react-native'
import { Friend } from 'app/types/user'
import Avatar from 'app/components/Avatar'
import colors from 'app/constants/colors'

export const Friends = ({ friends }: { friends: Friend[] }) => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme ?? 'light']

  return (
    <>
      <View
        style={{ borderColor: theme.border }}
        className="w-64 border-l p-4 hidden sm:flex"
      >
        <Text
          style={{ color: theme.text }}
          className="text-lg font-semibold mb-3"
        >
          Amigos
        </Text>
        <ScrollView>
          {friends.map((friend) => (
            <View key={friend.id} className="flex-row items-center mb-3">
              <Avatar src={friend.avatar} size="sm" />
              <Text style={{ color: theme.primaryText }} className="ml-2">
                {friend.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  )
}
