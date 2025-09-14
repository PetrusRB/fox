'use client'
import { FlatList, Platform, useColorScheme } from 'react-native'
import { PostType } from 'app/types/post'
import PostWrapper from 'app/components/Post/Wrapper/PostWrapper'

const mockPosts: PostType[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `${i}`,
  user: {
    name: `Usuário ${i + 1}`,
    avatar: 'https://avatar.iran.liara.run/public',
  },
  title: `Melhor post do mundo ${i + 1}.`,
  content: `Este é um post de teste número ${i + 1}.`,
  image: i % 2 === 0 ? 'https://picsum.photos/500/300' : undefined,
}))

export const PostList = () => {
  const colorScheme = useColorScheme()

  return (
    <FlatList
      data={mockPosts}
      initialNumToRender={1}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostWrapper {...item} />}
      onEndReached={() => console.log('Carregar mais posts...')}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
      onEndReachedThreshold={0.3}
      showsVerticalScrollIndicator={false}
    />
  )
}
