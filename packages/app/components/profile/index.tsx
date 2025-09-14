import { Link } from 'solito/link'
import { View, Text } from '../Themed'
import { Button } from '../ui/button'
import { useColorScheme } from 'app/hooks/useColorSchema'
import colors from 'app/constants/colors'
import Image from 'app/components/Image/Image'
import { FlatList, ScrollView } from 'react-native'

const posts = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  src: `https://picsum.photos/200/200?random=${i}`,
}))

const Profile = () => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme ?? 'light']

  const renderPost = ({ item }: { item: { id: string; src: string } }) => (
    <Image
      src={item.src}
      style={{
        width: '32%',
        aspectRatio: 1,
        borderRadius: 12,
        marginBottom: 12,
        backgroundColor: theme.backgroundSidebar, // placeholder enquanto carrega
      }}
    />
  )

  const ListHeader = () => (
    <>
      {/* Banner */}
      <View style={{ backgroundColor: theme.background, height: 180 }}>
        <Image
          src="https://picsum.photos/800/200"
          style={{ width: '100%', height: '100%' }}
        />
      </View>

      {/* Avatar e informações principais */}
      <View className="items-center -mt-16 px-4">
        <Image
          src="https://i.pravatar.cc/150?img=3"
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 4,
            borderColor: theme.background,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 2 },
          }}
        />
        <Text className="text-2xl font-bold mt-3" style={{ color: theme.text }}>
          Nome do Usuário
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          @username
        </Text>

        {/* Estatísticas */}
        <View
          className="flex-row justify-around w-full mt-4"
          style={{
            backgroundColor: theme.card,
            paddingVertical: 12,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: theme.border,
          }}
        >
          <View className="items-center">
            <Text className="text-lg font-bold" style={{ color: theme.text }}>
              120
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Posts
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold" style={{ color: theme.text }}>
              1.2k
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Seguidores
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold" style={{ color: theme.text }}>
              300
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Seguindo
            </Text>
          </View>
        </View>

        {/* Botões de ação */}
        <View className="md:flex-row flex-col mt-4 space-x-2 w-full px-8">
          <Link href="/settings" className="flex-1">
            <Button
              variant="outline"
              size="sm"
              style={{
                justifyContent: 'center',
                paddingVertical: 10,
                borderRadius: 10,
                borderColor: theme.border,
              }}
              iconLeft="settingsOutline"
              iconColor={theme.text}
            >
              <Text style={{ color: theme.text }}>Configurações</Text>
            </Button>
          </Link>
        </View>

        {/* Bio */}
        <View className="mt-6 mb-9 px-4">
          <Text
            className="text-base font-semibold mb-2"
            style={{ color: theme.text }}
          >
            Sobre
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            Apaixonado por games e arte digital. Compartilhando momentos e
            criações com a comunidade. 🎮🎨
          </Text>
        </View>
      </View>
    </>
  )

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
      numColumns={3}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        paddingHorizontal: 8,
      }}
      contentContainerStyle={{
        paddingBottom: 60,
        backgroundColor: theme.background,
      }}
      ListHeaderComponent={ListHeader}
      showsVerticalScrollIndicator={false} // navegação mais limpa
    />
  )
}

export default Profile
