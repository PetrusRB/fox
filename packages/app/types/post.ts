export type PostType = {
  id: string
  user: {
    name: string
    avatar: string
  }
  title: string
  image?: string
  content: string
}
