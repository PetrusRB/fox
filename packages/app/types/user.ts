export interface UserBase {
  id: string
  name: string
  avatar: string
}
export type Friend = UserBase & {}
export type UserType = Friend & {
  followers: number
  following: number
  banner: string
  bio: string
}
